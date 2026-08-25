import { motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

export default function About({ content, images, colors }) {
  return (
    <div style={{ background: colors.primary, color: "#2C1810" }} className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SmartImage image={images?.about} accent={colors.accent} className="w-full aspect-[4/5] object-cover rounded-sm shadow-md" />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: colors.accent }}>Our Story</p>
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">From flour to table</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed" style={{ color: "#5C4033" }}>
                {content?.about || "We wake before dawn to mix, knead, and bake. Every loaf and pastry is made by hand with local ingredients and old-world techniques."}
              </p>
            </Reveal>
          </div>
        </div>
        {content?.testimonials?.length > 0 && (
          <div className="mt-32">
            <Reveal><h2 className="text-3xl font-serif font-medium mb-14 text-center">Neighbors Say</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {content.testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div>
                    <p className="italic leading-relaxed mb-5" style={{ color: "#5C4033" }}>“{t.quote}”</p>
                    <div className="font-medium">{t.name}</div>
                    {t.role && <div className="text-sm mt-1" style={{ color: "#8B6F5C" }}>{t.role}</div>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
