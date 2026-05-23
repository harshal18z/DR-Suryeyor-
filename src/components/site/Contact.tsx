import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { Reveal } from "./Reveal";

const emails = ["drsurveyor01@gmail.com", "drsurveyor.office@gmail.com",];
const phones = ["8451866194", "8452922949"];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (v: string) => {
    navigator.clipboard?.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Let's <span className="text-gradient">work together</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Reach out for consultations, quotes or partnerships.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 h-full">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display font-semibold">Office Address</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                1403, Bldg No. 3, E-Wing, Swastik Industrial Estate, Ambedkar Nagar, Nr. Kamgar Stadium, Prabhadevi (W), Mumbai – 400028
              </p>
              <h3 className="mt-5 font-display font-semibold">Registered Address</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Panchshil seva sangham pipe line, Pratiksha Nagar, Sion (W), Mumbai – 400022
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold">
                GST: 27KMPPS6974E1Z0
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 h-full">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display font-semibold">Call us</h3>
              <ul className="mt-3 space-y-2">
                {phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:+91${p}`} className="flex items-center justify-between glass rounded-xl px-3 py-2.5 hover:shadow-glow transition-all group">
                      <span className="text-sm font-medium">+91 {p}</span>
                      <span className="text-xs text-primary font-semibold group-hover:translate-x-0.5 transition-transform">Call →</span>
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-display font-semibold">Email us</h3>
              <ul className="mt-3 space-y-2">
                {emails.map((e) => (
                  <li key={e} className="flex items-center justify-between glass rounded-xl px-3 py-2.5">
                    <a href={`mailto:${e}`} className="text-sm font-medium truncate hover:text-primary">{e}</a>
                    <button onClick={() => copy(e)} className="ml-2 text-muted-foreground hover:text-primary" aria-label="Copy email">
                      {copied === e ? <Check className="h-4 w-4 text-[color:var(--green-brand)]" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you soon."); }}
              className="glass rounded-2xl p-6 h-full flex flex-col gap-3"
            >
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="font-display font-semibold">Send a message</h3>
              <input required aria-label="Your name" placeholder="Your name" className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" aria-label="Email address" placeholder="Email address" className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input aria-label="Phone number (optional)" placeholder="Phone (optional)" className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <textarea required aria-label="Project details" rows={4} placeholder="Tell us about your project…" className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:-translate-y-0.5 transition-transform">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 rounded-3xl overflow-hidden ring-1 ring-border shadow-deep">
            <iframe
              title="Office map"
              src="https://www.google.com/maps?q=Prabhadevi+Mumbai&output=embed"
              className="w-full h-[380px] border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
