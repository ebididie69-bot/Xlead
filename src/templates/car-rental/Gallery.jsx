import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Gallery({ images, colors }) {
  const imgs = [images?.gallery_1, images?.gallery_2, images?.gallery_3, images?.gallery_4].filter(Boolean);
  return (
    <div style={{ background: colors.primary, color: "#FFFFFF" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center text-white/50">Our Fleet</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">Vehicles</h1>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {imgs.map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="aspect-[16/10] overflow-hidden rounded-xl relative group">
                <SmartImage image={img} accent={colors.accent} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
