"use client";

import { useMemo } from "react";
import { Award, Clock, Users, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = useMemo(() => [
    {
      id: 1,
      icon: Award,
      title: t.whyChooseUs.w1,
      desc: t.whyChooseUs.w1d,
    },
    {
      id: 2,
      icon: Clock,
      title: t.whyChooseUs.w2,
      desc: t.whyChooseUs.w2d,
    },
    {
      id: 3,
      icon: HeartHandshake,
      title: t.whyChooseUs.w3,
      desc: t.whyChooseUs.w3d,
    },
    {
      id: 4,
      icon: Users,
      title: t.whyChooseUs.w4,
      desc: t.whyChooseUs.w4d,
    },
  ], [t]);

  return (
    <section id="about-us" className="px-4 py-16 md:py-24 bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-center justify-center md:mb-12">
          <h2 className="text-xl font-bold text-lic-blue relative inline-block text-center md:text-3xl">
            {t.whyChooseUs.title}
            <div className="absolute -bottom-1 left-1/2 h-0.5 w-12 -translate-x-1/2 bg-lic-yellow md:-bottom-2 md:h-1 md:w-16"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-lic-blue/20 hover:shadow-lg hover:bg-blue-50/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-blue/5 text-lic-blue transition-transform group-hover:scale-110 group-hover:bg-lic-blue group-hover:text-white md:h-16 md:w-16">
                  <Icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
