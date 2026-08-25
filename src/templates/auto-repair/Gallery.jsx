import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Gallery({ images, colors }) {
  const accent = colors.accent || "#F0C531";
  const bg = colors.primary || "#0A0F1E";

  const slots = [
    { key: "gallery_1", span: "md:col-span-2", aspect: "aspect-[16/9]" },
    { key: "gallery_2", span: "md:col-span-1", aspect: "aspect-[4/5]" },
    { key: "gallery_3", span: "md:col-span-1", aspect: "aspect-[4/5]" },
    { key: "gallery_4", span: "md:col-span-2", aspect: "aspect-[16/9]" },
  ];

  return (
    <div style={{ background: bg, color: "#E8EAF0", minHeight: "100vh" }}>
      {/* Header */}
      <section className="px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: accent }}>Gallery</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">The Garage</h1>
        </motion.div>
      </section>

      {/* Asymmetric grid */}
      <section className="px-6 md:px-16 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-3">
          {slots.map(({ key, span, aspect }, i) => (
            <Reveal key={key} delay={i * 0.1} className={span}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`${aspect} overflow-hidden relative group`}
              >
                <SmartImage
                  image={images[key]}
                  accent={accent}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${accent}18` }} />
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px transition-all duration-500"
                  style={{ background: accent }} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
