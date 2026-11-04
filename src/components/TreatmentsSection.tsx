import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Sparkles, Feather, HeartHandshake, Droplets, Apple, Activity, Smile, Info } from 'lucide-react';
import { TREATMENTS, Treatment } from '../data/clinicData';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenBooking
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'skin' | 'hair' | 'wellness'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Apple': return <Apple className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredTreatments = TREATMENTS.filter(t => {
    if (activeFilter === 'skin') return t.id === 'skin-care' || t.id === 'cosmetics';
    if (activeFilter === 'hair') return t.id === 'hair-loss' || t.id === 'hair-scalp';
    if (activeFilter === 'wellness') return t.id === 'homeopathy' || t.id === 'nutrition' || t.id === 'weight-loss';
    return true;
  });

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Clinical Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Personalized Treatments & Care
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Evidence-based dermatological care, holistic homeopathy, and targeted wellness guidance customized to your medical profile and lifestyle.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 sm:pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Services ({TREATMENTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('skin')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'skin'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Skin & Dermatology
            </button>
            <button
              onClick={() => setActiveFilter('hair')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'hair'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Hair & Scalp
            </button>
            <button
              onClick={() => setActiveFilter('wellness')}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'wellness'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Homeopathy & Wellness
            </button>
          </div>
        </motion.div>

        {/* Treatment Cards Grid with Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredTreatments.map((treatment, index) => (
              <motion.div
                layout
                key={treatment.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-3xl bg-[#FAF7F5] border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-200 transition-all duration-300"
              >
                {/* Card Image Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-purple-800 shadow-sm">
                      {treatment.tag}
                    </span>
                  </div>

                  {/* Icon bubble */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center shadow-md"
                  >
                    {getIcon(treatment.iconName)}
                  </motion.div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-purple-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  {/* Key Benefits Preview */}
                  <ul className="space-y-1.5 text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                    {treatment.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-600 font-bold leading-none mt-0.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card CTAs */}
                  <div className="pt-2 flex items-center justify-between gap-2 sm:gap-3 border-t border-slate-200/60">
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors py-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Learn More</span>
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onOpenBooking(treatment.title)}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Disclaimer Note */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          * Note: Medical and wellness outcomes depend on individual biology, lifestyle, and adherence to guidance. Dr. Bhagyashri designs customized plans following comprehensive consultations without making unfounded medical guarantees.
        </div>
      </div>
    </section>
  );
};
