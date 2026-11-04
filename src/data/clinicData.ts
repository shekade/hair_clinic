export interface Treatment {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  image: string;
  shortDesc: string;
  benefits: string[];
  whatToExpect: string;
}

export interface PatientReview {
  id: string;
  author: string;
  initials: string;
  rating: number;
  timeAgo: string;
  comment: string;
  ownerResponse?: {
    author: string;
    text: string;
  };
}

export const CLINIC_INFO = {
  businessName: "Dr. Bhagyashri's Homeoderma Skin Clinic & Wellness Hub",
  shortName: "Homeoderma Clinic & Wellness Hub",
  doctorName: "Dr. Bhagyashri K. (Thombre)",
  role: "Consultant Dermatological & Homeopathic Practitioner",
  tagline: "Personalized Skin, Hair & Homeopathy Wellness",
  rating: 5.0,
  reviewCount: 24,
  phone: "09975364772",
  phoneFormatted: "+91 99753 64772",
  address: "Police Station, Shop No. 11, A Wing, Harmony Plaza, Bridge View Road, Opposite Ravet, Ravet, Pimpri-Chinchwad, Maharashtra 412101",
  addressShort: "Shop 11, A Wing, Harmony Plaza, Ravet, Pimpri-Chinchwad, Pune 412101",
  landmark: "Opposite Ravet Police Station, Bridge View Road",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dr.+Bhagyashri%27s+Homeoderma+Skin+Clinic+Harmony+Plaza+Ravet+Pimpri-Chinchwad",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJDrBhagyashriHomeodermaRavet",
  specialties: [
    "Homeopathy",
    "Dermatology",
    "Hair Loss Treatment",
    "Nutrition Guidance",
    "Weight Loss & Wellness",
    "Cosmetics",
    "Skin & Hair Care"
  ],
  workingHours: [
    { days: "Monday - Saturday", morning: "10:00 AM - 1:30 PM", evening: "5:30 PM - 9:00 PM" },
    { days: "Sunday", morning: "By Prior Appointment", evening: "Closed" }
  ]
};

export const IMAGES = {
  heroSkinPortrait: "/src/assets/images/hero_natural_skin_portrait_1793791275574.jpg",
  heroSkinPortraitMobile: "/src/assets/images/hero_mobile_skin_portrait_1793792611006.jpg",
  heroClinicalCard: "/src/assets/images/hero_clinical_treatment_card_1793791276285.jpg",
  doctorPortrait: "/src/assets/images/doctor_portrait_dr_bhagyashri_1793791276905.jpg",
  treatmentSkin: "/src/assets/images/treatment_skin_dermatology_1793791277007.jpg",
  treatmentHair: "/src/assets/images/treatment_hair_restoration_1793791278268.jpg",
  treatmentHomeopathy: "/src/assets/images/treatment_homeopathy_wellness_1793791279174.jpg",
  ctaBanner: "/src/assets/images/cta_cinematic_wellness_skin_1793791279737.jpg"
};

