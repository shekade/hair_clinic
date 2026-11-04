import React from 'react';
import { X, Calendar, Check, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Treatment, CLINIC_INFO } from '../data/clinicData';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatmentTitle: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBook
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col text-left">
        {/* Header Image */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-100 shrink-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 rounded-full bg-purple-600/90 text-xs font-semibold uppercase tracking-wider">
              {treatment.tag}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {treatment.shortDesc}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-700" />
              <span>Key Treatment Pillars</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-purple-50/50 border border-purple-100/60 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-amber-700" />
              <span>What to Expect with Dr. Bhagyashri</span>
            </h4>
            <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
              {treatment.whatToExpect}
            </p>
          </div>

          {/* Clinic location footnote */}
          <p className="text-xs text-slate-500">
            Available as an in-clinic consultation at {CLINIC_INFO.shortName} (Harmony Plaza, Ravet) or via online video consultation with prior appointment.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-white transition-colors"
          >
            Back
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(treatment.title);
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation for this Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
