import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const FEATURES = [
  { t: "Seamless booking", d: "Reserve in minutes on any device." },
  { t: "Premium fleet", d: "Serviced vehicles from top brands." },
  { t: "Transparent rates", d: "No surprise fees at the counter." },
  { t: "Flexible return", d: "Clear policies and easy extensions." },
];

const CATEGORIES = [
  { label: "Mercedes-Benz", slot: "gallery_1" },
  { label: "Audi", slot: "gallery_2" },
  { label: "BMW", slot: "gallery_3" },
  { label: "Porsche", slot: "gallery_4" },
];

export default function Home({ content, images, colors, base, business }) {
  const accent = colors?.accent || "#2563EB";
  const img = (key) => images?.[key];

  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0B", minHeight: "100vh" }}>
      <section className="relative min-h-[90vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
          <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
        </motion.div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 md:pb-28 pt-28">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-white/50 mb-4">Premium mobility</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-2xl leading-[1.02]">
            {content?.hero_title || (
              <>
                Drive what{" "}
                <span style={{ color: accent }}>you love</span>
              </>
            )}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
            className="mt-5 text-white/65 max-w-md text-sm md:text-base leading-relaxed">
            {content?.hero_subtitle || `Stress-free rentals with transparent rates${business ? ` from ${business}` : ""}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
            className="mt-8 rounded-2xl bg-white/95 backdrop-blur-sm p-3 md:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-3xl border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {["Pick-up", "Drop-off", "Date", "Time"].map((label) => (
                <div key={label} className="rounded-xl border border-black/8 px-3 py-2.5 hover:border-black/20 transition-colors">
                  <p className="text-[10px] uppercase tracking-wide text-black/40 mb-0.5">{label}</p>
                  <p className="font-medium text-black/70">Select…</p>
                </div>
              ))}
            </div>
            <motion.a href={`${base}/contact`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="mt-3 w-full md:w-auto md:float-right inline-flex justify-center px-8 py-3 rounded-xl text-sm font-semibold text-white shadow-lg"
              style={{ background: accent, boxShadow: `0 10px 30px ${accent}55` }}>Search fleet</motion.a>
            <div className="clear-both" />
          </motion.div>
        </div>
      </section>
      <section className="py-12 md:py-14 border-b border-black/5 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 0.06}>
              <div className="group">
                <div className="w-8 h-0.5 mb-3 transition-all duration-300 group-hover:w-12" style={{ background: accent }} />
                <p className="font-semibold text-sm mb-1.5 tracking-tight">{f.t}</p>
                <p className="text-xs text-black/45 leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-black/35 mb-2">Browse by brand</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">Car categories</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <motion.a href={`${base}/gallery`} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="block group rounded-2xl overflow-hidden relative aspect-[4/3] bg-neutral-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <SmartImage image={img(c.slot)} accent={accent} className="w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <p className="text-white font-semibold text-sm tracking-wide">{c.label}</p>
                    <p className="text-white/50 text-[11px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">View fleet →</p>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg"><SmartImage image={img("about")} accent={accent} className="w-full h-full" /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-black/35 mb-3">Why rent with us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight leading-tight">A fleet built for every journey</h2>
            <p className="text-sm md:text-base text-black/55 leading-relaxed mb-8">{content?.about_snippet || "From weekend getaways to business travel, vehicles are maintained, insured, and ready when you are."}</p>
            <motion.a href={`${base}/services`} whileHover={{ x: 4 }} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: accent }}>View services <span aria-hidden>→</span></motion.a>
          </Reveal>
        </div>
      </section>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={img("gallery_2")} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 text-white">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-3">Limited offers</p>
            <h2 className="text-3xl md:text-5xl font-bold max-w-lg tracking-tight leading-tight">Ready for the road?</h2>
            <p className="text-white/55 text-sm mt-3 max-w-sm leading-relaxed">Seasonal rates on select models — book early for the best availability.</p>
          </div>
          <motion.a href={`${base}/contact`} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex self-start px-9 py-3.5 rounded-xl text-sm font-semibold text-white shrink-0"
            style={{ background: accent, boxShadow: `0 12px 40px ${accent}66` }}>Book now</motion.a>
        </div>
      </section>
    </div>
  );
}
