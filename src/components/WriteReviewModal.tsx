import React, { useState } from 'react';
import { X, Star, ExternalLink, Check, Copy } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleReview = "Dr. Bhagyashri takes time to understand your lifestyle, routine and health before recommending personalized skin, hair, and homeopathy care. Highly recommend!";

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleReview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-amber-50/50 to-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <h3 className="font-display font-bold text-base text-slate-900">
              Leave a Google Review
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h4 className="font-display font-bold text-lg text-slate-900">
              Share Your Experience with Dr. Bhagyashri
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your genuine feedback helps individuals in Ravet and across Pune discover supportive, personalized care.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800">Quick Review Starter (Optional):</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-purple-700 hover:text-purple-900 font-semibold text-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="italic text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
              "{sampleReview}"
            </p>
          </div>

          <div className="space-y-2">
            <a
              href={CLINIC_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md shadow-purple-900/10 transition-all"
            >
              <span>Open Google Review Page</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-slate-400 text-center">
              * Opens in a new tab. If you are already signed in to your Google Account, you can post your star rating and comment directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
