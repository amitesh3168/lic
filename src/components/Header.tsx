"use client";

import { useState } from "react";
import { Phone, Menu, X, ChevronRight, Home, Shield, Users, Info, Languages, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { icon: Home, label: t.header.home, href: "#home" },
    { icon: Shield, label: t.header.policies, href: "#policies" },
    { icon: Users, label: t.header.testimonials, href: "#testimonials" },
    { icon: Info, label: t.header.aboutUs, href: "#about-us" },
    { icon: Users, label: t.header.joinAgent, href: "#recruitment" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-center bg-white px-4 py-3 shadow-sm md:py-4">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Logo */}
            <div className="flex h-10 w-auto items-center justify-center transition-transform group-hover:scale-105 group-active:scale-95 md:h-12">
              <img src="/LIC_new.png" alt="LIC Logo" className="h-full w-auto object-contain" />
            </div>
            <div className="hidden sm:flex flex-col transition-opacity group-hover:opacity-80">
              <span className="text-base font-bold leading-tight text-lic-blue md:text-xl">
                Krishna Shukla
              </span>
              <span className="text-xs text-gray-600 md:text-sm">LIC Agent & CLIA</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex gap-6 mr-6">
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="text-sm font-semibold text-gray-600 hover:text-lic-blue transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={toggleLanguage}
              className="group relative flex items-center gap-1 sm:gap-1.5 rounded-full border-2 border-lic-yellow bg-lic-yellow/10 px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-extrabold text-lic-blue shadow-sm transition-all hover:scale-105 hover:bg-lic-yellow hover:text-[#0a192f] md:px-4 md:py-2 md:text-sm"
              aria-label="Toggle Language"
            >
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-yellow-500"></span>
              </span>
              <Languages className="h-4 w-4 text-lic-blue transition-colors group-hover:text-[#0a192f]" />
              {language === "en" ? "हिंदी" : "EN"}
            </button>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="https://maps.app.goo.gl/aztSFqammF7Two8H9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-[#ea4335] transition-all hover:bg-red-50 hover:shadow-sm active:scale-90 md:h-auto md:w-auto md:px-4 md:py-2 md:rounded-lg md:border-[#ea4335] md:bg-white md:hover:bg-[#ea4335] md:hover:text-white group"
                aria-label="Office Location"
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:mr-2 md:h-4 md:w-4 transition-colors md:group-hover:text-white" />
                <span className="hidden md:inline text-sm font-bold">Office</span>
              </a>
              <a
                href="https://wa.me/919450888648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 transition-all hover:bg-green-50 hover:shadow-sm active:scale-90 md:h-auto md:w-auto md:px-4 md:py-2 md:rounded-lg md:border-[#25D366] md:bg-[#25D366]/5 md:hover:bg-[#25D366]/10 group"
                aria-label="WhatsApp"
              >
                <img src="/WhatsApp_Logo.webp" alt="WhatsApp" className="h-5 w-5 sm:h-6 sm:w-6 md:mr-2 md:h-5 md:w-5 object-contain drop-shadow-sm transition-transform group-hover:scale-110" />
                <span className="hidden md:inline text-sm font-bold text-[#25D366]">WhatsApp</span>
              </a>
              <a
                href="tel:+919450888648"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-lic-blue transition-all hover:bg-gray-100 hover:shadow-sm active:scale-90 md:h-auto md:w-auto md:px-4 md:py-2 md:rounded-lg md:bg-lic-blue md:text-white md:hover:bg-lic-light-blue"
                aria-label="Call Now"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 fill-lic-blue md:mr-2 md:h-4 md:w-4 md:fill-white" />
                <span className="hidden md:inline text-sm font-bold">Call Now</span>
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gray-100 hover:shadow-sm active:scale-90 md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Side Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <span className="text-lg font-bold text-lic-blue">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-600 transition-colors hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-blue-50"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-lic-blue opacity-70 transition-opacity group-hover:opacity-100" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-lic-blue">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-lic-blue" />
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-safe left-0 right-0 p-4 pb-20">
          <div className="rounded-xl bg-blue-50 p-4 text-center">
            <p className="mb-2 text-xs text-gray-600">Need immediate assistance?</p>
            <a
              href="tel:+919450888648"
              className="inline-flex items-center gap-2 rounded-lg bg-lic-blue px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-lic-light-blue"
            >
              <Phone className="h-4 w-4 fill-current" />
              Call Me Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
