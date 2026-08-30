import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const TYPES = ["Weddings", "Gala Dinners", "Birthdays", "Private Parties", "Anniversaries"];
const PACKAGES = [
  { name: "Essential", price: "$7,500", items: ["Event planning", "Venue sourcing", "Day-of coordination"], popular: false },
  { name: "Premium", price: "$15,000", items: ["Full planning", "Design & styling", "Premium vendors", "On-site management"], popular: true },
  { name: "Signature", price: "$30,000", items: ["Complete production", "Luxury design", "Entertainment", "VIP experience"], popular: false },
];
const STEPS = [
  { title: "Discover", desc: "Share your vision and goals" },
  { title: "Plan", desc: "We craft a tailored plan" },
  { title: "Organize", desc: "Vendors, logistics, timeline" },
  { title: "Execute", desc: "Flawless day-of delivery" },
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#C4A35A";
  const bg = colors.primary || "#0C0C0C";
  const ivory = colors.secondary || "#F7F4EF";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: ivory, color: "#1A1A1A", minHeight: "100vh" }}>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full py-24 grid lg:grid-cols-[1.2fr_0.85fr] gap-10 items-center">
          <div className="text-white">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase text-white/50 mb-4">
              We design
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08]">
              {content?.hero_title || (
                <>
                  Extraordinary<br />
                  <span style={{ color: accent }}>Events</span>
                </>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-white/65 max-w-md text-sm md:text-base">
              {content?.hero_subtitle || "Luxury planning. Flawless execution. Unforgettable moments that leave a lasting impression."}
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`${base}/services`} className="px-6 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#0C0C0C" }}>Our Services</a>
              <a href={`${base}/gallery`} className="px-6 py-3 rounded-full text-sm font-medium border border-white/30">View gallery</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-white text-[#1A1A1A] p-6 shadow-2xl">
            <p className="font-semibold text-sm mb-4">Plan your celebration</p>
            <div className="space-y-3 text-xs">
              {["Your Name", "Email Address", "Event Type", "Event Date"].map((label) => (
                <div key={label} className="rounded-lg border border-black/10 px-3 py-2.5 text-black/45">{label}</div>
              ))}
            </div>
            <a href={`${base}/contact`} className="mt-4 block text-center py-3 rounded-lg text-sm font-semibold" style={{ background: accent, color: "#0C0C0C" }}>Send Request</a>
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-b border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-sm">
          {[
            ["10+", "Years"],
            ["750+", "Events"],
            ["50K+", "Guests"],
            ["25+", "Cities"],
            ["98%", "Satisfaction"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-xl font-semibold" style={{ color: accent }}>{v}</p>
              <p className="text-xs text-black/45">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Every Celebration is Unique</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {TYPES.map((t, i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden relative aspect-[3/4]">
                  <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-semibold text-center mb-10">Packages Tailored to Your Vision</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className="rounded-2xl border p-6 h-full"
                  style={p.popular ? { borderColor: accent, borderWidth: 2, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" } : { borderColor: "rgba(0,0,0,0.1)" }}
                >
                  {p.popular && (
                    <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: accent }}>Most popular</p>
                  )}
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-2xl font-bold mt-1 mb-4">{p.price}</p>
                  <ul className="space-y-2 text-sm text-black/55 mb-6">
                    {p.items.map((it) => (
                      <li key={it}>✓ {it}</li>
                    ))}
                  </ul>
                  <a
                    href={`${base}/contact`}
                    className="block text-center py-2.5 rounded-full text-sm font-semibold"
                    style={
                      p.popular
                        ? { background: accent, color: "#0C0C0C" }
                        : { background: "transparent", color: "#1A1A1A", border: "1px solid rgba(0,0,0,0.15)" }
                    }
                  >
                    Get started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-center mb-10">From Concept to Celebration</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="text-center">
                  <p className="text-xs font-bold mb-2" style={{ color: accent }}>0{i + 1}</p>
                  <p className="font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-black/50">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: bg, color: "#F7F4EF" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-semibold mb-3">Let's Create Something Beautiful</h2>
          <p className="text-white/55 text-sm mb-6">Ready to start planning your next event?</p>
          <a href={`${base}/contact`} className="inline-flex px-8 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#0C0C0C" }}>
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
