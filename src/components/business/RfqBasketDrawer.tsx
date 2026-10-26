"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Clock,
  Package,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";
import { useRfqStore } from "@/hooks/useRfqStore";
import { SparesRequisitionSchema } from "@/lib/schemas";
import { SparesRequisitionItem } from "@/types/rfq";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select";

export function RfqBasketDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    clearBasket,
    getTotalCount,
  } = useRfqStore();

  const [view, setView] = useState<"cart" | "checkout" | "confirmation">("cart");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    cityState: "",
    requirementStage: "immediate-po-ready",
    gstNumber: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    requisitionId: string;
    submittedAt: string;
    items: SparesRequisitionItem[];
    totalUnits: number;
    contact: typeof formData;
  } | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) {
        closeDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const totalUnits = getTotalCount();

  const handleQuantityChange = (id: string, current: number, delta: number) => {
    const newQty = current + delta;
    if (newQty <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQty);
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (items.length === 0) {
      setErrors({ form: "Your cart is empty. Add at least one item." });
      return;
    }

    const payload = {
      channel: "spares-consumables" as const,
      items: items,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      cityState: formData.cityState.trim(),
      organization: formData.organization.trim() || undefined,
      requirementStage: formData.requirementStage || undefined,
      gstNumber: formData.gstNumber.trim() || undefined,
      notes: formData.notes.trim() || undefined,
      submittedAt: new Date().toISOString(),
    };

    const result = SparesRequisitionSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0]?.toString();
        if (fieldName) {
          fieldErrors[fieldName] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `SYN-REQ-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      
      setSubmissionResult({
        requisitionId: generatedId,
        submittedAt: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        }),
        items: [...items],
        totalUnits: totalUnits,
        contact: { ...formData },
      });

      clearBasket();
      setView("confirmation");
    }, 450);
  };

  const handleCopyReference = () => {
    if (submissionResult?.requisitionId) {
      navigator.clipboard.writeText(submissionResult.requisitionId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCloseAndReset = () => {
    setView("cart");
    setSubmissionResult(null);
    setErrors({});
    closeDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={handleCloseAndReset}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="RFQ Requisition Cart"
        className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-border-light animate-in slide-in-from-right duration-250"
      >
        {/* 1. DRAWER HEADER */}
        <div className="px-5 py-4 border-b border-border-light bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-brand-teal text-white flex items-center justify-center shrink-0">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm sm:text-base text-slate-900">
                {view === "cart" && "RFQ Requisition Cart"}
                {view === "checkout" && "Complete Requisition Request"}
                {view === "confirmation" && "Requisition Transmitted"}
              </h2>
              <p className="font-mono text-[11px] text-slate-500">
                {view === "cart" && `${items.length} product${items.length === 1 ? "" : "s"} (${totalUnits} total units)`}
                {view === "checkout" && "Domestic Supply & Hyderabad Depot Dispatch"}
                {view === "confirmation" && "Official Syinco Engineering & Procurement Dispatch"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {view === "cart" && items.length > 0 && (
              <button
                type="button"
                onClick={clearBasket}
                className="text-[11px] font-mono text-slate-400 hover:text-red-600 transition-colors flex items-center gap-1 px-2 py-1 cursor-pointer"
                title="Clear all items from cart"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleCloseAndReset}
              aria-label="Close cart"
              className="p-1.5 rounded-sm text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2. DRAWER BODY */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* VIEW A: CART ITEMS LIST */}
          {view === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <ShoppingCart className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div className="space-y-1.5 max-w-xs">
                    <h3 className="font-display font-bold text-base text-slate-900">
                      Your Cart is Empty
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Explore our catalogue of scientific instruments, vacuum systems, pumps, valves, and spares to request formal quotations.
                    </p>
                  </div>
                  <Link
                    href="/products"
                    onClick={closeDrawer}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-teal text-white rounded-xs text-xs font-mono font-semibold hover:bg-brand-teal-dark transition-colors shadow-2xs"
                  >
                    <span>Browse Product Catalogue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white border border-border-light rounded-sm hover:border-brand-teal/40 transition-colors flex gap-3 items-start"
                    >
                      {/* Thumbnail or placeholder */}
                      <div className="w-14 h-14 bg-slate-50 border border-border-light rounded-xs shrink-0 flex items-center justify-center overflow-hidden p-1 relative">
                        {item.thumbnailUrl ? (
                          <Image
                            src={item.thumbnailUrl}
                            alt={item.name}
                            width={56}
                            height={56}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <Package className="w-6 h-6 text-slate-400" />
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-sans font-semibold text-xs text-slate-900 leading-snug truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="text-slate-400 hover:text-red-600 transition-colors p-0.5 cursor-pointer shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-mono text-slate-500 mt-0.5">
                          <span>Part/Model: <strong className="text-slate-700">{item.partNumber}</strong></span>
                          {item.category && <span>• {item.category}</span>}
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                          <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-xs font-semibold">
                            ✓ {item.stockStatus === "hyderabad-stock" ? "Hyderabad Stock" : "Direct Supply"}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center border border-border-light rounded-xs bg-slate-50 overflow-hidden font-mono text-xs">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                              aria-label="Decrease quantity"
                              className="px-2 py-1 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 font-bold text-slate-900 text-center min-w-[24px]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                              aria-label="Increase quantity"
                              className="px-2 py-1 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* VIEW B: CHECKOUT / REQUISITION DETAILS FORM */}
          {view === "checkout" && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <button
                type="button"
                onClick={() => setView("cart")}
                className="inline-flex items-center gap-1 text-xs font-mono text-brand-teal hover:underline mb-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Cart Items ({items.length})</span>
              </button>

              {/* Scope & Institutional Note */}
              <div className="p-3 bg-brand-teal-tint/20 border border-brand-teal/30 rounded-xs text-xs font-sans text-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-brand-teal">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Institutional Procurement &amp; Tender Scope</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Submitting this requisition generates a formal quotation with customs documentation, utility requirements, and delivery timeline from our Hyderabad warehouse.
                </p>
              </div>

              {errors.form && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
                  {errors.form}
                </div>
              )}

              {/* Applicant Name */}
              <div>
                <label htmlFor="req-name" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                  Full Name / Principal Investigator *
                </label>
                <Input
                  id="req-name"
                  placeholder="e.g. Dr. Ramesh Rao / Purchase Officer"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="req-email" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                    Institutional / Work Email *
                  </label>
                  <Input
                    id="req-email"
                    type="email"
                    placeholder="name@iitb.ac.in / org.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="req-phone" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                    Contact Phone (10 digits) *
                  </label>
                  <Input
                    id="req-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    error={errors.phone}
                    required
                  />
                </div>
              </div>

              {/* Organization / Institution */}
              <div>
                <label htmlFor="req-org" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                  Organization / University / Laboratory Name *
                </label>
                <Input
                  id="req-org"
                  placeholder="e.g. IIT Madras / DRDO DMRL / CSIR-NCL"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  error={errors.organization}
                  required
                />
              </div>

              {/* City & State and Tax ID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="req-city" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                    City &amp; State *
                  </label>
                  <Input
                    id="req-city"
                    placeholder="e.g. Hyderabad, Telangana"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    error={errors.cityState}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="req-tax-id" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                    Tax ID / Institutional ID (Optional)
                  </label>
                  <Input
                    id="req-tax-id"
                    placeholder="Institutional / Tax ID"
                    value={formData.gstNumber}
                    onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                  />
                </div>
              </div>

              {/* Requirement Stage */}
              <div>
                <label htmlFor="req-stage" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                  Procurement Timeline / Stage
                </label>
                <Select
                  value={formData.requirementStage}
                  onValueChange={(val) => setFormData({ ...formData, requirementStage: val })}
                >
                  <SelectTrigger id="req-stage">
                    <SelectValue placeholder="Select procurement timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate-po-ready">Immediate PO Ready (Within 30 Days)</SelectItem>
                    <SelectItem value="budgetary-next-fy">Budgetary Estimate / Next Financial Year</SelectItem>
                    <SelectItem value="technical-evaluation">Technical Evaluation &amp; Tender Specification</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Technical Notes / Special Requirements */}
              <div>
                <label htmlFor="req-notes" className="block text-xs font-sans font-medium text-slate-800 mb-1">
                  Technical Specifications / Sizing Remarks (Optional)
                </label>
                <textarea
                  id="req-notes"
                  rows={2}
                  placeholder="Mention any custom flange types, electrical supply specs, target vacuum/temperature, or delivery urgency..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 bg-slate-50 border border-border-light rounded-xs text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-xs font-mono justify-center gap-2 shadow-xs cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Requisition to Syinco Engineering...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Requisition Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* VIEW C: DETAILED CONFIRMATION SCREEN (ALL RECEIVED DETAILS) */}
          {view === "confirmation" && submissionResult && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Success Badge */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-sm text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display font-bold text-base text-emerald-950">
                  Requisition Successfully Logged
                </h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Your procurement requisition has been registered with our Hyderabad engineering and logistics desk.
                </p>
              </div>

              {/* Summary Details Card */}
              <div className="p-4 bg-slate-50 border border-border-light rounded-sm space-y-3.5 font-sans">
                <div className="flex items-center justify-between pb-3 border-b border-border-light">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Requisition Reference
                    </span>
                    <span className="font-mono text-sm font-bold text-brand-teal">
                      {submissionResult.requisitionId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyReference}
                    className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 bg-white border border-border-light rounded-xs text-slate-700 hover:text-brand-teal hover:border-brand-teal transition-colors cursor-pointer"
                    title="Copy Requisition Reference ID"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? "Copied" : "Copy ID"}</span>
                  </button>
                </div>

                {/* Logistics & Timelines */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase block">Submission Time</span>
                    <span className="font-semibold text-slate-800">{submissionResult.submittedAt}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase block">Engineering SLA</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Within 2–4 Hours
                    </span>
                  </div>
                </div>

                {/* Fulfillment Depot */}
                <div className="text-xs pt-2 border-t border-slate-200/70">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">Fulfillment Hub</span>
                  <span className="font-medium text-slate-700 block mt-0.5">
                    SYINCO Technologies Central Depot, Mattuguda, Nagole, Hyderabad 500068, India
                  </span>
                </div>

                {/* Applicant Contact Summary */}
                <div className="pt-2 border-t border-slate-200/70 text-xs space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1">
                    Contact &amp; Institutional Details
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="text-slate-500">Contact: </span>
                      <strong className="text-slate-800">{submissionResult.contact.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Email: </span>
                      <strong className="text-slate-800">{submissionResult.contact.email}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Phone: </span>
                      <strong className="text-slate-800">{submissionResult.contact.phone}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Location: </span>
                      <strong className="text-slate-800">{submissionResult.contact.cityState}</strong>
                    </div>
                    {submissionResult.contact.organization && (
                      <div className="col-span-2">
                        <span className="text-slate-500">Organization: </span>
                        <strong className="text-slate-800">{submissionResult.contact.organization}</strong>
                      </div>
                    )}
                    {submissionResult.contact.gstNumber && (
                      <div className="col-span-2">
                        <span className="text-slate-500">Tax ID: </span>
                        <strong className="text-slate-800 font-mono">{submissionResult.contact.gstNumber}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {/* Line Items Received */}
                <div className="pt-2 border-t border-slate-200/70">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2">
                    Requested Items ({submissionResult.items.length} items, {submissionResult.totalUnits} units)
                  </span>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                    {submissionResult.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs py-1 px-2 bg-white rounded-xs border border-slate-200"
                      >
                        <div className="min-w-0 pr-2">
                          <span className="font-semibold text-slate-800 block truncate">{item.name}</span>
                          <span className="font-mono text-[10px] text-slate-500">Part: {item.partNumber}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-brand-teal shrink-0">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleCloseAndReset}
                  className="w-full text-xs font-mono justify-center cursor-pointer"
                >
                  Done &amp; Continue Browsing
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* 3. DRAWER FOOTER (FOR CART VIEW ONLY) */}
        {view === "cart" && items.length > 0 && (
          <div className="p-4 border-t border-border-light bg-slate-50 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">Total Systems &amp; Spares:</span>
              <span className="font-bold text-slate-900 text-sm">{totalUnits} units</span>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setView("checkout")}
              className="w-full text-xs font-mono justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Proceed to Requisition Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <p className="text-[10px] text-slate-500 text-center">
              Domestic Supply • Hyderabad Spare Parts Depot • Factory Warranty
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
