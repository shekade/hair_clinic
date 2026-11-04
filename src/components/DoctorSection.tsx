import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Heart, Clock, Sparkles, MessageSquareHeart } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Doctor Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 to-pink-200/40 rounded-3xl blur-2xl -z-10" />

              {/* Doctor Card Frame */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-xl shadow-purple-900/5 p-3"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={IMAGES.doctorPortrait}
                    alt="Dr. Bhagyashri K. (Thombre)"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                  {/* Floating Doctor Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg text-slate-900"
                  >
                    <p className="font-display font-bold text-base sm:text-lg leading-tight">
                      {CLINIC_INFO.doctorName}
                    </p>
                    <p className="text-xs text-purple-700 font-medium mt-0.5">
                      {CLINIC_INFO.businessName}
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Consultation availability indicator */}
              <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-purple-50 shadow-sm text-xs text-slate-600">
                <span className="font-medium text-slate-900">Consultation Modes:</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-emerald-700 font-medium">● In-Clinic (Ravet)</span>
                  <span className="text-purple-700 font-medium">● Online Video</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-purple-700">
                Meet Your Practitioner
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="text-purple-900 font-medium text-base sm:text-lg">
                Practitioner at {CLINIC_INFO.businessName}
              </p>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Dr. Bhagyashri K. (Thombre) offers thoughtful, personalized guidance across skin care, hair restoration, homeopathy, nutrition, and overall wellness. Her practice is built on taking time to thoroughly understand each individual's daily lifestyle, food habits, sleeping cycles, and internal health.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Believing that effective care is never just about handing out medicines alone, Dr. Bhagyashri partners with her patients to address root causes, supporting them through clear prescriptions, practical routine changes, and attentive long-term guidance.
            </p>

            {/* Core Care Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3, borderColor: '#d8b4fe' }}
                className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Personalized Consultations
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Care tailored to your unique biology, daily timetable, and health history—never cookie-cutter templates.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: '#d8b4fe' }}
                className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <MessageSquareHeart className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Patient-Focused Approach
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Patients consistently highlight her supportive nature, attentive listening, and clear step-by-step explanations.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: '#d8b4fe' }}
                className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Integrated Wellness
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Combining dermatological insight, gentle homeopathy, and practical nutritional plans for lasting vitality.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, borderColor: '#d8b4fe' }}
                className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Convenient Scheduling
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Morning and evening clinic slots at Ravet, with dedicated time for online video consultations.
                </p>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm sm:text-base shadow-md shadow-purple-700/20 transition-all text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Bhagyashri</span>
              </motion.button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm sm:text-base transition-all text-center"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
