import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-purple-950/5 border-purple-100/60 py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-md shadow-sm border-white/60 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a href="#home" className="flex items-center gap-2.5 text-left group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-fuchsia-600 flex items-center justify-center text-white shadow-sm shadow-purple-600/30">
              <span className="font-display font-bold text-base sm:text-lg">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-purple-700 transition-colors">
                Dr. Bhagyashri's
              </span>
              <span className="text-[11px] sm:text-xs text-purple-700 font-medium tracking-wide">
                Homeoderma & Wellness
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-purple-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-700 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Controls */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-purple-700 hover:bg-purple-50/80 rounded-xl border border-slate-200/80 transition-all whitespace-nowrap"
              title="Call Clinic Directly"
            >
              <Phone className="w-3.5 h-3.5 text-purple-600" />
              <span>099753 64772</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-800 hover:to-purple-700 rounded-xl shadow-sm shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-purple-700 rounded-lg"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-slate-100 mt-3 animate-fadeIn">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-purple-700 bg-purple-50 rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {CLINIC_INFO.phoneFormatted}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-purple-700 rounded-xl"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
