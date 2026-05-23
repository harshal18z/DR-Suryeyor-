import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Projects } from "@/components/site/Projects";
import { Clients } from "@/components/site/Clients";
import { Careers } from "@/components/site/Careers";
import { Reviews } from "@/components/site/Reviews";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons, MouseGlow, ScrollProgress } from "@/components/site/Floating";

const SITE_URL = "https://precision-vista-suite.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D R Surveyor — Land Surveying & GIS in Mumbai" },
      { name: "description", content: "D R Surveyor offers professional land surveying, topographical mapping, GIS, drone & engineering survey services across Mumbai." },
      { property: "og:title", content: "D R Surveyor — Land Surveying & GIS in Mumbai" },
      { property: "og:description", content: "Precision. Accuracy. Trust. Professional land surveying and geospatial solutions in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [
      { rel: "icon", href: "/logo.jpeg" },
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "D R Surveyor",
          description: "Professional land surveying and geospatial solutions in Mumbai.",
          url: SITE_URL,
          image: `${SITE_URL}/logo.jpeg`,
          telephone: ["+91-8451866194", "+91-8452922949"],
          email: "drsurveyor01@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1403, Bldg No. 3, E-Wing, Swastik Industrial Estate, Ambedkar Nagar, Nr. Kamgar Stadium, Prabhadevi (W)",
            addressLocality: "Mumbai",
            postalCode: "400028",
            addressCountry: "IN",
          },
          areaServed: "Mumbai",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Land Surveying" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Topographical Mapping" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "GIS & Geospatial Solutions" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drone Survey" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engineering Surveying" } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Clients />
        <Careers />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
