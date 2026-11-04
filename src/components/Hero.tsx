import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Calendar, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-screen flex items-center pt-24 pb-14 sm:pt-28 sm:pb-16 lg:py-28 overflow-hidden bg-slate-950"
    >
      {/* Background Images with Cinematic Overlay & Responsive Framing */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile-Friendly Portrait Image (Shown on small screens < sm) */}
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          src={IMAGES.heroSkinPortraitMobile}
          alt="Natural glowing skin portrait (Mobile)"
          className="block sm:hidden w-full h-full object-cover object-top opacity-75"
          referrerPolicy="no-referrer"
        />

        {/* Desktop & Tablet Cinematic Landscape Image (Shown on sm: and up) */}
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          src={IMAGES.heroSkinPortrait}
          alt="Natural glowing skin portrait (Desktop)"
          className="hidden sm:block w-full h-full object-cover object-center opacity-75 sm:opacity-80 lg:opacity-85"
          referrerPolicy="no-referrer"
        />

        {/* Soft vignette and readability gradient matching Cevora aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/40" />

        {/* Subtle Ambient Glowing Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6 pt-2 sm:pt-4 lg:pt-0">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                ✦ Personalized Skin & Hair Care
              </span>
            </motion.div>

            {/* Main Heading with Staggered Visual Feel */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08] text-balance"
            >
              Healthy Skin.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-100 to-white">
                Beautiful Hair.
              </span><br />
              A Better You.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-lg md:text-xl text-slate-200/90 font-normal max-w-xl leading-relaxed"
            >
              Expert skin, hair and homeopathy care tailored to your health, lifestyle and wellness goals.
            </motion.p>

            {/* Action Buttons - Fully Optimized for Mobile Screens */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Calendar className="w-4 h-4 text-purple-200" />
                <span>Book Consultation</span>
              </button>
            </motion.div>

            {/* Rating Card (responsive design matching Cevora bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-2 sm:pt-4"
            >
              <div className="w-full sm:w-auto inline-flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-5 px-4 sm:px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 text-white shadow-xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums">
                    5.0<span className="text-sm sm:text-lg font-normal text-slate-300">/5</span>
                  </span>

                  {/* Avatars cluster */}
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 bg-amber-500 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm">
                      SK
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 bg-purple-500 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm">
                      RM
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 bg-emerald-500 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm">
                      SD
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 bg-rose-500 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm">
                      SB
                    </div>
                  </div>
                </div>

                <div className="border-l border-white/20 pl-3 sm:pl-4 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-200 font-medium mt-0.5">
                    24 Google Reviews · Ravet
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Testimonial Glass Card with Idle Hover Animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-2 sm:mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 0.8, delay: 0.3 },
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                },
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-slate-900/65 backdrop-blur-xl border border-white/20 p-3.5 sm:p-4 shadow-2xl shadow-purple-950/40"
            >
              {/* Image inside card */}
              <div className="relative w-full h-44 sm:h-56 lg:h-64 rounded-2xl overflow-hidden mb-3 sm:mb-4">
                <img
                  src={IMAGES.heroClinicalCard}
                  alt="Personalized clinical skin consultation"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                  <span>Clinical Excellence</span>
                </div>
              </div>

              {/* Testimonial Quote & Attribution */}
              <div className="px-1.5 sm:px-2 pb-1.5 sm:pb-2 space-y-2.5 sm:space-y-3 text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-base text-white/95 font-medium italic leading-snug">
                  “Professional, supportive and personalized care that focuses on understanding your lifestyle and health.”
                </blockquote>

                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[11px] sm:text-xs">
                  <span className="text-purple-200 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Verified Patient Experience</span>
                  </span>
                  <span className="text-slate-400">Online & In-Clinic</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Highlights Strip - Responsive 2x2 Grid with Touch Card Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-white/90"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/5 sm:border-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0 font-bold text-xs sm:text-sm">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white leading-tight">Holistic Homeopathy</p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">Constitutional root-cause</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/5 sm:border-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0 font-bold text-xs sm:text-sm">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white leading-tight">Dermatology Care</p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">Acne, allergy & glow</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/5 sm:border-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0 font-bold text-xs sm:text-sm">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white leading-tight">Hair Fall Control</p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">Nutritional & scalp care</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-0 rounded-xl bg-white/5 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/5 sm:border-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0 font-bold text-xs sm:text-sm">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white leading-tight">Online & In-Clinic</p>
              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">Consultation worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
