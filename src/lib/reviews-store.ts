import { useEffect, useState, useCallback } from "react";

export type Review = {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  photo?: string; // data URL
  createdAt: number;
  seed?: boolean; // true = built-in default review
  owned?: boolean; // true = submitted by this browser session
};

const KEY = "drs_reviews_v1";
const OWNED_KEY = "drs_reviews_owned_v1";

const DEFAULTS: Review[] = [
  { id: "seed-1", name: "Rajeev Sharma", company: "Arkade Developer Pvt. Ltd.", rating: 5, text: "D R Surveyor has been our go-to survey partner for years. Topographical mapping and construction layouts are always precise and on time.", createdAt: Date.parse("2025-08-12"), seed: true },
  { id: "seed-2", name: "Anita Deshmukh", company: "Jijau Constructions Road Builder", rating: 5, text: "Exceptional professionalism. Handled a complex road alignment survey with great accuracy and strong technical reporting.", createdAt: Date.parse("2025-09-04"), seed: true },
  { id: "seed-3", name: "Vikram Patil", company: "Ramky Infrastructure Limited", rating: 5, text: "Reliable, accurate and responsive. Consistently delivers high-quality deliverables for our infrastructure projects across Mumbai.", createdAt: Date.parse("2025-10-21"), seed: true },
  { id: "seed-4", name: "Sneha Iyer", company: "Ajmera Realty & Infra India Limited", rating: 5, text: "Their GIS and drone survey work has saved us weeks of project time. Highly recommended for any large-scale development.", createdAt: Date.parse("2025-11-15"), seed: true },
  { id: "seed-5", name: "Mahesh Kulkarni", company: "Simplex Realty Ltd", rating: 4, text: "A trusted survey partner with strong field experience and excellent documentation standards.", createdAt: Date.parse("2026-01-09"), seed: true },
  { id: "seed-6", name: "Priya Nair", company: "Happy Home Lifestyles LLP", rating: 5, text: "Professional team, modern equipment and a clear focus on quality. We continue to engage D R Surveyor for all of our new projects.", createdAt: Date.parse("2026-02-18"), seed: true },
  { id: "seed-7", name: "Sandeep Joshi", company: "Panama Petrochem Ltd", rating: 5, text: "Industrial site surveys were flawlessly executed. Detailed, accurate and on schedule.", createdAt: Date.parse("2026-03-02"), seed: true },
  { id: "seed-8", name: "Karan Mehta", company: "Blackstone Infrastructure", rating: 5, text: "From boundary survey to as-built drawings, the entire workflow was smooth. A genuinely well-established survey company.", createdAt: Date.parse("2026-04-14"), seed: true },
];

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

export function loadReviews(): Review[] {
  if (typeof window === "undefined") return DEFAULTS;
  const user = safeParse<Review[]>(localStorage.getItem(KEY), []);
  const ownedIds = new Set(safeParse<string[]>(localStorage.getItem(OWNED_KEY), []));
  const merged = [...DEFAULTS, ...user].map((r) => ({ ...r, owned: ownedIds.has(r.id) }));
  return merged.sort((a, b) => b.createdAt - a.createdAt);
}

export function saveReview(input: Omit<Review, "id" | "createdAt" | "seed" | "owned">) {
  const id = `r_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  const review: Review = { ...input, id, createdAt: Date.now() };
  const existing = safeParse<Review[]>(localStorage.getItem(KEY), []);
  localStorage.setItem(KEY, JSON.stringify([...existing, review]));
  const owned = safeParse<string[]>(localStorage.getItem(OWNED_KEY), []);
  localStorage.setItem(OWNED_KEY, JSON.stringify([...owned, id]));
  window.dispatchEvent(new Event("drs_reviews_changed"));
  return review;
}

export function deleteReview(id: string) {
  const existing = safeParse<Review[]>(localStorage.getItem(KEY), []);
  localStorage.setItem(KEY, JSON.stringify(existing.filter((r) => r.id !== id)));
  const owned = safeParse<string[]>(localStorage.getItem(OWNED_KEY), []);
  localStorage.setItem(OWNED_KEY, JSON.stringify(owned.filter((x) => x !== id)));
  window.dispatchEvent(new Event("drs_reviews_changed"));
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>(() => (typeof window === "undefined" ? DEFAULTS : loadReviews()));
  const refresh = useCallback(() => setReviews(loadReviews()), []);
  useEffect(() => {
    refresh();
    const onChange = () => refresh();
    window.addEventListener("drs_reviews_changed", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("drs_reviews_changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);
  return reviews;
}
