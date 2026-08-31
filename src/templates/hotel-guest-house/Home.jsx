import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const PERKS = [
  { t: "Prime location", d: "Easy access to the city and landmarks." },
  { t: "Thoughtful rooms", d: "Comfort-first design and quiet rest." },
  { t: "Attentive staff", d: "Warm help from arrival to departure." },
  { t: "Fair rates", d: "Clear pricing with seasonal offers." },
];

const AMENITIES = ["High-speed WiFi", "Parking", "Restaurant", "Spa", "Fitness", "Pool"];

export default function Home({ content, images, colors, base, business }) {
  const accent = colors?.accent || "#C4A574";
  const bg = colors?.primary || "#0F0F10";
  const ivory = colors?.secondary || "#F8F5F0";
  const img = (key) => images?.[key];

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" initial={{ scale: 1.06 }} animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}>
          <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        </motion.div>
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-32">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 }}
            className="flex justify-center gap-1 mb-5 text-sm" style={{ color: accent }}>★★★★★</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08]">
            {content?.hero_title || "Luxury stays in the heart of the city"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
            className="mt-5 text-white/60 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {content?.hero_subtitle || `Modern rooms and calm design${business ? ` — hospitality from ${business}` : " with genuine hospitality"}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mt-10 flex flex-wrap justify-center gap-3">
            <motion.a href={`${base}/contact`} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}
              className="inline-flex px-9 py-3.5 rounded-full text-sm font-semibold tracking-wide"
              style={{ background: accent, color: "#1A1410", boxShadow: `0 14px 40px ${accent}44` }}>Reserve a room</motion.a>
            <a href={`${base}/gallery`} className="inline-flex px-9 py-3.5 rounded-full text-sm font-medium border border-white/30 text-white/90 hover:bg-white/8 transition-colors">Explore →</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</motion.div>
      </section>

      <section className="py-14 md:py-16" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <div className="text-center sm:text-left group">
                <div className="w-10 h-10 rounded-full mx-auto sm:mx-0 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: `${accent}22` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                </div>
                <h3 className="font-semibold text-sm mb-1.5 tracking-tight">{p.t}</h3>
                <p className="text-xs text-black/45 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <Reveal><div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-md"><SmartImage image={img("about")} accent={accent} className="w-full h-full" /></div></Reveal>
            <Reveal delay={0.1}><div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8 shadow-md"><SmartImage image={img("gallery_1")} accent={accent} className="w-full h-full" /></div></Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3 opacity-40">Welcome</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 tracking-tight leading-tight">Details that make the stay</h2>
            <p className="text-sm text-black/50 leading-relaxed mb-8">{content?.about_snippet || "Quiet rooms, considered amenities, and a team focused on rest."}</p>
            <motion.a href={`${base}/about`} whileHover={{ x: 4 }} className="inline-flex text-sm font-semibold" style={{ color: accent }}>Our story →</motion.a>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "#FFFCF8", color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-[11px] font-semibold tracking-[0.3em] uppercase mb-2 opacity-40">Rooms and suites</p>
            <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 tracking-tight">A place to rest well</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <Reveal>
              <motion.div whileHover={{ y: -2 }} className="rounded-2xl border border-black/[0.06] bg-white p-7 md:p-9 shadow-sm hover:shadow-lg transition-shadow duration-400">
                <p className="text-[11px] uppercase tracking-wide opacity-40 mb-2">From</p>
                <p className="text-4xl font-semibold mb-4 tracking-tight">$210 <span className="text-sm font-normal opacity-40">/ night</span></p>
                <h3 className="font-semibold mb-2 text-lg">Standard room</h3>
                <p className="text-sm text-black/50 mb-6 leading-relaxed">Cozy, modern, and stocked with essentials for a comfortable stay.</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-black/40 mb-8">
                  {["28 m²", "King bed", "Breakfast available"].map((x) => (
                    <span key={x} className="px-3 py-1.5 rounded-full bg-black/[0.04] font-medium">{x}</span>
                  ))}
                </div>
                <motion.a href={`${base}/contact`} whileHover={{ scale: 1.03 }} className="inline-flex px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: accent }}>Book now</motion.a>
              </motion.div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden aspect-[16/11] shadow-lg">
                <SmartImage image={img("gallery_2")} accent={accent} className="w-full h-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-center text-2xl font-semibold mb-10 tracking-tight">Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {AMENITIES.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <div className="text-center py-4 px-3 rounded-xl bg-white border border-black/[0.04] hover:border-black/10 transition-colors">
                  <p className="text-sm font-medium">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={img("gallery_3")} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-5">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Your next stay starts here</h2>
            <motion.a href={`${base}/contact`} whileHover={{ scale: 1.04 }}
              className="inline-flex px-10 py-3.5 rounded-full text-sm font-semibold border border-white/35 text-white hover:bg-white/10 transition-colors">Reservation →</motion.a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
