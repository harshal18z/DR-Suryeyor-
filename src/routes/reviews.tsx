import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, Search, Star, Trash2, Upload, X } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { useReviews, saveReview, deleteReview, type Review } from "@/lib/reviews-store";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — D R Surveyor" },
      { name: "description", content: "Read verified client reviews of D R Surveyor and share your own experience. Trusted land surveying & geospatial solutions in Mumbai." },
      { property: "og:title", content: "Client Reviews — D R Surveyor" },
      { property: "og:description", content: "Verified client testimonials for D R Surveyor — Mumbai's trusted land surveying company." },
    ],
  }),
  component: ReviewsPage,
});

function Stars({ rating, size = "h-4 w-4", onChange }: { rating: number; size?: string; onChange?: (n: number) => void }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange?.(i + 1)}
            className={`${onChange ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
            aria-label={`${i + 1} star`}
            disabled={!onChange}
          >
            <Star className={`${size} ${filled ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
          </button>
        );
      })}
    </div>
  );
}

function ReviewCard({ r, onDelete }: { r: Review; onDelete: (id: string) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <Stars rating={r.rating} />
        {r.owned && !r.seed && (
          <button onClick={() => onDelete(r.id)} aria-label="Delete review" className="text-muted-foreground hover:text-destructive transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/85 flex-1">“{r.text}”</p>
      <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-3">
        {r.photo ? (
          <img src={r.photo} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center font-semibold text-xs">
            {r.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-display font-semibold text-sm leading-tight truncate">{r.name}</div>
          <div className="text-xs text-muted-foreground truncate">{r.company}</div>
        </div>
        <div className="ml-auto text-[11px] text-muted-foreground whitespace-nowrap">
          {new Date(r.createdAt).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })}
        </div>
      </div>
    </motion.div>
  );
}

function ReviewForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Please upload an image under 2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !text.trim()) {
      toast.error("Please fill in name, company and your review.");
      return;
    }
    saveReview({ name: name.trim(), company: company.trim(), rating, text: text.trim(), photo });
    toast.success("Thank you! Your review has been posted.");
    setName(""); setCompany(""); setRating(5); setText(""); setPhoto(undefined);
    if (fileRef.current) fileRef.current.value = "";
    onSubmitted();
  };

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-8 shadow-glow space-y-5">
      <div>
        <h3 className="font-display text-2xl font-bold">Share your experience</h3>
        <p className="text-sm text-muted-foreground mt-1">Your review appears instantly. Stored locally in your browser.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-foreground/80">Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your name" />
        </div>
        <div>
          <label className="text-xs font-semibold text-foreground/80">Company</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Company name" />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-foreground/80">Rating</label>
        <div className="mt-2"><Stars rating={rating} size="h-7 w-7" onChange={setRating} /></div>
      </div>
      <div>
        <label className="text-xs font-semibold text-foreground/80">Your Review</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" placeholder="What was your experience working with D R Surveyor?" />
      </div>
      <div>
        <label className="text-xs font-semibold text-foreground/80">Profile Photo <span className="text-muted-foreground font-normal">(optional)</span></label>
        <div className="mt-2 flex items-center gap-4">
          {photo && (
            <div className="relative">
              <img src={photo} alt="preview" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40" />
              <button type="button" onClick={() => { setPhoto(undefined); if (fileRef.current) fileRef.current.value = ""; }} className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-white flex items-center justify-center">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          <label className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium cursor-pointer hover:shadow-glow transition-shadow">
            <Upload className="h-4 w-4" />
            {photo ? "Change photo" : "Upload photo"}
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          </label>
        </div>
      </div>
      <button type="submit" className="w-full rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-deep transition-shadow">
        Submit Review
      </button>
    </form>
  );
}

function ReviewsPage() {
  const all = useReviews();
  const [query, setQuery] = useState("");
  const [starFilter, setStarFilter] = useState<number | "all">("all");
  const [sort, setSort] = useState<"latest" | "highest">("latest");
  const [visible, setVisible] = useState(6);

  const stats = useMemo(() => {
    const avg = all.length ? all.reduce((s, t) => s + t.rating, 0) / all.length : 0;
    return { avg: avg.toFixed(1), total: all.length };
  }, [all]);

  const filtered = useMemo(() => {
    let list = [...all];
    if (starFilter !== "all") list = list.filter((r) => r.rating === starFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((r) => r.name.toLowerCase().includes(q) || r.company.toLowerCase().includes(q) || r.text.toLowerCase().includes(q));
    }
    list.sort((a, b) => (sort === "latest" ? b.createdAt - a.createdAt : b.rating - a.rating || b.createdAt - a.createdAt));
    return list;
  }, [all, query, starFilter, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <div className="mt-6 text-center max-w-3xl mx-auto">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Verified Client Reviews</div>
              <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold">
                Trusted by <span className="text-gradient">industry leaders</span>
              </h1>
              <p className="mt-4 text-muted-foreground">Real feedback from developers, builders and infrastructure partners we've worked with since 2019.</p>
              <div className="mt-8 inline-flex items-center gap-6 glass rounded-2xl px-8 py-5 shadow-glow">
                <div>
                  <div className="text-5xl font-display font-bold text-gradient">{stats.avg}</div>
                  <Stars rating={5} />
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="text-left">
                  <div className="text-3xl font-display font-bold">{stats.total}</div>
                  <div className="text-xs text-muted-foreground">Total reviews</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="container mx-auto px-4 mt-16 grid lg:grid-cols-[1fr_420px] gap-10">
          <div>
            <div className="glass rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setVisible(6); }}
                  placeholder="Search reviews…"
                  className="w-full rounded-xl bg-background/60 border border-border pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <select
                value={starFilter}
                onChange={(e) => { setStarFilter(e.target.value === "all" ? "all" : Number(e.target.value)); setVisible(6); }}
                className="rounded-xl bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="all">All ratings</option>
                {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} stars</option>)}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as "latest" | "highest")}
                className="rounded-xl bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="latest">Sort: Latest</option>
                <option value="highest">Sort: Highest rated</option>
              </select>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <AnimatePresence mode="popLayout">
                {shown.map((r) => (
                  <ReviewCard key={r.id} r={r} onDelete={(id) => { deleteReview(id); toast.success("Review removed"); }} />
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="mt-10 text-center text-muted-foreground text-sm">No reviews match your filters.</div>
            )}

            {visible < filtered.length && (
              <div className="mt-8 text-center">
                <button onClick={() => setVisible((v) => v + 6)} className="rounded-full glass px-6 py-3 text-sm font-semibold hover:shadow-glow transition-shadow">
                  Load more reviews
                </button>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-28 self-start">
            <ReviewForm onSubmitted={() => setVisible(6)} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
