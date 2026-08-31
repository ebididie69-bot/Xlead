import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const PERKS = [
  { t: "Prime location", d: "Easy access to the city and key landmarks." },
  { t: "Thoughtful rooms", d: "Comfort-first design and quiet rest." },
  { t: "Attentive staff", d: "Warm help from check-in to check-out." },
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
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={img("hero")} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-amber-400/90 text-sm mb-3 tracking-wide">★★★★★</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            {content?.hero_title || "Luxury stays in the heart of the city"}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-white/65 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            {content?.hero_subtitle ||
              `Modern rooms, calm design${business ? `, and hospitality from ${business}` : " and genuine hospitality"}.`}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`${base}/contact`} className="inline-flex px-8 py-3 rounded-full text-sm font-semibold" style={{ background: accent, color: "#1A1410" }}>Reserve a room</a>
            <a href={`${base}/gallery`} className="inline-flex px-8 py-3 rounded-full text-sm font-medium border border-white/35 text-white/90">Explore →</a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-14" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="text-center sm:text-left">
                <div className="w-9 h-9 rounded-full mx-auto sm:mx-0 mb-3" style={{ background: `${accent}28` }} />
                <h3 className="font-semibold text-sm mb-1">{p.t}</h3>
                <p className="text-xs text-black/50 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <SmartImage image={img("about")} accent={accent} className="w-full h-full" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <SmartImage image={img("gallery_1")} accent={accent} className="w-full h-full" />
            </div>
          </div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-45">Welcome</p>
            <h2 className="text-3xl font-semibold mb-4">Details that make the stay</h2>
            <p className="text-sm text-black/55 leading-relaxed mb-6">
              {content?.about_snippet ||
                "Quiet rooms, considered amenities, and a team focused on rest and ease — whether you are here one night or a week."}
            </p>
            <a href={`${base}/about`} className="text-sm font-semibold" style={{ color: accent }}>Our story →</a>
          </Reveal>
        </div>
      </section>

      <section className="py-16" style={{ background: "#FFFCF8", color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-2 opacity-45">Rooms and suites</p>
            <h2 className="text-center text-3xl font-semibold mb-10">A place to rest well</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
                <p className="text-xs uppercase tracking-wide opacity-45 mb-2">From</p>
                <p className="text-3xl font-semibold mb-3">$210 <span className="text-sm font-normal opacity-45">/ night</span></p>
                <h3 className="font-semibold mb-2">Standard room</h3>
                <p className="text-sm text-black/50 mb-4 leading-relaxed">Cozy, modern, and stocked with essentials for a comfortable stay.</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-black/45 mb-6">
                  {["28 m²", "King bed", "Breakfast available"].map((x) => (
                    <span key={x} className="px-2.5 py-1 rounded-full bg-black/5">{x}</span>
                  ))}
                </div>
                <a href={`${base}/contact`} className="inline-flex px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: accent }}>Book now</a>
              </div>
            </Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[16/11]">
              <SmartImage image={img("gallery_2")} accent={accent} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-center text-2xl font-semibold mb-8">Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {AMENITIES.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <div className="text-center p-3 rounded-xl bg-white/80 border border-black/5">
                  <p className="text-sm font-medium">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={img("gallery_3")} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Your next stay starts here</h2>
          <a href={`${base}/contact`} className="inline-flex px-8 py-3 rounded-full text-sm font-semibold border border-white/40 text-white hover:bg-white/10">Reservation →</a>
        </div>
      </section>
    </div>
  );
}
