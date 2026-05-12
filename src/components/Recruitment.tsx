"use client";

import { useMemo } from "react";
import { TrendingUp, Clock, Briefcase, GraduationCap, Banknote, ShieldCheck, BadgeIndianRupee, Laptop } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Recruitment() {
  const { t } = useLanguage();

  const benefits = useMemo(() => [
    {
      id: 1,
      icon: BadgeIndianRupee,
      title: t.recruitment.b1t,
      desc: t.recruitment.b1d,
    },
    {
      id: 2,
      icon: Clock,
      title: t.recruitment.b2t,
      desc: t.recruitment.b2d,
    },
    {
      id: 3,
      icon: Briefcase,
      title: t.recruitment.b3t,
      desc: t.recruitment.b3d,
    },
    {
      id: 4,
      icon: TrendingUp,
      title: t.recruitment.b4t,
      desc: t.recruitment.b4d,
    },
    {
      id: 5,
      icon: Banknote,
      title: t.recruitment.b5t,
      desc: t.recruitment.b5d,
    },
    {
      id: 6,
      icon: ShieldCheck,
      title: t.recruitment.b6t,
      desc: t.recruitment.b6d,
    },
    {
      id: 7,
      icon: Laptop,
      title: t.recruitment.b7t,
      desc: t.recruitment.b7d,
    },
    {
      id: 8,
      icon: GraduationCap,
      title: t.recruitment.b8t,
      desc: t.recruitment.b8d,
    },
  ], [t]);

  return (
    <section id="recruitment" className="bg-gradient-to-br from-[#0a192f] to-lic-blue px-4 py-16 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal animation="fade-up">
          <div className="mb-12 flex flex-col items-center justify-center text-center md:mb-16">
            <span className="mb-4 inline-block rounded-full bg-lic-yellow/20 px-4 py-1.5 text-sm font-semibold text-lic-yellow backdrop-blur-sm">
              {t.recruitment.badge}
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              {t.recruitment.title} <span className="text-lic-yellow">{t.recruitment.highlight}</span> <br className="hidden md:block" />
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-blue-100 md:text-lg">
              {t.recruitment.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.id} animation="fade-up" delay={index * 80}>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-lic-yellow/20 to-transparent blur-2xl transition-opacity group-hover:opacity-100 opacity-50"></div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-lic-yellow to-yellow-600 text-[#0a192f] shadow-lg md:h-14 md:w-14">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-blue-100/80 md:text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-16">
            <a
              href="https://wa.me/919450888648?text=Hi, I am interested in becoming an LIC Agent."
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-lic-yellow px-8 py-4 text-base font-bold text-[#0a192f] shadow-xl shadow-lic-yellow/20 transition-all hover:-translate-y-1 hover:bg-yellow-400 sm:w-auto md:text-lg"
            >
              {t.recruitment.btn1}
            </a>
            <a
              href="tel:+919450888648"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto md:text-lg"
            >
              {t.recruitment.btn2}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
