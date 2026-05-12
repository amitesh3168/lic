"use client";

import { useState, useEffect, useMemo } from "react";
import { ShieldCheck, BadgeCheck, Phone, MessageCircle, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();

  const slides = useMemo(() => [
    {
      id: 1,
      badge: t.hero.badge1,
      title: t.hero.title1,
      titleHighlight: t.hero.titleHighlight1,
      desc: t.hero.desc1,
    },
    {
      id: 2,
      badge: t.hero.badge2,
      title: t.hero.title2,
      titleHighlight: t.hero.titleHighlight2,
      desc: t.hero.desc2,
    },
    {
      id: 3,
      badge: t.hero.badge3,
      title: t.hero.title3,
      titleHighlight: t.hero.titleHighlight3,
      desc: t.hero.desc3,
    },
    {
      id: 4,
      badge: t.hero.badge4,
      title: t.hero.title4,
      titleHighlight: t.hero.titleHighlight4,
      desc: t.hero.desc4,
    }
  ], [t]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="bg-[#f8fafc]">
      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#eef5ff] via-white to-[#fff9e8] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          
          {/* Background Decor */}
          <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-lic-blue/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-lic-yellow/10 blur-2xl"></div>

          {/* Container */}
          <div className="relative flex flex-col justify-center min-h-[360px] md:min-h-[600px] w-full px-4 py-6 md:p-12">

            {/* Absolute Agent Photo (Placed right next to text, touching bottom edge) */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[95%] flex items-end justify-end z-10 md:w-1/2 md:pr-4">
              <img
                src="/image_nobg.png"
                alt="Krishna Shukla"
                className="h-auto w-full max-h-[340px] md:max-h-[580px] object-contain object-bottom drop-shadow-xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Relative Text Content (Allowed to overlap if necessary, sitting on top) */}
            <div className="relative z-20 w-[62%] flex flex-col justify-center md:w-1/2">
              <div className={`transition-all duration-500 ease-out ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
                <span className="inline-block rounded-full bg-[#ffe9a8] px-2.5 py-1 text-[9px] font-bold text-[#1e3a8a] md:text-sm mb-3">
                  {slide.badge}
                </span>

                <h1 className="text-[20px] font-extrabold leading-[1.1] text-gray-900 md:text-6xl mb-2 tracking-tight">
                  {slide.title}
                  <br />
                  <span className="text-lic-blue">{slide.titleHighlight}</span>
                </h1>

                <p className="text-[10px] leading-snug text-gray-600 md:text-lg mb-4">
                  {slide.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-1.5 w-full mb-3">
                <a
                  href="#policies"
                  className="flex-1 flex items-center justify-center gap-1 rounded-[10px] bg-[#1e3a8a] py-2.5 text-[9px] font-bold text-white shadow-md active:scale-95 md:px-6 md:py-4 md:text-base md:gap-2 md:rounded-xl hover:bg-blue-900 transition-colors"
                >
                  <ShieldCheck className="h-3 w-3 md:h-5 md:w-5" />
                  {t.hero.getPolicy}
                </a>
                <a
                  href="#recruitment"
                  className="flex-1 flex items-center justify-center gap-1 rounded-[10px] border border-[#1e3a8a] bg-white text-[#1e3a8a] py-2.5 text-[9px] font-bold shadow-sm active:scale-95 md:px-6 md:py-4 md:text-base md:gap-2 md:rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <Briefcase className="h-3 w-3 md:h-5 md:w-5" />
                  {t.hero.joinAgent}
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-1.5 text-[8.5px] font-bold text-gray-600 md:flex-row md:text-sm">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-[#1e3a8a] md:h-5 md:w-5" />
                  {t.hero.agent}
                </div>
                <div className="flex items-center gap-1">
                  <BadgeCheck className="h-3 w-3 text-[#1e3a8a] md:h-5 md:w-5" />
                  {t.hero.officer}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
