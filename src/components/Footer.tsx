"use client";

import { Phone, MapPin, ChevronRight, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#081324] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lic-yellow to-transparent opacity-70"></div>
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lic-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lic-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex h-14 w-auto items-center justify-center rounded-xl bg-white/10 shadow-[0_0_20px_rgba(30,58,138,0.3)] border border-white/20 p-2 backdrop-blur-sm">
                <img src="/LIC_new.png" alt="LIC Logo" className="h-full w-auto object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  Krishna Shukla
                </span>
                <span className="text-sm font-medium text-lic-yellow tracking-wide">{t.hero.officer}</span>
              </div>
            </div>
            <p className="text-sm text-blue-100/60 leading-relaxed mb-8 pr-4">
              {t.footer.disclaimer}
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-white bg-white/5 px-5 py-3 rounded-full border border-white/10 w-fit shadow-sm backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 text-lic-yellow" />
              IRDAI Authorized
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3 flex flex-col lg:px-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-lic-yellow rounded-full"></span>
              {t.footer.quickLinks}
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { label: t.header.home, href: "#home" },
                { label: t.header.policies, href: "#policies" },
                { label: t.header.testimonials, href: "#testimonials" },
                { label: t.header.joinAgent, href: "#recruitment" }
              ].map((link, i) => (
                <a key={i} href={link.href} className="group flex items-center text-sm font-medium text-blue-100/70 hover:text-white transition-all w-fit">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-lic-yellow group-hover:text-[#081324]">
                    <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Map Card (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
             <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 md:p-8 backdrop-blur-md shadow-2xl">
               {/* Accent */}
               <div className="absolute top-0 right-10 w-20 h-[2px] bg-lic-yellow"></div>
               
               <h3 className="text-xl font-bold text-white mb-6">
                 {t.footer.contact}
               </h3>
               
               <div className="space-y-6">
                 {/* Phone */}
                 <a href="tel:+919450888648" className="group flex items-center gap-4">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lic-blue/20 border border-lic-blue/30 text-lic-yellow transition-all group-hover:scale-110 group-hover:bg-lic-blue group-hover:border-lic-blue">
                     <Phone className="h-5 w-5" />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100/50 mb-0.5">Direct Line</p>
                     <p className="text-lg font-bold text-white group-hover:text-lic-yellow transition-colors">+91 94508 88648</p>
                   </div>
                 </a>

                 {/* Separator */}
                 <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>

                 {/* Map */}
                 <div className="flex items-start gap-4">
                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white mt-1">
                     <MapPin className="h-5 w-5" />
                   </div>
                   <div className="flex flex-col">
                     <p className="text-sm font-bold text-white mb-1">{t.footer.office}</p>
                     <p className="text-xs text-blue-100/70 leading-relaxed mb-3 pr-4">
                       {t.footer.address}
                     </p>
                     <a 
                       href="https://maps.app.goo.gl/aztSFqammF7Two8H9?g_st=aw" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="group inline-flex items-center gap-2 text-xs font-bold text-[#081324] bg-lic-yellow px-5 py-3 rounded-xl hover:bg-yellow-400 transition-all w-fit shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                     >
                       {t.footer.getDirections} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                     </a>
                   </div>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-blue-100/40 font-medium">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Krishna Shukla. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
               <CheckCircle2 className="h-3 w-3" /> Secure & Verified
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
