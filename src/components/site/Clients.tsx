import { useMemo, useState } from "react";
import { Search, ArrowUpDown, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const CLIENTS = [
  "A B INFRA",
  "BLUE MEX ENTERPRISES",
  "EMS LIMITED",
  "JIJAU CONSTRUCTIONS ROAD BUILDER PVT LTD",
  "ARKADE DEVLOPER LTD",
  "INTERNATIONAL CONSTRUCTION CO",
  "JAY AMBE CONSTRUCTION",
  "JAIRAJ HAPPY HOMES",
  "MAKEWELL CONSTRUCTION",
  "Raghavendra Acharya & Others",
  "RAMKY INFRASTRUCTURE LIMITED",
  "SIMPLEX REALTY LTD",
  "HAPPY HOME LIFESTYLES LLP",
  "ILA KUNJ",
  "Lipi Enterprises",
  "BLACKSTONE INFRASTRUCTURE",
  "EXTRACO INDUSTRIES INDIA PVT LTD",
  "JESS CONSTRUCTION PRIVATE LIMITED",
  "K K ENTERPRISE",
  "NAVDURGA INFRAVENTURES LIMITED",
  "Om Vishwakarma Construction LLP",
  "RELCON KRISHA REALTY LLP",
  "SAKSHI CONSTRUCTION",
  "SATYAM CONSTRUCTION",
  "SHIVRUDDHI DREAMS LLP",
  "SHREE CONTRACTOR",
  "SHREE RAM CONSTRUCTION",
  "TRINITY INFRA",
  "VASUNDARA LIFESTYLE PVT LTD",
  "HAPPY HOME LANDMARKS LLP",
  "HUM DEVELOPERS PVT LTD",
  "KNIDHAN",
  "AJMERA REALTY & INFRA INDIA LIMITED",
  "ASHWAMEDH ENTERPRISE & TNA GROUP",
  "INFIBUILT CONSTRUCTIONS",
  "KRISHA INFRASOL PRIVATE LIMITED",
  "NATIONAL HAPPY HOMES",
  "NAVROZE ENTERPRISES",
  "NEW HOMES CONSTRUCTION",
  "PANAMA PETROCHEM LTD",
  "SJ ASSOCIATES",
  "A & A Developers",
  "SKYWAY RMC PLANTS PVT LTD",
  "UNNATI ENTERPRISE",
  "VITTHOBA MAULI INFRAPROJECT PVT LTD",
  "D.G.LAND DEVELOPERS PVT LTD",
  "BLUE IVY GROUP",
  "HAPPY HOMES LIFESPACES LLP",
  "SUKHAN ENTERPRISE",
  "M S MISTRY AND CONSTRUCTION INDIA PVT LTD",
  "TNA READYMIX PVT LTD",
  "D.G.S. Land Developers (India) Private Limited",
  "D.G.S. KIARA REALITY PVT LTD",
];

function initials(name: string) {
  const cleaned = name.replace(/[^A-Za-z &]/g, " ").trim();
  const words = cleaned.split(/\s+/).filter((w) => !/^(PVT|LTD|LIMITED|LLP|INDIA|CO|COMPANY|AND|&|THE)$/i.test(w));
  const pick = (words.length ? words : cleaned.split(/\s+/)).slice(0, 2);
  return pick.map((w) => w[0]?.toUpperCase()).join("") || "C";
}

export function Clients() {
  const [query, setQuery] = useState("");
  const [sorted, setSorted] = useState(false);

  const list = useMemo(() => {
    let arr = [...new Set(CLIENTS)];
    if (sorted) arr = arr.sort((a, b) => a.localeCompare(b));
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter((c) => c.toLowerCase().includes(q));
    }
    return arr;
  }, [query, sorted]);

  return (
    <section id="clients" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Clients</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Trusted by <span className="text-gradient">{CLIENTS.length}+ leading</span> infrastructure brands
            </h2>
            <p className="mt-4 text-muted-foreground">
              From premier developers to large infrastructure firms, our clients rely on D R Surveyor for precision and consistency.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clients..."
                aria-label="Search clients"
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <button
              onClick={() => setSorted((v) => !v)}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                sorted ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass hover:shadow-glow"
              }`}
            >
              <ArrowUpDown className="h-4 w-4" />
              {sorted ? "Sorted A–Z" : "Sort A–Z"}
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {list.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 12) * 0.03, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-2xl p-4 h-32 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-glow transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-primary/15 via-transparent to-accent/15" />
              <span className="relative h-12 w-12 rounded-xl bg-gradient-brand text-primary-foreground inline-flex items-center justify-center font-display font-bold shadow-glow">
                {initials(name)}
              </span>
              <span className="relative mt-2 text-[11px] font-semibold leading-tight line-clamp-2 text-foreground/85">
                {name}
              </span>
            </motion.div>
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center text-sm text-muted-foreground py-12 inline-flex flex-col items-center gap-2">
              <Building2 className="h-6 w-6 opacity-40" />
              No clients match “{query}”.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
