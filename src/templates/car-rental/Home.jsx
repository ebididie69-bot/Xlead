import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const FEATURES = [
  { t: "Seamless booking", d: "Reserve in minutes from phone or desktop." },
  { t: "Premium fleet", d: "Maintained vehicles from trusted brands." },
  { t: "Transparent rates", d: "No surprise fees at pickup." },
  { t: "Flexible return", d: "Easy extensions and clear policies." },
];

const CATEGORIES = [
  { label: "Mercedes-Benz", slot: "gallery_1" },
  { label: "Audi", slot: "gallery_2" },
  { label: "BMW", slot: "gallery_3" },
  { label: "Porsche", slot: "gallery_4" },
];

export default function Home({ content, images, colors, base, business }) {
  const accent = colors?.accent || "#2563EB";
  const img = (key, fallback) => images?.[key] || images?.[fallback];

  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0B", minHeight: "100vh" }}>
      <section className="relative min-h-[88vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-24 pt-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3">
            Premium mobility
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-2xl leading-[1.05]">
            {content?.hero_title || "Drive what you love"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}
            className="mt-4 text-white/65 max-w-md text-sm md:text-base leading-relaxed">
            {content?.hero_subtitle ||
              `Stress-free rentals with transparent rates${business ? ` from ${business}` : ""}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-8 rounded-2xl bg-white p-3 md:p-4 shadow-2xl max-w-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {["Pick-up", "Drop-off", "Date", "Time"].map((label) => (
                <div key={label} className="rounded-lg border border-black/10 px-3 py-2.5">
                  <p className="text-[10px] uppercase tracking-wide text-black/40 mb-0.5">{label}</p>
                  <p className="font-medium text-black/70">Select…</p>
                </div>
              ))}
            </div>
            <a href={`${base}/contact`} className="mt-3 w-full md:w-auto md:float-right inline-flex justify-center px-8 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: accent }}>
              Search fleet
            </a>
            <div className="clear-both" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 border-b border-black/5 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.05}>
              <p className="font-semibold text-sm mb-1">{f.t}</p>
              <p className="text-xs text-black/45 leading-relaxed">{f.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-2">Browse by brand</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Car categories</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <a href={`${base}/gallery`} className="block group rounded-2xl overflow-hidden relative aspect-[4/3] bg-neutral-100">
                  <SmartImage image={img(c.slot)} accent={accent} className="w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white font-semibold text-sm z-10">{c.label}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <SmartImage image={img("about")} accent={accent} className="w-full h-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-2">Why rent with us</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">A fleet built for every journey</h2>
            <p className="text-sm text-black/55 leading-relaxed mb-6">
              {content?.about_snippet ||
                "From weekend getaways to business travel, we keep vehicles maintained, insured, and ready when you are."}
            </p>
            <a href={`${base}/services`} className="text-sm font-semibold" style={{ color: accent }}>View services →</a>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden min-h-[42vh]">
        <div className="absolute inset-0">
          <SmartImage image={img("gallery_2")} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-md">Ready for the road?</h2>
            <p className="text-white/55 text-sm mt-2 max-w-sm">Seasonal offers on select models — book early for best rates.</p>
          </div>
          <a href={`${base}/contact`} className="inline-flex self-start px-8 py-3 rounded-lg text-sm font-semibold text-white shrink-0" style={{ background: accent }}>
            Book now
          </a>
        </div>
      </section>
    </div>
  );
}
