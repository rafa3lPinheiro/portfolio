import {
  AboutSection,
  CasesSection,
  ContactSection,
  Hero,
  ProcessSection,
  StackSection,
} from "../components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProcessSection />
      <CasesSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
