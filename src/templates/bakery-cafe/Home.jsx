import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const MENU_PREVIEW = [
  { name: "Signature Latte", desc: "Espresso, steamed milk, house syrup", price: "From $4.50", slot: "gallery_1" },
  { name: "Artisan Pastries", desc: "Baked fresh every morning", price: "From $3.00", slot: "gallery_2" },
  { name: "Seasonal Specials", desc: "Limited blends and treats", price: "Ask us", slot: "gallery_3" },
];

export default function Home({ content, images, colors, base, business }) {
  const accent = colors?.accent || "#C4A574";
  const cream = colors?.primary || "#FBF7F0";
  const brown = "#2A1A0E";
  const img = (key) => images?.[key];

  return (
    <div style={{ background: cream, color: brown, minHeight: "100vh" }}>
      <section className="relative overflow-hidden" style={{ background: brown }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[82vh] md:min-h-[92vh] px-5 sm:px-8 py-20 md:py-24">
          <div className="relative z-10 text-[#FBF7F0] order-2 md:order-1">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/40 mb-5">Crafted daily</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              {content?.hero_title || (
                <>
                  Brewed<br />
                  <span className="italic font-serif" style={{ color: accent }}>for you.</span>
                </>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14 }} className="mt-6 text-white/55 max-w-sm text-sm md:text-base leading-relaxed">
              {content?.hero_subtitle || `Exceptional coffee and a warm room${business ? ` at ${business}` : ""} — every day.`}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-9 flex flex-wrap gap-3">
              <motion.a href={`${base}/services`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg"
                style={{ background: accent, color: "#1A1008", boxShadow: `0 12px 32px ${accent}44` }}>Explore menu →</motion.a>
              <a href={`${base}/contact`} className="inline-flex px-7 py-3.5 rounded-full text-sm font-medium border border-white/20 text-white/85 hover:bg-white/5 transition-colors">Visit us</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 md:order-2 aspect-square max-w-md mx-auto w-full">
            <div className="absolute -inset-3 rounded-[2.25rem] opacity-40 blur-2xl" style={{ background: accent }} />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square ring-1 ring-white/10">
              <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${cream}, transparent)` }} />
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-[11px] font-semibold tracking-[0.3em] uppercase mb-2 opacity-40">Favorites</p>
            <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 tracking-tight">What we are known for</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {MENU_PREVIEW.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="rounded-2xl overflow-hidden bg-white border border-black/[0.04] shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <SmartImage image={img(m.slot)} accent={accent} className="w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <p className="font-semibold text-sm tracking-tight">{m.name}</p>
                    <p className="text-xs opacity-45 mt-1.5 flex-1 leading-relaxed">{m.desc}</p>
                    <p className="mt-4 text-sm font-bold" style={{ color: accent }}>{m.price}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#FFFCF7" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="rounded-[1.75rem] overflow-hidden aspect-[4/3] shadow-md">
              <SmartImage image={img("about")} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3 opacity-40">Our story</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 tracking-tight leading-tight">More than coffee.<br /><span className="italic font-serif opacity-80">A place to belong.</span></h2>
            <p className="text-sm opacity-55 leading-relaxed mb-7">{content?.about_snippet || "We source carefully, bake with intention, and shape a space for connection."}</p>
            <ul className="space-y-3 text-sm mb-8">
              {["Premium beans", "Fresh pastries daily", "Welcoming atmosphere"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  <span className="opacity-75">{t}</span>
                </li>
              ))}
            </ul>
            <motion.a href={`${base}/about`} whileHover={{ x: 4 }} className="inline-flex text-sm font-semibold" style={{ color: accent }}>Learn more →</motion.a>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal><h2 className="text-center text-xl md:text-2xl font-semibold mb-8 tracking-tight">The space</h2></Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden aspect-[21/9] max-h-[340px] shadow-md">
              <SmartImage image={img("gallery_4")} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: brown, color: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight">Come for the scent, stay for the taste</h2>
            <p className="text-white/45 text-sm mb-8 leading-relaxed">Order ahead or find a seat — we will take care of the rest.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03 }} className="px-7 py-3.5 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>Order / visit</motion.a>
              <a href={`${base}/gallery`} className="px-7 py-3.5 rounded-full text-sm font-medium border border-white/20 hover:bg-white/5 transition-colors">See gallery</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
