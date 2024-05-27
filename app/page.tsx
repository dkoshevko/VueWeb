import ContactSection from "@/components/ContactSection";
import EngagementsSection from "@/components/EngagementsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <EngagementsSection />
      <ContactSection />
    </main>
  );
}
