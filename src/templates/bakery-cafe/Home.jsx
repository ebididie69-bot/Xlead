import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const CATEGORIES = [
  { title: "Iced Favorites", hint: "View drinks" },
  { title: "Hot Coffee", hint: "View drinks" },
  { title: "Specials", hint: "View drinks" },
];

const DRINKS = [
  { name: "Matcha Latte", desc: "Smooth matcha with steamed milk", price: "$4.75" },
  { name: "Caramel Macchiato", desc: "Espresso with vanilla & caramel", price: "$4.95" },
  { name: "Mocha Bliss", desc: "Rich chocolate with bold espresso", price: "$5.25" },
  { name: "Vanilla Cold Brew", desc: "Smooth cold brew with vanilla", price: "$4.50" },
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#C4A574";
  const bg = colors.primary || "#FBF7F0";
  const brown = "#3D2914";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: bg, color: brown, minHeight: "100vh" }}>
      <section className="relative overflow-hidden" style={{ background: "#2A1A0E" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center min-h-[78vh] md:min-h-[88vh] px-5 sm:px-8 py-20">
          <div className="relative z-10 text-[#FBF7F0]">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase text-white/45 mb-4">
              Crafted for moments
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              {content?.hero_title || (
                <>
                  BREWED<br />
                  <span style={{ color: accent }}>FOR YOU.</span>
                </>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-5 text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
              {content?.hero_subtitle || "Exceptional coffee, warm atmosphere, and good vibes — every single day."}
            </motion.p>
            <motion.a href={`${base}/services`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>
              Explore Menu →
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative aspect-square max-w-md mx-auto w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FBF7F0] to-transparent" />
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Top categories</p>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">Discover Our Most Loved Creations</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden relative aspect-[4/3] group">
                  <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold tracking-wide text-sm">{c.title}</p>
                    <p className="text-xs text-white/60 mt-0.5">{c.hint}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ background: "#FFFCF8" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Signature drinks</p>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">Handcrafted Blends, Made Just for You</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {DRINKS.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-black/5 p-4 text-center h-full shadow-sm">
                  <div className="aspect-square rounded-xl overflow-hidden mb-3 mx-auto max-w-[140px]">
                    <SmartImage image={gallery[i + 1] || images?.hero} accent={accent} className="w-full h-full" />
                  </div>
                  <p className="font-semibold text-sm">{d.name}</p>
                  <p className="text-[11px] opacity-50 mt-1 leading-snug">{d.desc}</p>
                  <p className="mt-2 text-sm font-bold" style={{ color: accent }}>{d.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <SmartImage image={gallery[0] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Our story</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">More Than Coffee.<br />It&apos;s an Experience.</h2>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              {content?.about_snippet || "We believe coffee brings people together. Our beans are carefully sourced, our recipes crafted with care, and our space designed for connection."}
            </p>
            <div className="space-y-3 text-sm">
              {["Premium quality beans", "Cozy & relaxing atmosphere", "Sustainably sourced"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold mb-8">Our Café Atmosphere</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square">
                <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#2A1A0E", color: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Craving Great Coffee?</h2>
          <p className="text-white/55 text-sm mb-6">Order ahead or visit us for the perfect café experience.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`${base}/contact`} className="px-6 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>Order Online</a>
            <a href={`${base}/contact`} className="px-6 py-3 rounded-full text-sm font-medium border border-white/25">Book a Table</a>
          </div>
        </div>
      </section>
    </div>
  );
}
