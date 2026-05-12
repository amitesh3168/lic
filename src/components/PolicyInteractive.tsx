"use client";

import { useState } from "react";
import { GraduationCap, Umbrella, HeartPulse, ArrowRight } from "lucide-react";

const goals = [
  {
    id: "child",
    icon: GraduationCap,
    title: "Child's Future",
    desc: "Secure funds for their higher education or marriage.",
    message: "Hi, I want to know about child education and marriage plans.",
  },
  {
    id: "retirement",
    icon: Umbrella,
    title: "Retirement",
    desc: "Build a corpus for a stress-free retired life.",
    message: "Hi, I am looking for a suitable retirement plan.",
  },
  {
    id: "health",
    icon: HeartPulse,
    title: "Health & Life",
    desc: "Comprehensive protection for medical emergencies.",
    message: "Hi, I want to discuss health and term insurance options.",
  },
];

export default function PolicyInteractive() {
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  return (
    <section className="bg-white px-4 py-12 md:py-20 md:px-8 border-t border-gray-100">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[#eff6ff]/50 p-6 md:p-12 md:border md:border-blue-100">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-2xl font-bold text-lic-blue md:text-3xl">
            Find the Right Plan in Seconds
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Select your primary financial goal to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal.id === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal)}
                className={`flex flex-col items-center justify-center rounded-xl border p-4 transition-all md:p-6 ${
                  isSelected
                    ? "border-lic-blue bg-lic-blue text-white shadow-lg scale-105"
                    : "border-gray-200 bg-white text-gray-600 hover:border-lic-blue/50 hover:bg-blue-50"
                }`}
              >
                <Icon className={`mb-2 h-6 w-6 md:mb-3 md:h-8 md:w-8 ${isSelected ? "text-lic-yellow" : "text-lic-blue"}`} />
                <span className="text-xs font-bold md:text-sm">{goal.title}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 md:p-8">
          <h3 className="mb-2 text-lg font-bold text-lic-blue md:text-xl">
            {selectedGoal.title} Plan
          </h3>
          <p className="mb-6 text-sm text-gray-600 md:text-base">
            {selectedGoal.desc}
          </p>
          <a
            href={`https://wa.me/919450888648?text=${encodeURIComponent(selectedGoal.message)}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark md:px-8 md:py-4 md:text-base"
          >
            Discuss on WhatsApp
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
