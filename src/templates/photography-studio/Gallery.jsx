import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Gallery({ images, colors }) {
  const imgs = [images?.gallery_1, images?.gallery_2, images?.gallery_3, images?.gallery_4].filter(Boolean);
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-16 px-4">Gallery</h1>
        </Reveal>
        {/* Edge-to-edge masonry — the centerpiece */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 auto-rows-[200px] md:auto-rows-[280px]">
          {imgs[0] && (
            <Reveal>
              <motion.div className="col-span-2 row-span-2 relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <SmartImage image={imgs[0]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {imgs[1] && (
            <Reveal delay={0.1}>
              <motion.div className="relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
                <SmartImage image={imgs[1]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {imgs[2] && (
            <Reveal delay={0.15}>
              <motion.div className="relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }}>
                <SmartImage image={imgs[2]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {imgs[3] && (
            <Reveal delay={0.2}>
              <motion.div className="col-span-2 relative overflow-hidden"
                initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
                <SmartImage image={imgs[3]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
