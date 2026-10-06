"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/Select";
import { CheckCircle2, ShieldCheck, ArrowRight, Clock, AlertTriangle } from "lucide-react";
import { CapitalEquipmentRFQSchema } from "@/lib/schemas";
import { CapitalEquipmentRFQ } from "@/types/rfq";

export interface ApplicationQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productSlug?: string;
  productName: string;
  manufacturerName: string;
  activeModel: string;
}

export function ApplicationQuoteModal({
  isOpen,
  onClose,
  productSlug = "advance-riko-zem-3",
  productName,
  manufacturerName,
  activeModel,
}: ApplicationQuoteModalProps) {
  const [formData, setFormData] = useState<Partial<CapitalEquipmentRFQ>>({
    organizationType: "central-university-iit",
    requirementStage: "technical-evaluation",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfqId, setSubmittedRfqId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const payload: Partial<CapitalEquipmentRFQ> = {
      channel: "capital-equipment",
      productSlug,
      productName,
      modelNumber: activeModel,
      manufacturerName,
      organizationType: formData.organizationType,
      requirementStage: formData.requirementStage,
      fullName: formData.fullName,
      designation: formData.designation,
      email: formData.email,
      phone: formData.phone,
      cityState: formData.cityState,
      targetTemperature: formData.targetTemperature,
      sampleDimensions: formData.sampleDimensions,
      notes: formData.notes,
      submittedAt: new Date().toISOString(),
    };

    const result = CapitalEquipmentRFQSchema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Deterministic client-side validation & simulated development dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `RFQ-CAP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRfqId(generatedId);
    }, 400);
  };

  const handleResetAndClose = () => {
    setSubmittedRfqId(null);
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <DialogContent
        className="max-w-xl max-h-[90vh] overflow-y-auto"
        aria-labelledby="cap-quote-title"
        aria-describedby="cap-quote-desc"
      >
        {!submittedRfqId ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/40 px-2 py-0.5 rounded-xs">
                  Channel A: Capital System Quotation
                </span>
                <span className="font-mono text-[11px] text-ink-muted">
                  Pre-filled Sizing
                </span>
              </div>
              <DialogTitle id="cap-quote-title">
                Request Quotation: {productName}
              </DialogTitle>
              <DialogDescription id="cap-quote-desc">
                Configure institutional tender pricing, customs clearance scope, and engineering commissioning for model{" "}
                <strong className="text-ink-primary font-mono">{activeModel}</strong> ({manufacturerName}).
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              {/* Pre-filled Sizing Summary (Guaranteed single product entry) */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-border-light rounded-sm text-xs font-mono">
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase">Selected Model (Locked)</span>
                  <span className="font-bold text-ink-primary">{activeModel}</span>
                </div>
                <div>
                  <span className="text-ink-muted block text-[10px] uppercase">OEM Lineage</span>
                  <span className="font-bold text-ink-primary">{manufacturerName}</span>
                </div>
              </div>

              {/* Organization & Requirement Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="cap-org" className="block text-xs font-sans font-medium text-ink-primary mb-1">
                    Organization Type *
                  </label>
                  <Select
                    value={formData.organizationType}
                    onValueChange={(val: CapitalEquipmentRFQ["organizationType"]) =>
                      setFormData((prev) => ({ ...prev, organizationType: val }))
                    }
                  >
                    <SelectTrigger id="cap-org">
                      <SelectValue placeholder="Select institution type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central-university-iit">
                        Central University / IIT / IISc / NIT
                      </SelectItem>
                      <SelectItem value="drdo-csir-isro">
                        National R&D (DRDO / CSIR / ISRO / BARC)
                      </SelectItem>
                      <SelectItem value="private-rd-industry">
                        Corporate / Private Industry R&D
                      </SelectItem>
                      <SelectItem value="other">Other Academic / Defense</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.organizationType && (
                    <span className="text-[11px] text-red-600 block mt-1">{errors.organizationType}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="cap-timeline" className="block text-xs font-sans font-medium text-ink-primary mb-1">
                    Requirement Stage *
                  </label>
                  <Select
                    value={formData.requirementStage}
                    onValueChange={(val: CapitalEquipmentRFQ["requirementStage"]) =>
                      setFormData((prev) => ({ ...prev, requirementStage: val }))
                    }
                  >
                    <SelectTrigger id="cap-timeline">
                      <SelectValue placeholder="Select procurement timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate-po-ready">
                        Immediate Purchase / PO Ready (&lt; 3 Months)
                      </SelectItem>
                      <SelectItem value="budgetary-next-fy">
                        Budgetary Quotation for Upcoming FY
                      </SelectItem>
                      <SelectItem value="technical-evaluation">
                        Technical Evaluation &amp; Tender Sizing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.requirementStage && (
                    <span className="text-[11px] text-red-600 block mt-1">{errors.requirementStage}</span>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  id="cap-fullName"
                  label="Full Name *"
                  placeholder="Prof. / Dr. / Eng."
                  value={formData.fullName || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                  error={errors.fullName}
                  aria-required="true"
                />
                <Input
                  id="cap-email"
                  type="email"
                  label="Institutional Email *"
                  placeholder="name@iitx.ac.in / name@org.in"
                  value={formData.email || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  error={errors.email}
                  aria-required="true"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  id="cap-phone"
                  type="tel"
                  label="Phone / Mobile Number *"
                  placeholder="+91 98765 43210"
                  value={formData.phone || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  error={errors.phone}
                  aria-required="true"
                />
                <Input
                  id="cap-cityState"
                  label="City, State *"
                  placeholder="e.g. Hyderabad, Telangana"
                  value={formData.cityState || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, cityState: e.target.value }))
                  }
                  error={errors.cityState}
                  aria-required="true"
                />
              </div>

              {/* Technical Sizing Constraints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-border-light">
                <Input
                  id="cap-targetTemperature"
                  label="Target Temperature Envelope"
                  placeholder="e.g. Ambient to 1000°C or LN2 option"
                  value={formData.targetTemperature || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, targetTemperature: e.target.value }))
                  }
                />
                <Input
                  id="cap-sampleDimensions"
                  label="Sample Geometry / Material"
                  placeholder="e.g. 3x3x15 mm Skutterudite"
                  value={formData.sampleDimensions || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, sampleDimensions: e.target.value }))
                  }
                />
              </div>

              <div>
                <label htmlFor="cap-notes" className="block text-xs font-sans font-medium text-ink-primary mb-1">
                  Technical Specifications / Tender Requirements (Optional)
                </label>
                <textarea
                  id="cap-notes"
                  rows={2}
                  className="w-full px-3 py-2 bg-surface-card border border-border-light rounded-md text-xs text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
                  placeholder="Specify gas purge requirements, vacuum backing pump preferences, or university tender compliance terms."
                  value={formData.notes || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                />
              </div>

              {/* Legal & Domestic Assurance Notice */}
              <div className="flex items-start gap-2 p-2.5 bg-brand-teal-tint/30 border border-brand-teal/30 rounded-sm text-[11px] text-ink-primary">
                <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong>Official Indian Representation:</strong> Direct INR billing, customs clearance, GST input credit, and factory-certified commissioning across all Indian states.
                </span>
              </div>

              <DialogFooter className="gap-2">
                <Button type="button" variant="outline" onClick={handleResetAndClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  <span>Submit Technical Sizing Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="flex flex-col items-center text-center py-6 px-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>

            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint px-2.5 py-0.5 rounded-xs">
              Capital RFQ Validated &amp; Logged
            </span>

            <h3 className="text-xl font-display font-bold text-ink-primary mt-3">
              Reference #{submittedRfqId}
            </h3>

            <p className="text-xs text-ink-muted max-w-md mt-2 leading-relaxed">
              Thank you, <strong className="text-ink-primary">{formData.fullName}</strong>. Your technical application enquiry for the{" "}
              <strong className="text-ink-primary font-mono">{activeModel}</strong> ({manufacturerName}) has been validated through the SYINCO Capital Equipment engine.
            </p>

            <div className="w-full my-4 p-4 bg-slate-50 border border-border-light rounded-md text-left text-xs font-mono space-y-2">
              <div className="flex justify-between border-b border-border-light/60 pb-1.5">
                <span className="text-ink-muted">Channel:</span>
                <span className="font-bold text-brand-teal">Channel A (Capital Equipment)</span>
              </div>
              <div className="flex justify-between border-b border-border-light/60 pb-1.5">
                <span className="text-ink-muted">System Model:</span>
                <span className="font-bold text-ink-primary">{activeModel} ({manufacturerName})</span>
              </div>
              <div className="flex justify-between border-b border-border-light/60 pb-1.5">
                <span className="text-ink-muted">Requisitioner:</span>
                <span className="text-ink-primary">{formData.fullName} ({formData.email})</span>
              </div>
              <div className="flex justify-between border-b border-border-light/60 pb-1.5">
                <span className="text-ink-muted">Billing Mode:</span>
                <span className="text-emerald-700 font-semibold">Indian Rupees (INR) + GST</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-muted">Turnaround SLA:</span>
                <span className="text-ink-primary">Within 24 Business Hours</span>
              </div>
            </div>

            {/* Explicit Development / Mock Delivery Banner */}
            <div className="w-full flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded text-[11px] font-mono text-amber-900 mb-4 text-left">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>[DEVELOPMENT / MOCK DELIVERY]:</strong> RFQ payload validated by CapitalEquipmentRFQSchema. Live SMTP transmission simulated in local sandbox.
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-ink-muted mb-6">
              <Clock className="w-4 h-4 text-brand-teal" />
              <span>Direct Hyderabad Desk: +91 73822 92929 / info@syinco.in</span>
            </div>

            <Button variant="primary" onClick={handleResetAndClose} className="w-full sm:w-auto">
              Return to Instrument Specification
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
