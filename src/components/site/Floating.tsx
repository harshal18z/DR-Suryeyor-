import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-brand"
    />
  );
}

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <a
        href="https://wa.me/918451866194"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-deep flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full bg-gradient-brand text-primary-foreground shadow-glow flex items-center justify-center hover:-translate-y-0.5 transition-transform"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

export function MouseGlow() {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.cssText = `position:fixed;pointer-events:none;z-index:30;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(111,183,233,0.18),transparent 60%);transform:translate(-50%,-50%);transition:transform 0.15s ease-out;mix-blend-mode:screen`;
    document.body.appendChild(el);
    const move = (e: MouseEvent) => { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); el.remove(); };
  }, []);
  return null;
}
