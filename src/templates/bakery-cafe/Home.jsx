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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center min-h-[80vh] md:min-h-[90vh] px-5 sm:px-8 py-20">
          <div className="relative z-10 text-[#FBF7F0]">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.35em] uppercase text-white/45 mb-4">
              Crafted daily
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              {content?.hero_title || (
                <>
                  Brewed<br />
                  <span style={{ color: accent }}>for you.</span>
                </>
              )}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-5 text-white/60 max-w-sm text-sm md:text-base leading-relaxed">
              {content?.hero_subtitle ||
                `Exceptional coffee, warm atmosphere${business ? ` at ${business}` : ""} — every single day.`}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-8 flex flex-wrap gap-3">
              <a href={`${base}/services`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>
                Explore menu →
              </a>
              <a href={`${base}/contact`} className="inline-flex px-6 py-3 rounded-full text-sm font-medium border border-white/25 text-white/90">
                Visit us
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md mx-auto w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: `linear-gradient(to top, ${cream}, transparent)` }} />
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-2 opacity-45">Favorites</p>
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">What we are known for</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {MENU_PREVIEW.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm h-full flex flex-col">
                  <div className="aspect-[4/3] relative">
                    <SmartImage image={img(m.slot)} accent={accent} className="w-full h-full absolute inset-0" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="font-semibold text-sm">{m.name}</p>
                    <p className="text-xs opacity-50 mt-1 flex-1 leading-relaxed">{m.desc}</p>
                    <p className="mt-3 text-sm font-bold" style={{ color: accent }}>{m.price}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "#FFFCF8" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <SmartImage image={img("about")} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-45">Our story</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">More than coffee.<br />It&apos;s a place to belong.</h2>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              {content?.about_snippet ||
                "We source carefully, bake with intention, and design a space for connection — from the first pour to the last crumb."}
            </p>
            <ul className="space-y-2 text-sm mb-6">
              {["Premium beans", "Fresh pastries", "Welcoming atmosphere"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  {t}
                </li>
              ))}
            </ul>
            <a href={`${base}/about`} className="text-sm font-semibold" style={{ color: accent }}>Learn more →</a>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">The space</h2>
          </Reveal>
          <div className="rounded-2xl overflow-hidden aspect-[21/9] max-h-[320px]">
            <SmartImage image={img("gallery_4")} accent={accent} className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: brown, color: "#FBF7F0" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Come for the scent, stay for the taste</h2>
          <p className="text-white/50 text-sm mb-6">Order ahead or find a seat — we will take care of the rest.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`${base}/contact`} className="px-6 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1008" }}>Order / visit</a>
            <a href={`${base}/gallery`} className="px-6 py-3 rounded-full text-sm font-medium border border-white/25">See gallery</a>
          </div>
        </div>
      </section>
    </div>
  );
}
