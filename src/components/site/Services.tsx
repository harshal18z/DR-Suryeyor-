import {
  Map, Mountain, Layers, Ruler, Square, Plane, Building2, Compass, Activity, MapPin,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Map, title: "Land Surveying", desc: "Comprehensive land surveys with millimetre-grade precision." },
  { icon: Mountain, title: "Topographical Survey", desc: "Accurate terrain, elevation and feature mapping." },
  { icon: Layers, title: "GIS Mapping", desc: "Spatial data analysis and high-fidelity GIS solutions." },
  { icon: Ruler, title: "Construction Layout", desc: "On-site setting-out for foundations and structures." },
  { icon: Square, title: "Boundary Survey", desc: "Legal boundary demarcation and dispute resolution." },
  { icon: Plane, title: "Drone Survey", desc: "UAV-based aerial mapping and orthomosaic outputs." },
  { icon: Building2, title: "Infrastructure Survey", desc: "Roads, bridges, utilities and pipeline surveys." },
  { icon: Compass, title: "Engineering Survey", desc: "Precision surveys for civil engineering projects." },
  { icon: Activity, title: "Contour Mapping", desc: "Detailed contour generation for design teams." },
  { icon: MapPin, title: "Site Measurement", desc: "Quick, certified site measurements and reports." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">What we do</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Premium <span className="text-gradient">Surveying Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              End-to-end land and engineering surveying — from drone-based mapping to construction layout.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 5) * 0.06}>
              <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-[color:var(--sky-brand)]/40 via-transparent to-[color:var(--green-brand)]/40 hover:from-[color:var(--sky-brand)] hover:to-[color:var(--green-brand)] transition-all">
                <div className="relative h-full rounded-2xl bg-card p-6 overflow-hidden">
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_0%,color-mix(in_oklab,var(--sky-brand)_30%,transparent),transparent_60%)]" />
                  <div className="relative">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
