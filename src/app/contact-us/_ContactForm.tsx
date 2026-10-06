"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    discipline: "vacuum-technology",
    inquiryType: "quotation",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-canvas text-white py-12 border-b border-border-dark">
        <div className="max-w-container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-semibold">Contact Us</li>
            </ol>
          </nav>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal-tint/30 px-2 py-0.5 rounded-xs border border-brand-teal/40 inline-block mb-2">
            Technical Assistance
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-white">
            Contact SYINCO TECHNOLOGIES
          </h1>
          <p className="text-xs sm:text-sm font-sans text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Direct communication with our technical sales engineers, Hyderabad spares logistics depot, and factory service desk across India.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-12 bg-surface-light border-b border-border-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-border-light rounded-sm p-6 space-y-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-teal font-bold block">
                  Head Office &amp; Engineering Depot
                </span>
                <h2 className="font-display font-bold text-lg text-slate-900 leading-tight">
                  Hyderabad Logistics &amp; Calibration Center
                </h2>

                <div className="space-y-4 text-xs font-sans text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Physical Facility</strong>
                      <span>SYINCO TECHNOLOGIES Warehousing &amp; Engineering Depot<br />Hyderabad, Telangana 500034, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Telephone Support Desk</strong>
                      <a href="tel:+917382292929" className="text-brand-teal font-mono font-bold hover:underline">
                        +91 73822 92929
                      </a>
                      <span className="block text-[11px] text-slate-400 mt-0.5">Mon–Fri: 9:00 AM – 6:30 PM IST</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-semibold mb-0.5">Official Inquiries</strong>
                      <a href="mailto:info@syinco.in" className="text-brand-teal font-mono hover:underline block">
                        info@syinco.in
                      </a>
                      <a href="mailto:sales@syinco.in" className="text-slate-500 font-mono text-[11px] hover:underline block">
                        sales@syinco.in (Tenders &amp; RFQs)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border-light/80 space-y-2 text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>In-Country INR Billing with 18% GST Input Credit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>Government Tender Compliance (GeM / CPPP)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & RFQ Form */}
            <div className="lg:col-span-7 bg-white border border-border-light rounded-sm p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Inquiry Received
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-slate-600 max-w-md mx-auto">
                    Thank you. A SYINCO technical specialist has received your inquiry and will respond within 24 business hours with datasheets and formal consultation details.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-brand-teal font-bold hover:underline cursor-pointer"
                    >
                      ← Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-border-light pb-3 mb-4">
                    <h3 className="font-display font-bold text-base text-slate-900">
                      Submit Technical Consultation or Tender Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Fill out your institutional requirements below for immediate engineering response.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
                        placeholder="Dr. / Prof. / Engineer Name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Official Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
                        placeholder="name@iit.ac.in / name@org.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Institution / University / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
                        placeholder="e.g. IIT Bombay / DRDO / R&D Lab"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Primary Discipline of Interest
                      </label>
                      <select
                        value={formData.discipline}
                        onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none bg-white"
                      >
                        <option value="vacuum-technology">Vacuum Technology (Edwards)</option>
                        <option value="thermoelectric-energy">Thermoelectric Evaluation (Advance Riko ZEM-3)</option>
                        <option value="high-temp-furnaces">Spark Plasma Sintering (Fuji-SPS)</option>
                        <option value="high-temp-processing">Infrared Furnaces (Advance Riko)</option>
                        <option value="spares-consumables">Depot Spares &amp; Consumables</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full text-xs font-sans px-3 py-2 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none bg-white"
                      >
                        <option value="quotation">Formal INR Budgetary Quotation</option>
                        <option value="tender-spec">Tender / Compliance Specification</option>
                        <option value="contract-testing">ZEM-3 Paid Contract Sample Testing</option>
                        <option value="spares">Emergency Spare Parts / Tip-Seal Kits</option>
                        <option value="amc">Annual Maintenance Contract (AMC)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 mb-1">
                      Project Details / Operating Parameters
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs font-sans p-3 border border-slate-300 rounded-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none"
                      placeholder="Specify required pumping speeds, ultimate vacuum, temperature envelopes, specimen dimensions, or tender deadlines..."
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs font-mono px-6 py-2.5 rounded-xs w-full sm:w-auto gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Technical Inquiry</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
