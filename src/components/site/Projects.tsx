import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { X } from "lucide-react";
import w1 from "@/assets/work-utility-cad.png";
import w2 from "@/assets/work-siteplan-offset.png";
import w3 from "@/assets/work-ajmera-survey.png";
import w4 from "@/assets/work-plot-drawing.png";
import w5 from "@/assets/work-boundary-layout.png";
import w6 from "@/assets/work-rooftop-layout.jpeg";
import w7 from "@/assets/work-onsite-construction.jpeg";
import w8 from "@/assets/work-waterfront.jpeg";
import w9 from "@/assets/work-highrise-alignment.jpeg";

const items = [
  { src: w3, title: "Ajmera Greenfinity — Total Station Survey", tag: "Topographical", location: "Wadala East, Mumbai" },
  { src: w6, title: "High-Rise Rooftop Layout", tag: "Construction", location: "Mumbai" },
  { src: w1, title: "Utility & Drainage Layout (BMC)", tag: "CAD & Drafting", location: "Mumbai" },
  { src: w9, title: "High-Rise Vertical Alignment", tag: "Construction", location: "Mumbai" },
  { src: w2, title: "Site Plan — 2.4m Offset Study", tag: "CAD & Drafting", location: "Mumbai" },
  { src: w8, title: "Waterfront Boundary Survey", tag: "Infrastructure", location: "Mahim Creek" },
  { src: w4, title: "Plot Demarcation Drawing", tag: "CAD & Drafting", location: "Mumbai" },
  { src: w7, title: "On-Site Construction Survey", tag: "Construction", location: "Mumbai" },
  { src: w5, title: "Boundary & Layout Plan", tag: "CAD & Drafting", location: "Mumbai" },
];

const filters = ["All", "Topographical", "Construction", "CAD & Drafting", "Infrastructure"];

export function Projects() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof items[number] | null>(null);
  const filtered = items.filter((i) => active === "All" || i.tag === active);

  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Project Showcase</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Selected <span className="text-gradient">Field Work</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">A glimpse of real surveys, CAD drawings and on-site execution delivered across Mumbai since 2019.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    active === f ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass text-foreground/80 hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((it, i) => (
              <motion.button
                layout
                key={it.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setLightbox(it)}
                className="group mb-5 w-full break-inside-avoid relative rounded-2xl overflow-hidden ring-1 ring-border shadow-glow cursor-zoom-in bg-secondary/40"
              >
                <img src={it.src} alt={it.title} className="w-full h-auto transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep-brand)]/85 via-[color:var(--deep-brand)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/90 text-[color:var(--deep-brand)] px-2.5 py-1 rounded-full">{it.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-xs uppercase tracking-wider text-white/70">{it.location}</div>
                  <div className="text-white font-display font-semibold text-lg leading-tight">{it.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button aria-label="Close" className="absolute top-6 right-6 h-10 w-10 rounded-full glass flex items-center justify-center text-foreground" onClick={() => setLightbox(null)}>
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="max-h-[80vh] w-full object-contain rounded-2xl shadow-deep" />
              <div className="mt-4 text-center text-white">
                <div className="text-xs uppercase tracking-wider text-white/60">{lightbox.tag} · {lightbox.location}</div>
                <div className="font-display font-semibold text-lg mt-1">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
