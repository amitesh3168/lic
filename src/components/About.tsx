import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about-us" className="px-4 py-16 md:px-8 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Image Side */}
        <div className="relative w-full md:w-5/12 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-lic-blue/20 to-lic-yellow/20 rounded-[3rem] -rotate-6 scale-105 transition-transform hover:rotate-0 duration-700"></div>
          <div className="relative z-10 bg-gradient-to-t from-lic-blue to-[#1e3a8a] rounded-[3rem] overflow-hidden pt-8 px-8 w-full max-w-[350px] md:max-w-none shadow-2xl">
            <img
              src="/image_nobg.png"
              alt="Krishna Shukla"
              className="w-full h-auto object-cover object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-7/12">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-lic-blue/10 px-4 py-1.5 text-sm font-bold text-lic-blue mb-4">
              Meet The Mentor
            </span>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl leading-tight mb-6">
              Krishna Shukla
            </h2>
            <p className="text-lg text-lic-blue font-semibold mb-4">
              LIC Agent & Chief Life Insurance Advisor (CLIA)
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              With over two decades of dedicated service, I have made it my life's mission to secure the financial future of families across India. My journey started as an ordinary agent, but through hard work, transparency, and a client-first approach, I built a legacy of trust.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Today, as a certified CLIA, my goal extends beyond selling policies. I am deeply passionate about empowering ambitious individuals to build their own profitable businesses in the insurance sector, providing them with the exact blueprint, training, and mentorship they need to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-lic-yellow shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Personalized Planning</h4>
                <p className="text-sm text-gray-500 mt-1">Custom insurance strategies for your unique goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-lic-yellow shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900">Career Mentorship</h4>
                <p className="text-sm text-gray-500 mt-1">Step-by-step guidance to become a top-tier agent.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
