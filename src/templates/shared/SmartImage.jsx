import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Renders an image from the tiered sourcing pipeline (see backend
 * services/image_service.py): real business photo, generic niche stock,
 * or AI-generated concept art. Anything other than "real" gets a small
 * corner label so the demo never implies a photo it isn't — required by
 * the "must not falsely represent the actual business" rule for generated
 * images. Missing/broken URLs fall back to a branded gradient placeholder
 * instead of a broken-image icon, so a slow/failed fetch never looks broken.
 */
export default function SmartImage({ image, accent = "#38B6A6", className = "", alt, priority = false }) {
  const [failed, setFailed] = useState(false);
  const hasImage = image?.url && !failed;

  const LABELS = { stock: "Stock photo", ai_generated: "Concept image" };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `${accent}14` }}>
      {hasImage ? (
        <img
          src={image.url}
          alt={alt || image.alt || ""}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ color: `${accent}66` }}>
          <ImageOff size={28} strokeWidth={1.5} />
        </div>
      )}

      {hasImage && image.source && image.source !== "real" && (
        <span
          className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded-full font-mono"
          style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
        >
          {LABELS[image.source] || image.source}
        </span>
      )}
    </div>
  );
}
