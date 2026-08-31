import Reveal from "../shared/Reveal";
import SmartImage from "../shared/SmartImage";

const SLOTS = [
  { key: "hero", label: "Featured" },
  { key: "about", label: "Atmosphere" },
  { key: "gallery_1", label: "Gallery" },
  { key: "gallery_2", label: "Gallery" },
  { key: "gallery_3", label: "Gallery" },
  { key: "gallery_4", label: "Gallery" },
];

export default function Gallery({ images, colors }) {
  const accent = colors?.accent || "#2563EB";
  const items = SLOTS.map((s) => ({ ...s, image: images?.[s.key] })).filter((x) => x.image?.url);

  return (
    <div className="min-h-screen py-16 md:py-24 px-5 sm:px-8" style={{ background: colors?.primary || "#0A0A0B", color: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-50">Portfolio</p>
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
        {items.length === 0 && (
          <p className="text-sm opacity-50">Images will appear after generation or regenerate.</p>
        )}
      </div>
    </div>
  );
}
