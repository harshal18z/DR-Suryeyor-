import { Briefcase, ArrowUpRight, MapPin, Info } from "lucide-react";
import { Reveal } from "./Reveal";

const FORM_URL = "https://forms.gle/WLCFLedQCkDC7ZWy8";

const positions = [
  {
    title: "Internship",
    type: "Internship",
    location: "Mumbai",
    desc: "Hands-on field training in land surveying, GIS and CAD with mentorship from senior engineers.",
  },
  {
    title: "Full Time",
    type: "Full-time",
    location: "Mumbai",
    desc: "Permanent role on our core survey team — drive projects end-to-end with growth opportunities.",
  },
  {
    title: "Part Time",
    type: "Part-time",
    location: "Mumbai",
    desc: "Flexible engagement for experienced surveyors and GIS specialists to support active projects.",
  },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-14 bg-gradient-brand text-primary-foreground shadow-deep">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] opacity-80 font-semibold">Careers</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Build your career at D R Surveyor</h2>
                <p className="mt-4 text-white/85 max-w-lg">
                  Join a growing infrastructure surveying team trusted by leading developers and contractors across Mumbai.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-2xl glass-dark px-6 py-5 text-white shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  <span className="h-12 w-12 rounded-xl bg-white/15 inline-flex items-center justify-center">
                    <Briefcase className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm opacity-80">Ready to grow?</span>
                    <span className="block font-display font-semibold text-lg">Apply Now</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {positions.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all h-full flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display font-semibold text-lg">{p.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{p.location}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span>{p.type}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.desc}</p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-all"
                >
                  Apply Now <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Info className="h-4 w-4 text-primary" />
            Applications are accepted through our official Google Form.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
