import React from 'react';
import { Calendar, Phone, Heart, Clock, Sparkles, MessageSquareHeart } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/50 to-pink-200/40 rounded-3xl blur-2xl -z-10" />
              
              {/* Doctor Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-xl shadow-purple-900/5 p-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={IMAGES.doctorPortrait}
                    alt="Dr. Bhagyashri K. (Thombre)"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Floating Doctor Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                    <p className="font-display font-bold text-lg leading-tight">
                      {CLINIC_INFO.doctorName}
                    </p>
                    <p className="text-xs text-purple-700 font-medium mt-0.5">
                      {CLINIC_INFO.businessName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation availability indicator */}
              <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-purple-50 shadow-sm text-xs text-slate-600">
                <span className="font-medium text-slate-900">Consultation Modes:</span>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-700 font-medium">● In-Clinic (Ravet)</span>
                  <span className="text-purple-700 font-medium">● Online Video Call</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
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

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dr. Bhagyashri K. (Thombre) offers thoughtful, personalized guidance across skin care, hair restoration, homeopathy, nutrition, and overall wellness. Her practice is built on taking time to thoroughly understand each individual's daily lifestyle, food habits, sleeping cycles, and internal health.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Believing that effective care is never just about handing out medicines alone, Dr. Bhagyashri partners with her patients to address root causes, supporting them through clear prescriptions, practical routine changes, and attentive long-term guidance.
            </p>

            {/* Core Care Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Personalized Consultations
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Care tailored to your unique biology, daily timetable, and health history—never cookie-cutter templates.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <MessageSquareHeart className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Patient-Focused Approach
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Patients consistently highlight her supportive nature, attentive listening, and clear step-by-step explanations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Integrated Wellness
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Combining dermatological insight, gentle homeopathy, and practical nutritional plans for lasting vitality.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-50 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-sm">
                  Convenient Scheduling
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Morning and evening clinic slots at Ravet, with dedicated time for online video consultations.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm sm:text-base shadow-md shadow-purple-700/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Bhagyashri</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                <span>Call {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
