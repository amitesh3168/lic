"use client";

import { useState } from "react";
import { MessageCircle, Shield, Briefcase, X, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StickyFooter() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* 
        ========================================
        MOBILE: STATIC BOTTOM BAR 
        ========================================
        This sticky bar takes the full width at the bottom of the screen.
        It is extremely effective for conversions on mobile devices.
      */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-between gap-3 border-t border-gray-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] pb-4 md:hidden">
        
        <a
          href="tel:+919450888648"
          className="flex-1 flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0f3b8c] text-[13px] font-bold text-white shadow-md transition-all active:scale-95"
        >
          <Phone className="h-4 w-4 fill-current" />
          <span>Call Now</span>
        </a>
        
        <a
          href="https://wa.me/919450888648?text=Hi, I would like to know more about LIC policies."
          className="flex-1 flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#10b981] text-[13px] font-bold text-white shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
        
      </div>

      {/* 
        ========================================
        DESKTOP: FLOATING ACTION BUTTON (FAB)
        ========================================
        Hidden on mobile because the static bar is used instead.
      */}
      <div className="hidden md:flex fixed bottom-10 right-10 z-50 flex-col items-end gap-3">
        
        {/* Expanded Options */}
        <div className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}>
          <a
            href="https://wa.me/919450888648?text=Hi, I want to buy a new LIC policy."
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 rounded-full bg-white p-2 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f3b8c] text-white">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold text-gray-800">{t.footer.buy}</span>
          </a>
          
          <a
            href="https://wa.me/919450888648?text=Hi, I am interested in joining as an LIC Agent."
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 rounded-full bg-white p-2 pr-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lic-yellow text-[#0a192f]">
              <Briefcase className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold text-gray-800">{t.footer.become}</span>
          </a>
        </div>

        {/* Main FAB Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
            isOpen ? "bg-white text-gray-800 rotate-90" : "bg-[#10b981] text-white hover:bg-[#059669] hover:scale-105"
          }`}
          aria-label="Chat with us"
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <MessageCircle className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Overlay when Desktop FAB is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity hidden md:block"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
