import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Contact } from "@/components/portfolio/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhinav Kumar Singh — React & React Native Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abhinav Kumar Singh, a React & React Native developer shipping high-performance mobile and web products with 99% crash-free sessions.",
      },
      {
        property: "og:title",
        content: "Abhinav Kumar Singh — React & React Native Developer",
      },
      {
        property: "og:description",
        content:
          "3+ years shipping cross-platform mobile apps and modern web platforms with React, React Native, and TypeScript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
