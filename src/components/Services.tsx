"use client";

import { useState, useMemo } from "react";
import {
  FileText,
  GraduationCap,
  ShieldPlus,
  Users,
  HandCoins,
  Headset,
  ChevronRight,
  Phone,
  MessageCircle,
  X
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const { t } = useLanguage();
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const services = useMemo(() => [
    {
      id: 1,
      icon: FileText,
      title: t.services.s1Title,
      desc: t.services.s1Desc,
    },
    {
      id: 2,
      icon: GraduationCap,
      title: t.services.s2Title,
      desc: t.services.s2Desc,
    },
    {
      id: 3,
      icon: ShieldPlus,
      title: t.services.s3Title,
      desc: t.services.s3Desc,
    },
    {
      id: 4,
      icon: Users,
      title: t.services.s4Title,
      desc: t.services.s4Desc,
    },
    {
      id: 5,
      icon: HandCoins,
      title: t.services.s5Title,
      desc: t.services.s5Desc,
    },
    {
      id: 6,
      icon: Headset,
      title: t.services.s6Title,
      desc: t.services.s6Desc,
    },
  ], [t]);

  return (
    <section id="policies" className="px-4 py-16 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal animation="fade-up">
          <div className="mb-8 flex flex-col items-center justify-center md:mb-12">
            <h2 className="text-2xl font-bold text-lic-blue relative inline-block text-center md:text-4xl">
              {t.services.title}
              <div className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 bg-lic-yellow md:-bottom-3 md:w-16"></div>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCardId === service.id;

            return (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <div
                  onClick={() => setActiveCardId(isActive ? null : service.id)}
                  className={`group relative flex flex-col items-center justify-center rounded-xl border bg-white p-4 text-center shadow-sm transition-all duration-300 cursor-pointer overflow-hidden md:p-6 ${
                    isActive 
                      ? "border-lic-blue shadow-lg scale-[1.02] ring-2 ring-lic-blue/20" 
                      : "border-gray-100 hover:border-lic-blue/30 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                  style={{ minHeight: "160px" }}
                >
                  {/* Default Content */}
                  <div 
                    className={`flex w-full h-full flex-col items-center transition-all duration-300 ease-in-out ${
                      isActive ? "opacity-0 -translate-y-8 absolute pointer-events-none" : "opacity-100 translate-y-0 relative"
                    }`}
                  >
                    <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-lic-blue transition-colors group-hover:bg-lic-blue group-hover:text-white md:mb-4 md:h-12 md:w-12">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-lic-blue md:mb-2 md:text-base">
                      {service.title}
                    </h3>
                    <p className="text-[10px] leading-relaxed text-gray-500 md:text-xs">
                      {service.desc}
                    </p>
                    
                    {/* Subtle hint to click */}
                    <span className="mt-auto pt-2 text-[9px] font-bold text-gray-300 uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100">
                      Click to Connect
                    </span>
                  </div>

                  {/* Active / Contact Options Content */}
                  <div 
                    className={`flex w-full flex-col items-center justify-center gap-3 transition-all duration-300 ease-in-out ${
                      isActive ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 absolute pointer-events-none"
                    }`}
                  >
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveCardId(null); }}
                      className="absolute -top-2 -right-2 p-1 text-gray-400 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    
                    <h3 className="text-xs font-bold leading-tight text-gray-800 md:text-sm px-2">
                      Interested in<br/><span className="text-lic-blue">{service.title}?</span>
                    </h3>
                    
                    <div className="flex w-full flex-col gap-2 mt-1">
                      <a 
                        href="tel:+919450888648" 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-lic-blue py-2 text-white hover:bg-lic-light-blue transition-colors shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 fill-current" />
                        <span className="text-xs font-bold">Call Now</span>
                      </a>
                      
                      <a 
                        href={`https://wa.me/919450888648?text=${encodeURIComponent(`Hi, I am interested in ${service.title}. Can you provide more details?`)}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2 text-white hover:bg-[#20bd5a] transition-colors shadow-sm"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">WhatsApp</span>
                      </a>
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
