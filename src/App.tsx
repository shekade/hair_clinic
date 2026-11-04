import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorSection } from './components/DoctorSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ClinicInfoSection } from './components/ClinicInfoSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TreatmentModal } from './components/TreatmentModal';
import { WriteReviewModal } from './components/WriteReviewModal';
import { FloatingMobileAction } from './components/FloatingMobileAction';
import { Treatment } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentTitle, setSelectedTreatmentTitle] = useState<string | undefined>();
  const [detailedTreatment, setDetailedTreatment] = useState<Treatment | null>(null);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatmentTitle(treatmentTitle);
    setIsBookingOpen(true);
  };

  const handleSelectTreatmentForModal = (treatment: Treatment) => {
    setDetailedTreatment(treatment);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 pb-12 sm:pb-0">
      {/* Fixed Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main>
        {/* Cinematic Hero Layout (Cevora Inspired) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Doctor Introduction Profile */}
        <DoctorSection onOpenBooking={() => handleOpenBooking()} />

        {/* Specialized Treatments & Services (7 Cards) */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatmentForModal}
          onOpenBooking={handleOpenBooking}
        />

        {/* Google Reviews & Real Patient Testimonials */}
        <ReviewsSection onOpenWriteReview={() => setIsWriteReviewOpen(true)} />

        {/* Clinic Information, Contact Form & Google Map */}
        <ClinicInfoSection preselectedTreatment={selectedTreatmentTitle} />

        {/* Cinematic Final CTA Section */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Pill on Mobile Screens */}
      <FloatingMobileAction onOpenBooking={() => handleOpenBooking()} />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTreatment={selectedTreatmentTitle}
      />

      {/* Treatment In-Depth Details Modal */}
      <TreatmentModal
        treatment={detailedTreatment}
        onClose={() => setDetailedTreatment(null)}
        onBook={(title) => handleOpenBooking(title)}
      />

      {/* Write a Google Review Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
      />
    </div>
  );
}
