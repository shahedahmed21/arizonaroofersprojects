import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { BeforeAfter } from "@/components/site/before-after";
import { Projects } from "@/components/site/projects";
import { VideoShowcase } from "@/components/site/video-showcase";
import { Process } from "@/components/site/process";
import { ServiceAreas } from "@/components/site/service-areas";
import { Reviews } from "@/components/site/reviews";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

const title = "Arizona Roofers | Roof Repair, Replacement & Storm Damage";
const description =
  "Professional roofing across Phoenix, Tucson, Scottsdale, Tempe, Gilbert, Chandler and more. Roof repair, replacement, inspection and storm damage work built for Arizona.";

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
    <div className="page-shell min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Projects />
        <VideoShowcase />
        <Process />
        <ServiceAreas />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
