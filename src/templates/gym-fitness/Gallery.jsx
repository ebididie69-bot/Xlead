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
    <div className="pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.35em] uppercase mb-4" style={{ color: colors.accent }}>
            Inside the Gym
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-20">Gallery</h1>
        </Reveal>

        {/* Asymmetric 3D-feeling grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px] md:auto-rows-[300px]">
          {galleryImages[0] && (
            <Reveal>
              <motion.div
                className="md:col-span-2 md:row-span-2 relative overflow-hidden group"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6 }}
              >
                <SmartImage image={galleryImages[0]} accent={colors.accent} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[1] && (
            <Reveal delay={0.1}>
              <motion.div className="relative overflow-hidden group" whileHover={{ scale: 1.03 }}>
                <SmartImage image={galleryImages[1]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[2] && (
            <Reveal delay={0.15}>
              <motion.div className="relative overflow-hidden group" whileHover={{ scale: 1.03 }}>
                <SmartImage image={galleryImages[2]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
          {galleryImages[3] && (
            <Reveal delay={0.2}>
              <motion.div className="md:col-span-2 relative overflow-hidden group" whileHover={{ scale: 1.015 }}>
                <SmartImage image={galleryImages[3]} accent={colors.accent} className="w-full h-full object-cover" />
              </motion.div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
