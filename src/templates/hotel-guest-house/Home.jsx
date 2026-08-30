import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const PERKS = [
  { t: "Located in the heart of the city", d: "Easy access and convenience." },
  { t: "Luxurious & comfortable", d: "Modern rooms fully equipped for rest." },
  { t: "Friendly welcoming staff", d: "Personalized service every stay." },
  { t: "Best prices & offers", d: "Seasonal packages tailored for you." },
];

const AMENITIES = [
  "High Speed WiFi", "Parking Space", "Restaurant & Bar",
  "Spa Center", "Fitness Center", "Swimming Pool",
];

export default function Home({ content, images, colors, base }) {
  const accent = colors.accent || "#C4A574";
  const bg = colors.primary || "#0F0F10";
  const ivory = colors.secondary || "#F8F5F0";
  const gallery = images?.gallery || [];

  return (
    <div style={{ background: bg, color: "#F5F0E8", minHeight: "100vh" }}>
      <section className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={images?.hero} accent={accent} className="w-full h-full" priority />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-28">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-1 mb-4 text-amber-400 text-sm">
            {"★★★★★"}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            {content?.hero_title || "Luxury Hotel in the Heart of the City"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-white/65 text-sm md:text-base max-w-lg mx-auto"
          >
            {content?.hero_subtitle ||
              "Modern rooms, premium amenities, and hospitality that makes every stay unforgettable."}
          </motion.p>
          <motion.a
            href={`${base}/gallery`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-flex mt-8 px-8 py-3 rounded-full text-sm font-semibold tracking-wide border border-white/40 hover:bg-white/10"
          >
            Explore →
          </motion.a>
        </div>
      </section>

      <section className="py-14" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <div className="text-center sm:text-left">
                <div className="w-10 h-10 rounded-full mx-auto sm:mx-0 mb-3" style={{ background: `${accent}25` }} />
                <h3 className="font-semibold text-sm mb-1">{p.t}</h3>
                <p className="text-xs text-black/50">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <SmartImage image={gallery[0] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <SmartImage image={gallery[1] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
          </div>
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Welcome</p>
            <h2 className="text-3xl font-semibold mb-4">Luxury stays, thoughtful details</h2>
            <p className="text-sm text-black/55 leading-relaxed mb-6">
              {content?.about_snippet ||
                "Enjoy premium facilities perfect for relaxation and indulgence. Discover true hospitality in every room."}
            </p>
            <a href={`${base}/about`} className="text-sm font-semibold" style={{ color: accent }}>
              Read more →
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-16" style={{ background: "#FFFCF8", color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Exquisite and luxurious</p>
            <h2 className="text-center text-3xl font-semibold mb-10">Room and suite collection</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Reveal>
              <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-8">
                <p className="text-xs uppercase tracking-wide opacity-50 mb-2">From</p>
                <p className="text-3xl font-semibold mb-3">$210 <span className="text-sm font-normal opacity-50">/ night</span></p>
                <h3 className="font-semibold mb-2">Standard room</h3>
                <p className="text-sm text-black/50 mb-4">Cozy and modern with essential amenities for a comfortable stay.</p>
                <div className="flex flex-wrap gap-2 text-[11px] text-black/45 mb-6">
                  {["Room 28 m²", "1 King bed", "Breakfast available"].map((x) => (
                    <span key={x} className="px-2 py-1 rounded-full bg-black/5">{x}</span>
                  ))}
                </div>
                <a href={`${base}/contact`} className="inline-flex px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: accent }}>
                  Book now
                </a>
              </div>
            </Reveal>
            <div className="rounded-2xl overflow-hidden aspect-[16/11]">
              <SmartImage image={gallery[2] || images?.hero} accent={accent} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: ivory, color: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-center text-2xl font-semibold mb-8">Facilities and amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {AMENITIES.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <div className="text-center p-4">
                  <div className="w-10 h-10 rounded-full mx-auto mb-2" style={{ background: `${accent}20` }} />
                  <p className="text-sm font-medium">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage image={gallery[3] || images?.hero} accent={accent} className="w-full h-full" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-5">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Explore our hotel</h2>
          <a href={`${base}/contact`} className="inline-flex px-8 py-3 rounded-full text-sm font-semibold border border-white/40 hover:bg-white/10">
            Reservation →
          </a>
        </div>
      </section>
    </div>
  );
}
