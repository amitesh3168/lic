"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const { t } = useLanguage();

  const faqs = [
    {
      id: 1,
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      id: 2,
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      id: 3,
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      id: 4,
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      id: 5,
      question: t.faq.q5,
      answer: t.faq.a5,
    },
    {
      id: 6,
      question: t.faq.q6,
      answer: t.faq.a6,
    },
  ];

  return (
    <section className="bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal animation="fade-up">
          <div className="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-lic-blue">
              <MessageCircleQuestion className="h-6 w-6" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
              {t.faq.title}
            </h2>
            <p className="text-sm text-gray-600 md:text-base">
              {t.faq.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} animation="fade-up" delay={index * 80}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                      ? "border-lic-blue/20 bg-white shadow-md"
                      : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center justify-between px-4 py-4 text-left md:px-6 md:py-5"
                  >
                    <span className="text-sm font-semibold text-gray-900 md:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-lic-blue" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 text-xs leading-relaxed text-gray-600 md:px-6 md:pb-6 md:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
