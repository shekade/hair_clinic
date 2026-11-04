import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingMobileActionProps {
  onOpenBooking: () => void;
}

export const FloatingMobileAction: React.FC<FloatingMobileActionProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled past the hero section (> 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center justify-center pointer-events-auto"
        >
          <div className="w-full max-w-sm flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/20 shadow-2xl shadow-purple-950/40 text-white">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-purple-300" />
              <span>Call Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all text-xs font-bold text-white shadow-md shadow-purple-900/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consult</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
