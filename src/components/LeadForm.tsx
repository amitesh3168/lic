"use client";

import { useState } from "react";
import { Send, CheckCircle2, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Buy a Policy");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hi Krishna Ji,\n\nI want to request a callback.\n*Name:* ${name}\n*Phone:* ${phone}\n*I am interested in:* ${interest}`;
    const url = `https://wa.me/919450888648?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="px-4 py-16 md:px-8 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lic-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Value Proposition */}
        <div className="w-full lg:w-1/2">
          <span className="mb-4 inline-block rounded-full bg-lic-yellow/20 px-3 py-1.5 text-xs font-semibold text-lic-blue">
            {t.lead.badge}
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            {t.lead.title} <br className="hidden md:block"/>
            <span className="text-lic-blue">{t.lead.highlight}</span>
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-lg">
            {t.lead.desc}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-lic-blue" />
              <span className="text-sm font-medium text-gray-700 md:text-base">{t.lead.f1}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-lic-blue" />
              <span className="text-sm font-medium text-gray-700 md:text-base">{t.lead.f2}</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-lic-blue" />
              <span className="text-sm font-medium text-gray-700 md:text-base">{t.lead.f3}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-10 relative">
            <div className="absolute -top-6 -right-6 h-16 w-16 bg-lic-yellow rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <HeadphonesIcon className="h-8 w-8 text-[#0a192f]" />
            </div>

            <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
              {t.lead.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700 md:text-sm">
                  {t.lead.name}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-colors focus:border-lic-blue focus:bg-white focus:ring-4 focus:ring-lic-blue/10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700 md:text-sm">
                  {t.lead.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-colors focus:border-lic-blue focus:bg-white focus:ring-4 focus:ring-lic-blue/10"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-gray-700 md:text-sm">
                  {t.lead.interest}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInterest("Buy a Policy")}
                    className={`rounded-lg border py-3 text-sm font-medium transition-colors ${interest === "Buy a Policy"
                        ? "border-lic-blue bg-lic-blue text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                  >
                    {t.footer.buy}
                  </button>
                  <button
                    type="button"
                    onClick={() => setInterest("Become an Agent")}
                    className={`rounded-lg border py-3 text-sm font-medium transition-colors ${interest === "Become an Agent"
                        ? "border-lic-blue bg-lic-blue text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                      }`}
                  >
                    {t.footer.become}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-lic-blue px-6 py-4 text-sm font-bold text-white shadow-lg shadow-lic-blue/20 transition-all hover:-translate-y-0.5 hover:bg-lic-light-blue md:text-base"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                {t.lead.btn}
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                {t.lead.note}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
