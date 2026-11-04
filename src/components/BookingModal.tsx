import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, CheckCircle2, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationMode: 'in-clinic',
    treatment: initialTreatment || 'Skin Care & Dermatology',
    preferredDate: '',
    timeSlot: 'evening',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setFormData(prev => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden max-h-[90vh] flex flex-col text-left">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-purple-50/60 to-white">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Book Doctor Consultation
            </h3>
            <p className="text-xs text-purple-700 font-medium">
              Dr. Bhagyashri K. (Thombre) · Homeoderma Clinic
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-2xl text-slate-900">
                  Appointment Requested!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your request for{' '}
                  <span className="font-semibold text-purple-700">{formData.treatment}</span> has been received. Our clinic team will call you at{' '}
                  <span className="font-semibold text-slate-800">{formData.phone}</span> to confirm your time slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 space-y-1.5 text-left max-w-md mx-auto">
                <p className="font-bold">Consultation Details:</p>
                <p>• Mode: {formData.consultationMode === 'in-clinic' ? 'In-Clinic at Harmony Plaza, Ravet' : 'Online Video Consultation'}</p>
                {formData.preferredDate && <p>• Preferred Date: {formData.preferredDate}</p>}
                <p>• Preferred Time: {formData.timeSlot === 'morning' ? 'Morning (10:00 AM - 1:30 PM)' : 'Evening (5:30 PM - 9:00 PM)'}</p>
              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-semibold hover:bg-purple-800 transition-colors"
                >
                  Call Clinic Directly ({CLINIC_INFO.phone})
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mode selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Choose Consultation Mode *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationMode: 'in-clinic' })}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.consultationMode === 'in-clinic'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>In-Clinic (Ravet, Pune)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationMode: 'online' })}
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.consultationMode === 'online'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Online Video Call</span>
                  </button>
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 09975364772"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Specialty / Service
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                  >
                    {TREATMENTS.map(t => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Time Slot Preference */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Preferred Time Window
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: 'morning' })}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      formData.timeSlot === 'morning'
                        ? 'bg-purple-100 border-purple-600 text-purple-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Morning (10am – 1:30pm)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: 'evening' })}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                      formData.timeSlot === 'evening'
                        ? 'bg-purple-100 border-purple-600 text-purple-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Evening (5:30pm – 9pm)</span>
                  </button>
                </div>
              </div>

              {/* Patient Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Medical / Lifestyle Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell Dr. Bhagyashri about your primary concern, duration, or questions..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-xs sm:text-sm outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-md shadow-purple-900/10 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? 'Requesting Appointment...' : 'Submit Consultation Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
