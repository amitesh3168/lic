"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    id: 1,
    name: "Neha Verma",
    location: "Kanpur",
    text: "Very supportive and responsive. Guided us in claim process and settled everything smoothly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Sharma",
    location: "Lucknow",
    text: "Excellent service! Krishna ji helped me choose the perfect retirement plan for my future.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Singh",
    location: "Delhi",
    text: "Highly professional and transparent. Explained all policy details very clearly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "Got my child's education plan sorted out without any hassle. Very trustworthy advisor.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sunil Shukla",
    location: "Mumbai",
    text: "Always available to answer queries. The long term support is truly commendable.",
    rating: 5,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-16 pb-32 md:py-24 md:pb-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal animation="fade-up">
          <div className="mb-6 flex flex-col items-center justify-center px-4 md:mb-10">
            <h2 className="text-xl font-bold text-lic-blue relative inline-block text-center md:text-3xl">
              {t.testimonials.title}
              <div className="absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-lic-yellow md:-bottom-2 md:h-1 md:w-12"></div>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left" delay={150}>
          <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative w-[85%] md:w-[45%] lg:w-[30%] shrink-0 snap-center rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] cursor-pointer transition-transform hover:-translate-y-1 active:scale-[0.98] md:p-8"
              >
                <div className="flex flex-col h-full">
                  <Quote className="mb-2 h-6 w-6 text-lic-blue opacity-50 md:mb-4 md:h-8 md:w-8" />
                  <p className="mb-4 text-xs leading-relaxed text-gray-700 flex-grow md:text-sm">
                    {review.text}
                  </p>
                  <div className="mt-auto">
                    <div className="mb-1 flex gap-0.5 md:mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-lic-yellow text-lic-yellow md:h-4 md:w-4"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-lic-blue md:text-sm">{review.name}</span>
                      <span className="text-[10px] text-gray-500 md:text-xs">{review.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={300}>
          <div className="mt-2 flex justify-center gap-1.5 px-4 text-xs text-gray-400 md:text-sm">
            {t.testimonials.swipe}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
