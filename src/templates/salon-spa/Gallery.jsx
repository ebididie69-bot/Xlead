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
    <div className="pt-32 pb-28">
      <div className="max-w-6xl mx-auto px-8">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.35em] uppercase mb-4 text-center" style={{ color: colors.accent }}>
            Atmosphere
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-center mb-20">
            Gallery
          </h1>
        </Reveal>

        {/* Soft asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {galleryImages[0] && (
            <Reveal className="md:col-span-7">
              <div className="aspect-[4/5] overflow-hidden" style={{ borderRadius: "2px" }}>
                <SmartImage image={galleryImages[0]} accent={colors.accent} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          )}
          <div className="md:col-span-5 flex flex-col gap-5">
            {galleryImages[1] && (
              <Reveal delay={0.1}>
                <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
                  <SmartImage image={galleryImages[1]} accent={colors.accent} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            )}
            {galleryImages[2] && (
              <Reveal delay={0.15}>
                <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
                  <SmartImage image={galleryImages[2]} accent={colors.accent} className="w-full h-full object-cover" />
                </div>
              </Reveal>
            )}
          </div>
          {galleryImages[3] && (
            <Reveal delay={0.2} className="md:col-span-12">
              <div className="aspect-[21/9] overflow-hidden" style={{ borderRadius: "2px" }}>
                <SmartImage image={galleryImages[3]} accent={colors.accent} className="w-full h-full object-cover" />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
