import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function Gallery({ images, colors }) {
  const imgs = [images?.gallery_1, images?.gallery_2, images?.gallery_3, images?.gallery_4].filter(Boolean);
  return (
    <div style={{ background: colors.primary, color: "#2C1810" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center" style={{ color: colors.accent }}>The Bakehouse</p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-16">Gallery</h1>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imgs[0] && <Reveal><div className="md:col-span-2 aspect-[16/10] overflow-hidden rounded-sm"><SmartImage image={imgs[0]} accent={colors.accent} className="w-full h-full object-cover" /></div></Reveal>}
          {imgs[1] && <Reveal delay={0.1}><div className="aspect-[4/5] overflow-hidden rounded-sm"><SmartImage image={imgs[1]} accent={colors.accent} className="w-full h-full object-cover" /></div></Reveal>}
          {imgs[2] && <Reveal delay={0.15}><div className="aspect-[4/5] overflow-hidden rounded-sm"><SmartImage image={imgs[2]} accent={colors.accent} className="w-full h-full object-cover" /></div></Reveal>}
          {imgs[3] && <Reveal delay={0.2}><div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-sm"><SmartImage image={imgs[3]} accent={colors.accent} className="w-full h-full object-cover" /></div></Reveal>}
        </div>
      </div>
    </div>
  );
}
