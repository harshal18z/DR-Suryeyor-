import about from "@/assets/about-team.jpg";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Award, Target, Users, CalendarClock, Building2, Handshake, Rocket, Trophy, TrendingUp } from "lucide-react";

const stats = [
  { icon: CalendarClock, value: 7, suffix: "+", label: "Years of Experience" },
  { icon: Target, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Handshake, value: 350, suffix: "+", label: "Trusted Clients" },
  { icon: Users, value: 40, suffix: "+", label: "Team Members" },
];

const milestones = [
  { year: "2019", title: "Company Founded", desc: "D R Surveyor established in Mumbai with a vision of precision-driven infrastructure surveying.", icon: Rocket },
  { year: "2020", title: "First Major Projects", desc: "Delivered our first large-scale topographical and construction layout assignments.", icon: Building2 },
  { year: "2022", title: "Expansion Across Mumbai", desc: "Scaled operations city-wide with advanced GNSS, total stations and drone survey capabilities.", icon: TrendingUp },
  { year: "2024", title: "Large Client Partnerships", desc: "Trusted by leading developers, infrastructure firms and government contractors.", icon: Trophy },
  { year: "2026", title: "Growing Infrastructure Brand", desc: "Recognized as a reliable engineering survey partner across western India.", icon: Award },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-deep ring-1 ring-border">
                <img src={about} alt="D R Surveyor team on site" className="w-full aspect-[4/3] object-cover" width={1280} height={960} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-4 glass rounded-2xl p-5 shadow-glow max-w-[240px]">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">Established</div>
                <div className="mt-1 text-4xl font-display font-bold text-gradient">2019</div>
                <div className="text-xs text-muted-foreground mt-1">Building trust across Mumbai’s infrastructure sector</div>
              </div>
              <div className="absolute -top-6 -right-4 glass rounded-2xl p-4 shadow-glow hidden md:block">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  ISO-grade workflows
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                A trusted name in <span className="text-gradient">infrastructure surveying</span> since 2019
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Founded in 2019, <strong className="text-foreground">D R Surveyor</strong> has grown into one of Mumbai’s most dependable
                land surveying and engineering consultancies. We partner with developers, contractors and government bodies to deliver
                precision survey data that powers residential towers, commercial complexes, roads and large industrial projects.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our work is built on three commitments — <strong className="text-foreground">uncompromising quality</strong>,
                <strong className="text-foreground"> long-term client relationships</strong>, and
                <strong className="text-foreground"> engineering excellence</strong>. From topographical mapping to GIS deliverables and
                construction layouts, every project reflects the discipline of a well-established infrastructure brand.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="group glass rounded-2xl p-5 hover:shadow-glow transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-xl bg-gradient-brand text-primary-foreground inline-flex items-center justify-center shadow-glow">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div className="text-3xl font-display font-bold text-gradient">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Journey</div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                From <span className="text-gradient">2019 to today</span>
              </h3>
              <p className="mt-3 text-muted-foreground">A timeline of growth, trust and infrastructure milestones.</p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={m.year} delay={i * 0.05}>
                    <div className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                      <div className={`pl-14 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                        <div className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all">
                          <div className={`flex items-center gap-3 ${left ? "md:justify-end" : ""}`}>
                            <span className="inline-flex items-center rounded-full bg-gradient-brand text-primary-foreground px-3 py-1 text-xs font-bold tracking-wider shadow-glow">{m.year}</span>
                          </div>
                          <h4 className="mt-3 font-display font-semibold text-lg">{m.title}</h4>
                          <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                      <span className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 h-9 w-9 rounded-full bg-gradient-brand text-primary-foreground inline-flex items-center justify-center shadow-glow ring-4 ring-background">
                        <m.icon className="h-4 w-4" />
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
