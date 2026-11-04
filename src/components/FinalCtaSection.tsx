import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1.0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          src={IMAGES.ctaBanner}
          alt="Skin and wellness care journey"
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-slate-950/80 to-purple-950/90" />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs sm:text-sm font-semibold"
        >
          <span>✦ Personalized Health & Aesthetics</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
        >
          Your Journey to Better Skin & Hair Starts Here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed"
        >
          Take the first step towards personalized skin, hair and wellness care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-950/60 transition-all text-center"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Consultation</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${CLINIC_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-semibold text-sm sm:text-base transition-all text-center"
          >
            <Phone className="w-5 h-5 text-purple-300" />
            <span>Call Clinic ({CLINIC_INFO.phone})</span>
          </motion.a>
        </motion.div>

        <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-300 border-t border-white/10">
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
