import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Send, CheckCircle2, Calendar, User, Mail, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';

interface ClinicInfoSectionProps {
  preselectedTreatment?: string;
}

export const ClinicInfoSection: React.FC<ClinicInfoSectionProps> = ({ preselectedTreatment }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consultationMode: 'in-clinic',
    treatment: preselectedTreatment || 'Skin Care & Dermatology',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic & Consultation Information</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Visit Us or Connect Online
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently located at Harmony Plaza, Ravet. We welcome patients for in-clinic evaluations as well as comprehensive online video consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Clinic Contact Details & Map */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Clinic Details Card */}
            <div className="rounded-3xl bg-[#FAF7F5] border border-slate-200/80 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                  {CLINIC_INFO.businessName}
                </h3>
                <p className="text-purple-700 font-semibold text-sm mt-1">
                  Practitioner: {CLINIC_INFO.doctorName}
                </p>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    Clinic Address
                  </p>
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-purple-700 font-medium pt-0.5">
                    Landmark: {CLINIC_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    Direct Phone Number
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-lg font-bold text-slate-900 hover:text-purple-700 transition-colors inline-block"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">
                    (Call or WhatsApp for appointments & inquiries)
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                    Clinic Hours
                  </p>
                  <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="font-semibold text-slate-900">Monday – Saturday:</span>
                      <span className="text-right">10:00 AM – 1:30 PM & 5:30 PM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold text-slate-900">Sunday:</span>
                      <span className="text-purple-700 font-medium">By Prior Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-purple-700" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 w-full bg-slate-100 relative">
              <iframe
                title="Dr. Bhagyashri Homeoderma Skin Clinic Location"
                src="https://maps.google.com/maps?q=Harmony+Plaza+Bridge+View+Road+Ravet+Pimpri-Chinchwad+Maharashtra+412101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md text-xs font-medium text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-700" />
                <span>Harmony Plaza, Ravet</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking / Contact Form */}
          <div className="lg:col-span-6 text-left">
            <div className="rounded-3xl bg-[#FAF7F5] border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <div className="space-y-2 mb-6">
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Request a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill out this quick form and our clinic desk will confirm your appointment time promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-emerald-100 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-xl text-slate-900">
                      Appointment Request Received!
                    </h4>
                    <p className="text-sm text-slate-600">
                      Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Dr. Bhagyashri's clinic desk will reach out to you at <span className="font-semibold text-slate-800">{formData.phone}</span> shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-xs font-semibold hover:bg-purple-800 transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Mode selector: In-Clinic or Online */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Consultation Mode
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationMode: 'in-clinic' })}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                          formData.consultationMode === 'in-clinic'
                            ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>In-Clinic (Ravet)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationMode: 'online' })}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
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

                  {/* Name */}
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
                        placeholder="e.g. Rashmi Sharma"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
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
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Treatment & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Primary Concern / Service
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                      >
                        {TREATMENTS.map((t) => (
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
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Brief Notes / Health Background
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your skin or hair concern, duration, or any current medications..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 text-sm outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm sm:text-base shadow-md shadow-purple-900/10 transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Consultation Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Your details are kept strictly confidential between you and Dr. Bhagyashri's clinic.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
