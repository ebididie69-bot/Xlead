import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const SLOTS = [
  { key: "hero" }, { key: "about" }, { key: "gallery_1" },
  { key: "gallery_2" }, { key: "gallery_3" }, { key: "gallery_4" },
];

export default function Gallery({ images, colors }) {
  const accent = colors?.accent || "#C4A574";
  const items = SLOTS.map((s) => ({ ...s, image: images?.[s.key] })).filter((x) => x.image?.url);
  return (
    <div className="min-h-screen py-16 md:py-24 px-5 sm:px-8" style={{ background: colors?.primary || "#FBF7F0", color: "#2A1A0E" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Moments</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-10">Gallery</h1>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.05}>
              <div className={`rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}>
                <SmartImage image={item.image} accent={accent} className="w-full h-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
