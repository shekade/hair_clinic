import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ctaBanner}
          alt="Skin and wellness care journey"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-slate-950/80 to-purple-950/90" />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs sm:text-sm font-semibold">
          <span>✦ Personalized Health & Aesthetics</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Your Journey to Better Skin & Hair Starts Here.
        </h2>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards personalized skin, hair and wellness care.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-base shadow-xl shadow-purple-950/60 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Consultation</span>
          </button>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5 text-purple-300" />
            <span>Call Clinic ({CLINIC_INFO.phone})</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-white/10">
          <span>✓ In-Clinic Consultations at Ravet</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Global Online Teleconsultations</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ 5.0★ Rated by Patients</span>
        </div>
      </div>
    </section>
  );
};