export const TREATMENTS: Treatment[] = [
  {
    id: "skin-care",
    title: "Skin Care & Dermatology",
    tag: "Dermatological Care",
    iconName: "Sparkles",
    image: IMAGES.treatmentSkin,
    shortDesc: "Comprehensive dermatological care for persistent acne, pigmentation, eczema, chronic rashes, and skin barrier rejuvenation tailored to your skin type.",
    benefits: [
      "In-depth analysis of skin barrier and moisture balance",
      "Tailored management of acne, blemishes and uneven pigmentation",
      "Guidance on daily sun protection, serums and safe actives",
      "Gentle, non-comedogenic therapeutic recommendations"
    ],
    whatToExpect: "A thorough review of your skin history, daily routine, cleansing habits, and previous treatments, followed by a personalized, stepwise skincare regimen."
  },
  {
    id: "hair-loss",
    title: "Hair Loss Treatment",
    tag: "Follicular Care",
    iconName: "Feather",
    image: IMAGES.treatmentHair,
    shortDesc: "Targeted evaluation and multi-faceted treatment for thinning hair, excessive shedding, telogen effluvium, and hereditary hair fall.",
    benefits: [
      "Evaluation of root-cause nutritional and stress triggers",
      "Scalp and hair follicle nourishment protocols",
      "Comprehensive internal-external treatment plan",
      "Practical habits to arrest acute shedding and breakage"
    ],
    whatToExpect: "Dr. Bhagyashri examines your shedding pattern, nutritional blood reports if needed, sleep timelines, and prescribes a personalized hair therapy program."
  },
  {
    id: "homeopathy",
    title: "Homeopathy Consultation",
    tag: "Holistic Root Cause",
    iconName: "HeartHandshake",
    image: IMAGES.treatmentHomeopathy,
    shortDesc: "Individualized constitutional homeopathic care addressing deep-seated chronic skin conditions, allergic sensitivities, and overall vitality.",
    benefits: [
      "Gentle, natural formulations without systemic side effects",
      "Root-cause intervention for recurrent chronic flare-ups",
      "Holistic synthesis of emotional and physical constitution",
      "Safe for all age groups including sensitive individuals"
    ],
    whatToExpect: "A relaxed, in-depth discussion covering your medical background, dietary preferences, temperature sensitivity, stress levels, and emotional patterns to select your constitutional remedy."
  },
  {
    id: "hair-scalp",
    title: "Hair & Scalp Care",
    tag: "Scalp Health",
    iconName: "Droplets",
    image: IMAGES.treatmentHair,
    shortDesc: "Dedicated protocols for chronic dandruff, flaky scalp, itchiness, sebum imbalance, and hair strand vitality.",
    benefits: [
      "Therapeutic reduction of stubborn dandruff and itching",
      "Microbiome balance and oil-regulation on the scalp",
      "Hydration therapy for dry, brittle hair shafts",
      "Custom shampoo, rinse, and conditioning advisory"
    ],
    whatToExpect: "A clinical scalp inspection to determine whether dandruff is fungal, dry, or dermatitis-related, paired with targeted therapeutic wash routines and natural scalp care."
  },
  {
    id: "nutrition",
    title: "Nutrition Guidance",
    tag: "Dietary Balance",
    iconName: "Apple",
    image: IMAGES.treatmentHomeopathy,
    shortDesc: "Practical, sustainable dietary plans aligned with your medical profile to nourish skin cells and hair follicles from within.",
    benefits: [
      "Micronutrient planning for keratin and collagen synthesis",
      "Anti-inflammatory dietary modifications for clear skin",
      "Meal timing adjustments fitting busy professional schedules",
      "Gut health optimization for lasting systemic wellness"
    ],
    whatToExpect: "Detailed nutritional assessment mapping your existing food intake, identifying hidden nutritional gaps, and crafting a simple, sustainable everyday dietary blueprint."
  },
  {
    id: "weight-loss",
    title: "Weight Loss & Wellness",
    tag: "Metabolic Wellness",
    iconName: "Activity",
    image: IMAGES.ctaBanner,
    shortDesc: "Healthy, physician-guided metabolic wellness and lifestyle counseling designed for lasting vitality without starvation.",
    benefits: [
      "Metabolic health review addressing hormonal considerations",
      "Sustainable lifestyle coaching without crash dieting",
      "Balanced energy levels and improved stamina",
      "Regular doctor review sessions for ongoing motivation"
    ],
    whatToExpect: "We review your metabolic markers, activity levels, stress and sleep patterns to design a realistic wellness trajectory that integrates seamlessly into your daily life."
  },
  {
    id: "cosmetics",
    title: "Cosmetic Care",
    tag: "Aesthetic Glow",
    iconName: "Smile",
    image: IMAGES.heroClinicalCard,
    shortDesc: "Customized aesthetic skin rituals, glow therapies, and professional cosmetic formulations to enhance natural skin luminosity.",
    benefits: [
      "Non-invasive glow therapies and texture refinement",
      "Gentle exfoliation and deep moisture infusion",
      "Safe formulations suitable for sensitive Indian skin tones",
      "Custom pre-event and regular maintenance routines"
    ],
    whatToExpect: "An individual aesthetic consultation to evaluate your skin texture, tone, and goals, followed by customized, safe cosmetic treatments that enhance your natural glow."
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Shruti Kumari",
    initials: "SK",
    rating: 5,
    timeAgo: "1 month ago",
    comment: "I have opted for online Hair Consultation from Dr. Bhagyashri Thombre. She is super supportive, explains everything neatly and answers your questions very patiently. She first understood my daily routine, my diet, sleeping habits, etc.",
    ownerResponse: {
      author: "Dr. Bhagyashri K. (Thombre)",
      text: "Dear Shruti, Thank you for visiting our clinic and rating us so high. We are happy that we could fulfill your expectations. Visit again and spread the word. You can call us anytime for further consultation."
    }
  },
  {
    id: "rev-2",
    author: "Rashmi Mishra",
    initials: "RM",
    rating: 5,
    timeAgo: "1 month ago",
    comment: "I got to know about Dr. Bhagyashri through my office colleague. During online consultation, we discussed my routine, food habits, sleeping timeline etc. She told me that getting a treatment for anything is not just taking medicines alone.",
    ownerResponse: {
      author: "Dr. Bhagyashri K. (Thombre)",
      text: "It was great talking to you Rashmi. As we discussed, it is not just about medicines, it is also about your diet and routine habits. So happy to see a yoga instructor visit our clinic. Stay healthy, eat healthy."
    }
  },
  {
    id: "rev-3",
    author: "Subrata Dasgupta",
    initials: "SD",
    rating: 5,
    timeAgo: "1 month ago",
    comment: "I have shifted to Pune for Job and since then I was suffering from itchy, dry and inflamed skin. I have tried allopathy which initially showed positive effects and I was happy. But as I stopped taking medicine, it reemerged and bothered me.",
    ownerResponse: {
      author: "Dr. Bhagyashri K. (Thombre)",
      text: "Thanks Subrata for your kind words. Happy to help and connect anytime for consultation. Eat healthy, stay healthy. Take care."
    }
  },
  {
    id: "rev-4",
    author: "Sneha Bansode",
    initials: "SB",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Best doctor for skin and hair treatment. My hair loss problem has been reduced completely after her treatment. She is genuine and knowledgeable. Highly recommended.",
    ownerResponse: {
      author: "Dr. Bhagyashri K. (Thombre)",
      text: "Thank you Sneha for visiting our clinic. Connect again for feedback and spread the word."
    }
  },
  {
    id: "rev-5",
    author: "Rupesh Kamble",
    initials: "RK",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Very effective skin treatment. Highly recommend Dr. Bhagyashri for any long-term skin issues."
  },
  {
    id: "rev-6",
    author: "Kadambari Kulkarni",
    initials: "KK",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "She is a very good doctor. My experience with her is superb."
  },
  {
    id: "rev-7",
    author: "Ashwini Nirnekar",
    initials: "AN",
    rating: 5,
    timeAgo: "Not specified",
    comment: "Good doctor, nice treatment, cosmetics are excellent."
  },
  {
    id: "rev-8",
    author: "Ganesh Bagav",
    initials: "GB",
    rating: 5,
    timeAgo: "4 days ago",
    comment: "Nice Skin care doctor."
  },
  {
    id: "rev-9",
    author: "Vijaykumar Kamble",
    initials: "VK",
    rating: 5,
    timeAgo: "5 days ago",
    comment: "Good Dr Skin Specialist Recommended Any skin issue."
  },
  {
    id: "rev-10",
    author: "Vijay Bhate",
    initials: "VB",
    rating: 5,
    timeAgo: "5 days ago",
    comment: "Excellent experience! The doctor is knowledgeable, attentive, and provides clear prescriptions with proper guidance. Highly recommended!"
  }
];
