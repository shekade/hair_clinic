import React from 'react';
import { Phone, MapPin, Star, Navigation, ArrowUpRight, Clock } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-900">
          {/* Brand & Clinic Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 to-fuchsia-600 flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-base leading-tight">
                  Dr. Bhagyashri's
                </span>
                <span className="text-xs text-purple-400 font-medium tracking-wide">
                  Homeoderma Skin Clinic & Wellness Hub
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-2">
              Personalized skin, hair, homeopathy, nutrition and wellness care by Dr. Bhagyashri K. (Thombre). Comprehensive consultation addressing root causes for patients in Ravet, Pune and worldwide via online sessions.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">5.0 / 5</span>
              <span className="text-xs text-slate-400">· 24 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About Doctor</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-purple-400 transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-purple-400 transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact Us</a>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-purple-400 font-semibold hover:underline"
                >
                  Book Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Treatments (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Treatments & Care
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              {TREATMENTS.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onOpenBooking(t.title)}
                    className="hover:text-purple-400 transition-colors text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Contact & Location (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Contact
            </p>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-snug">
                  {CLINIC_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-bold text-white hover:text-purple-400 transition-colors"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-slate-400 text-xs space-y-0.5">
                  <p>Mon - Sat: 10:00 AM - 1:30 PM & 5:30 PM - 9:00 PM</p>
                  <p>Sun: By Prior Appointment</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-purple-300 hover:text-white hover:border-purple-600 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.businessName}. All rights reserved.
          </p>

          <p className="max-w-xl text-[11px] leading-relaxed text-slate-500">
            * Medical Disclaimer: Information on this site is provided for general informational purposes and does not substitute professional in-person medical evaluation.
          </p>
        </div>
      </div>
    </footer>
  );
};
