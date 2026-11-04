import React from 'react';
import { Star, ArrowRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-slate-950">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroSkinPortrait}
          alt="Natural glowing skin portrait"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtleZoom opacity-75 lg:opacity-85"
          referrerPolicy="no-referrer"
        />
        {/* Soft vignette and readability gradient matching Cevora aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 pt-4 lg:pt-0">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-sm">
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                ✦ Personalized Skin & Hair Care
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.08] text-balance">
              Healthy Skin.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-100 to-white">
                Beautiful Hair.
              </span><br />
              A Better You.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 font-normal max-w-xl leading-relaxed">
              Expert skin, hair and homeopathy care tailored to your health, lifestyle and wellness goals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#treatments"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-purple-200" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Rating Card (matching Cevora bottom-left placement) */}
            <div className="pt-4 sm:pt-6">
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 text-white shadow-xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold tracking-tight text-white tabular-nums">
                    5.0<span className="text-lg font-normal text-slate-300">/5</span>
                  </span>
                  
                  {/* Avatars cluster */}
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-amber-500 text-white flex items-center justify-center text-xs font-bold">
                      SK
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                      RM
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                      SD
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-rose-500 text-white flex items-center justify-center text-xs font-bold">
                      SB
                    </div>
                  </div>
                </div>

                <div className="sm:border-l sm:border-white/20 sm:pl-4 flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-200 font-medium mt-0.5">
                    24 Google Reviews · Ravet, Pune
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Testimonial Glass Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/20 p-4 shadow-2xl shadow-purple-950/40">
              {/* Image inside card */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={IMAGES.heroClinicalCard}
                  alt="Personalized clinical skin consultation"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                  <span>Clinical Excellence</span>
                </div>
              </div>

              {/* Testimonial Quote & Attribution */}
              <div className="px-2 pb-2 space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-sm sm:text-base text-white/95 font-medium italic leading-snug">
                  “Professional, supportive and personalized care that focuses on understanding your lifestyle and health.”
                </blockquote>

                <div className="flex items-center justify-between pt-1 border-t border-white/10 text-xs">
                  <span className="text-purple-200 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Patient Experience
                  </span>
                  <span className="text-slate-400">Online & In-Clinic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white">Holistic Homeopathy</p>
              <p className="text-[11px] text-slate-300">Constitutional root-cause</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white">Dermatology Care</p>
              <p className="text-[11px] text-slate-300">Acne, allergy & glow</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white">Hair Fall Control</p>
              <p className="text-[11px] text-slate-300">Nutritional & scalp therapy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-purple-300 shrink-0">
              ✓
            </div>
            <div className="text-left">
              <p className="text-xs sm:text-sm font-semibold text-white">Online & In-Clinic</p>
              <p className="text-[11px] text-slate-300">Consultation worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
