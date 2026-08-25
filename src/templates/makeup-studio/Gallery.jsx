import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Gallery({ images, colors }) {
  const galleryImages = [
    images?.gallery_1,
    images?.gallery_2,
    images?.gallery_3,
    images?.gallery_4,
  ].filter(Boolean);

  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.4em] uppercase mb-6" style={{ color: colors.accent }}>
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-20">
            Gallery
          </h1>
        </Reveal>

        {/* Tight masonry — images do the talking */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-[280px]">
          {galleryImages[0] && (
            <Reveal>
              <motion.div
                className="col-span-2 row-span-2 relative overflow-hidden group"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SmartImage image={galleryImages[0]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[1] && (
            <Reveal delay={0.1}>
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <SmartImage image={galleryImages[1]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[2] && (
            <Reveal delay={0.15}>
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <SmartImage image={galleryImages[2]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[3] && (
            <Reveal delay={0.2}>
              <motion.div
                className="col-span-2 relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SmartImage image={galleryImages[3]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
