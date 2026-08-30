import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const BRANDS = ["Mercedes-Benz", "Audi", "BMW", "Porsche"];
const CARS = [
  { name: "BMW i4", price: "$150/day" },
  { name: "Audi A7", price: "$130/day" },
  { name: "Mercedes-Benz GLE", price: "$140/day" },
  { name: "Porsche 911", price: "$180/day" },
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#2563EB";
  const bg = colors.primary || "#0A0A0B";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0B", minHeight: "100vh" }}>
      <section className="relative overflow-hidden" style={{ background: bg, color: "#fff" }}>
        <div className="absolute inset-0 opacity-90">
          <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-xl">
            {content?.hero_title || "Premium car rental"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-white/60 max-w-md text-sm md:text-base">
            {content?.hero_subtitle || "Stress-free rentals with simple booking, transparent rates, and a fleet you will love to drive."}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 rounded-2xl bg-white text-[#0A0A0B] p-3 md:p-4 shadow-xl max-w-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              {["Pick-up address", "Drop-off address", "Pick-up date", "Pick-up time"].map((label) => (
                <div key={label} className="rounded-lg border border-black/10 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wide text-black/40 mb-0.5">{label}</p>
                  <p className="font-medium text-black/70">Select…</p>
                </div>
              ))}
            </div>
            <a href={`${base}/contact`} className="mt-3 w-full md:w-auto md:float-right inline-flex justify-center px-8 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: accent }}>Search</a>
            <div className="clear-both" />
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Car Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BRANDS.map((b, i) => (
              <Reveal key={b} delay={i * 0.05}>
                <div className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-neutral-100">
                  <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Trend vehicles</h2>
            <a href={`${base}/gallery`} className="text-sm font-medium" style={{ color: accent }}>View all →</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CARS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-black/5 p-4 shadow-sm h-full flex flex-col">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-neutral-100">
                    <SmartImage image={gallery[i] || images?.hero} accent={accent} className="w-full h-full" />
                  </div>
                  <p className="font-semibold text-sm">{c.name}</p>
                  <p className="text-xs text-black/45 mt-1 flex-1">{c.price}</p>
                  <a href={`${base}/contact`} className="mt-3 text-center text-xs font-semibold py-2 rounded-lg border border-black/10">Book Now</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-black/5">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {["Seamless booking", "Premium fleet", "Flexible cancel", "No hidden fees"].map((t) => (
            <p key={t} className="font-medium text-black/70">{t}</p>
          ))}
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: bg, color: "#fff" }}>
        <div className="absolute inset-0 opacity-50">
          <SmartImage image={gallery[0] || images?.hero} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-md">Book your next ride with a big discount</h2>
            <p className="text-white/55 text-sm mt-2">Limited seasonal offers on select premium models.</p>
          </div>
          <div className="rounded-2xl px-6 py-5 text-center shrink-0" style={{ background: accent }}>
            <p className="text-3xl font-bold">50%</p>
            <p className="text-xs opacity-90">On selected cars</p>
            <a href={`${base}/contact`} className="mt-3 inline-block text-xs font-bold underline">Book Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
