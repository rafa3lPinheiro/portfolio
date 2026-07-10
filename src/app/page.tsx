import { SiteHeader } from "../components/layout/site-header";
import { AboutSection } from "../components/sections/about-section";
import { CasesSection } from "../components/sections/cases-section";
import { ContactSection } from "../components/sections/contact-section";
import { HeroSection } from "../components/sections/hero-section";
import { ProcessSection } from "../components/sections/process-section";
import { StackSection } from "../components/sections/stack-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProcessSection />
        <CasesSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
