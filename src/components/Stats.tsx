import { Users, UsersRound, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: " 25+",
    label: "Years of\nExperience",
  },
  {
    id: 2,
    icon: UsersRound,
    value: "4000+",
    label: "Happy\nFamilies",
  },
  {
    id: 3,
    icon: ShieldCheck,
    value: "Claim\nAssistance",
    label: "Support",
    highlight: true,
  },
  {
    id: 4,
    icon: Award,
    value: "Trusted",
    label: "LIC Advisor",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 mx-4 -mt-6 md:-mt-12">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] md:p-8 md:rounded-2xl">
        <div className="grid grid-cols-4 gap-2 divide-x divide-gray-100 text-center md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center px-1 md:px-4"
              >
                <div className="mb-2 text-lic-blue md:mb-4">
                  <Icon className="h-6 w-6 md:h-10 md:w-10" />
                </div>
                <div
                  className={`text-sm font-bold md:text-2xl md:mb-2 ${stat.highlight ? "text-lic-blue" : "text-gray-900"
                    }`}
                >
                  {stat.value}
                </div>
                <div className="whitespace-pre-line text-[10px] leading-tight text-gray-500 md:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
