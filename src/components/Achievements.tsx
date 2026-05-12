"use client";

import { Shield, Award, Users, HandCoins } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  const { t } = useLanguage();

  const metrics = [
    {
      id: 1,
      icon: Shield,
      value: "25+",
      label: t.achievements.years,
    },
    {
      id: 2,
      icon: Award,
      value: "4000+",
      label: t.achievements.families,
    },
    {
      id: 3,
      icon: Users,
      value: " 50 +",
      label: t.achievements.agents,
    },
    {
      id: 4,
      icon: HandCoins,
      value: " 5cr+",
      label: t.achievements.claims,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0a192f] to-lic-blue px-4 py-16 text-white md:py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lic-yellow/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal animation="fade-up">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-bold md:text-4xl">
              {t.achievements.title} <span className="text-lic-yellow">{t.achievements.highlight}</span>
            </h2>
            <p className="mt-3 text-sm text-blue-100 md:text-base">
              {t.achievements.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <ScrollReveal key={metric.id} animation="zoom-in" delay={index * 120}>
                <div
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <Icon className="mb-3 h-8 w-8 text-lic-yellow md:mb-4 md:h-10 md:w-10" />
                  <h3 className="mb-1 text-2xl font-bold md:text-4xl">{metric.value}</h3>
                  <p className="text-xs text-blue-100 md:text-sm">{metric.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
