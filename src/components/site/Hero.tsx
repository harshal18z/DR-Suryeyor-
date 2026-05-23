import { motion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import hero from "@/assets/hero-survey.jpg";
import logo from "@/assets/logo.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-hero">
      {/* grid backdrop */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {/* glow orbs */}
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[color:var(--sky-brand)] opacity-30 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-[color:var(--green-brand)] opacity-25 blur-3xl animate-float" />

      {/* floating particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/50"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="container mx-auto px-4 relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Geospatial · GIS · Engineering Surveying
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            <span className="text-gradient">D R Surveyor</span>{" "}
            <span className="text-foreground">— Precision Land Surveying & Geospatial Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Professional Land Surveying & Geospatial Solutions in Mumbai — engineered with modern instruments and decades of expertise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-deep transition-all hover:-translate-y-0.5"
            >
              Get Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Explore Services
            </a>
          </motion.div>

          {/* mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { v: "500+", l: "Projects" },
              { v: "99.9%", l: "Accuracy" },
              { v: "15+", l: "Years" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass p-4 text-center">
                <div className="font-display font-bold text-2xl text-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-deep ring-1 ring-border">
            <img src={hero} alt="Land surveyor at work" className="h-full w-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--deep-brand)]/30 via-transparent to-[color:var(--sky-brand)]/20" />
          </div>

          {/* floating compass */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 h-24 w-24 rounded-full glass flex items-center justify-center shadow-glow"
          >
            <Compass className="h-12 w-12 text-primary" />
          </motion.div>

          {/* floating logo card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-3 flex items-center gap-3 shadow-glow"
          >
            <span className="h-12 w-12 rounded-xl overflow-hidden bg-white ring-1 ring-border">
              <img src={logo} alt="" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Certified</div>
              <div className="text-sm font-semibold">Licensed Surveyors</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
