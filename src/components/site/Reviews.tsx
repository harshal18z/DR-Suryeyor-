import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { useReviews, type Review } from "@/lib/reviews-store";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

function Card({ t }: { t: Review }) {
  return (
    <div className="glass rounded-2xl p-6 w-[320px] md:w-[380px] shrink-0 h-full flex flex-col hover:shadow-glow transition-all">
      <div className="flex items-center justify-between">
        <Stars rating={t.rating} />
        <Quote className="h-5 w-5 text-primary/60" />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85 line-clamp-5">“{t.text}”</p>
      <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-3">
        {t.photo ? (
          <img src={t.photo} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
        ) : (
          <div className="h-9 w-9 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center font-semibold text-xs">
            {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </div>
        )}
        <div>
          <div className="font-display font-semibold text-sm leading-tight">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.company}</div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const all = useReviews();
  // Top featured: highest rated, most recent first — cap to 12
  const featured = [...all].sort((a, b) => b.rating - a.rating || b.createdAt - a.createdAt).slice(0, 12);
  const loop = [...featured, ...featured];
  const avg = all.length ? (all.reduce((s, t) => s + t.rating, 0) / all.length).toFixed(1) : "5.0";

  return (
    <section id="reviews" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Client Reviews</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              What our <span className="text-gradient">clients say</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-4 glass rounded-2xl px-6 py-4 shadow-glow">
              <div className="text-4xl font-display font-bold text-gradient">{avg}</div>
              <div className="text-left">
                <Stars rating={5} />
                <div className="text-xs text-muted-foreground mt-1">{all.length}+ verified reviews</div>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/reviews" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-deep transition-shadow">
                Read all reviews · Share yours
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <Card key={`${t.id}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
