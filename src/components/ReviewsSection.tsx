import React, { useState } from 'react';
import { Star, ThumbsUp, Share2, MessageCircle, ChevronDown, ChevronUp, ExternalLink, Check } from 'lucide-react';
import { PATIENT_REVIEWS, PatientReview, CLINIC_INFO } from '../data/clinicData';

interface ReviewsSectionProps {
  onOpenWriteReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenWriteReview }) => {
  const [showAll, setShowAll] = useState(false);
  const [expandedResponses, setExpandedResponses] = useState<Record<string, boolean>>({
    'rev-1': true, // initial expanded preview
    'rev-2': false,
    'rev-3': false,
    'rev-4': false,
  });
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [copiedReviewId, setCopiedReviewId] = useState<string | null>(null);

  const displayedReviews = showAll ? PATIENT_REVIEWS : PATIENT_REVIEWS.slice(0, 3);

  const toggleResponse = (id: string) => {
    setExpandedResponses(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLike = (id: string) => {
    setLikedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (review: PatientReview) => {
    const textToCopy = `"${review.comment}" - Review by ${review.author} for Dr. Bhagyashri's Homeoderma Clinic (5.0★ on Google)`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedReviewId(review.id);
    setTimeout(() => {
      setCopiedReviewId(null);
    }, 2000);
  };

  // Avatar background colors based on author initials
  const getAvatarBg = (initials: string) => {
    const colors = [
      'bg-purple-600',
      'bg-indigo-600',
      'bg-rose-600',
      'bg-emerald-600',
      'bg-amber-600',
      'bg-teal-600',
      'bg-fuchsia-600'
    ];
    const index = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % colors.length;
    return colors[index];
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Google Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Real Patients. Real Experiences.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Discover what our patients say about their experience with Dr. Bhagyashri.
          </p>
        </div>

        {/* Google Reviews Overview Card */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-purple-900/5 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Overall Rating and Google Logo */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-3 md:border-r md:border-slate-100 md:pr-8">
              <div className="flex items-center gap-2.5">
                {/* Official Google G Svg */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
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
                <span className="font-semibold text-slate-800 text-sm">Google Rating</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  5.0
                </span>
                <span className="text-xl font-medium text-slate-400">/ 5</span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Based on <span className="font-bold text-slate-800">24 Google Reviews</span>
              </p>

              <button
                onClick={onOpenWriteReview}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: Rating Distribution Bars (5-star highlighted, total 24 reviews) */}
            <div className="md:col-span-7 space-y-2.5">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="w-12 font-medium shrink-0">5 stars</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-full transition-all duration-500" />
                </div>
                <span className="w-12 text-right font-semibold text-slate-800 tabular-nums">100%</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-12 font-medium shrink-0">4 stars</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-12 text-right tabular-nums">0%</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-12 font-medium shrink-0">3 stars</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-12 text-right tabular-nums">0%</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-12 font-medium shrink-0">2 stars</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-12 text-right tabular-nums">0%</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="w-12 font-medium shrink-0">1 star</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-12 text-right tabular-nums">0%</span>
              </div>

              <p className="text-[11px] text-slate-400 text-left pt-2">
                * All 24 verified reviews on Google rate Dr. Bhagyashri 5.0 out of 5 stars.
              </p>
            </div>
          </div>
        </div>

        {/* Patient Review Cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {displayedReviews.map((review) => {
            const isLiked = likedReviews[review.id];
            const isCopied = copiedReviewId === review.id;
            const isResponseOpen = expandedResponses[review.id];

            return (
              <div
                key={review.id}
                className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow text-left space-y-4"
              >
                {/* Header: Avatar, Name, Stars & Date */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-full ${getAvatarBg(
                        review.initials
                      )} text-white flex items-center justify-center font-display font-bold text-sm shadow-sm shrink-0`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-slate-900 text-base leading-tight">
                        {review.author}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs text-slate-500 font-medium">{review.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
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
                    <span>Google</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "{review.comment}"
                </p>

                {/* Action Bar: Like & Share */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(review.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors ${
                        isLiked
                          ? 'text-purple-700 bg-purple-50 font-semibold'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-purple-700' : ''}`} />
                      <span>{isLiked ? 'Helpful (1)' : 'Helpful'}</span>
                    </button>

                    <button
                      onClick={() => handleShare(review)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                      title="Share / Copy Review"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" />
                          <span>Share</span>
                        </>
                      )}
                    </button>
                  </div>

                  {review.ownerResponse && (
                    <button
                      onClick={() => toggleResponse(review.id)}
                      className="flex items-center gap-1 text-purple-700 hover:text-purple-900 font-medium py-1 px-2 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Owner Response</span>
                      {isResponseOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Owner Response Expandable Area */}
                {review.ownerResponse && isResponseOpen && (
                  <div className="mt-3 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-1.5 text-left animate-fadeIn">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-purple-900">
                        Response from the owner ({review.ownerResponse.author})
                      </span>
                      <span className="text-[11px] text-purple-600 font-medium">Clinic Care Team</span>
                    </div>
                    <p className="text-xs sm:text-sm text-purple-950/80 leading-relaxed">
                      "{review.ownerResponse.text}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All Reviews Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-purple-200 text-purple-800 font-semibold text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <span>{showAll ? 'Show Fewer Reviews' : `View All Reviews (${PATIENT_REVIEWS.length})`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};
