import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackdrop, CursorGlow } from "@/components/portfolio/Backdrop";
import { Navbar, ScrollProgress, BackToTop } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Skills } from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Pushpank Singh — AI/ML Engineer Portfolio";
const description =
  "Portfolio of Pushpank Singh, AI/ML Engineer and final-year IT student building machine learning models, deep reinforcement learning agents and data science projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <AmbientBackdrop />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
