import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Recruitment from "@/components/Recruitment";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import StickyFooter from "@/components/StickyFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-16 font-sans text-gray-900 md:pb-0 overflow-x-hidden relative">
      <Header />
      <main className="w-full">
        <Hero />
        <Achievements />
        <div className="h-4 md:h-12"></div> {/* Spacer */}
        <Services />
        <WhyChooseUs />
        <Recruitment />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <div className="relative z-40 w-full bg-[#081324]">
        <Footer />
      </div>
      <StickyFooter />
    </div>
  );
}
