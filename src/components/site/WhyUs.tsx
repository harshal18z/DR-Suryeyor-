import { CheckCircle2, Cpu, Truck, ShieldCheck, Satellite, FileCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Cpu, title: "High Precision Equipment", desc: "Total stations, GNSS rovers and survey-grade drones." },
  { icon: CheckCircle2, title: "Experienced Survey Team", desc: "Field-tested engineers with deep regional knowledge." },
  { icon: Truck, title: "Fast Project Delivery", desc: "Quick mobilisation and reliable turnaround times." },
  { icon: ShieldCheck, title: "Trusted Engineering Solutions", desc: "Audited workflows and quality-checked deliverables." },
  { icon: Satellite, title: "Modern GIS Technology", desc: "End-to-end geospatial pipelines and cloud delivery." },
  { icon: FileCheck, title: "Accurate Reporting", desc: "Detailed CAD drawings, reports and signed documents." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Why choose us</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Built on <span className="text-gradient">precision & trust</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all h-full">
                <div className="flex items-start gap-4">
                  <span className="h-12 w-12 rounded-xl bg-gradient-brand text-primary-foreground inline-flex items-center justify-center shadow-glow shrink-0">
                    <it.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{it.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
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
