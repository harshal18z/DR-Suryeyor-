import { Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const LINKEDIN_URL = "https://www.linkedin.com/in/dattaram-shelke-93a7b41b6";

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-gradient-brand text-primary-foreground">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-white/10 blur-3xl" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-white/85 text-sm leading-relaxed">
              Professional land surveying & geospatial solutions across Mumbai. Precision, accuracy and trust — engineered for every project.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="D R Surveyor on LinkedIn"
                className="group inline-flex items-center gap-2 rounded-xl glass-dark px-4 py-2.5 hover:-translate-y-0.5 transition-transform"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-xs font-semibold">Follow on LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["About","Services","Why Us","Projects","Careers","Reviews","Contact"].map((l) => (
                <li key={l}>
                  {l === "Reviews" ? (
                    <a href="/reviews" className="hover:text-white">{l}</a>
                  ) : (
                    <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-white">{l}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+91 8451866194</li>
              <li>+91 8452922949</li>
              <li>drsurveyor01@gmail.com</li>
              <li>Prabhadevi (W), Mumbai – 400028</li>
            </ul>
          </div>
        </div>
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/70">
          <span>© {new Date().getFullYear()} D R Surveyor · Land Surveyor. All rights reserved.</span>
          <span>GST · 27KMPPS6974E1Z0</span>
        </div>
      </div>
    </footer>
  );
}
