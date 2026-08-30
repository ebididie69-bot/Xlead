import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/** True when hex background is dark enough that light text is needed. */
function isDarkHex(hex) {
  if (!hex || typeof hex !== "string" || !hex.startsWith("#")) return true;
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return true;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum < 0.55;
}

export default function DemoNav({
  business,
  links,
  accent,
  bg,
  ctaLabel = "Get in Touch",
  base,
  textLight = false,
}) {
  const [open, setOpen] = useState(false);
  const light = useMemo(() => textLight || isDarkHex(bg), [textLight, bg]);
  const fg = light ? "#F8FAFC" : "#0A0A0A";
  const menuBg = bg && bg.startsWith("#") ? bg : light ? "#0A0A0A" : "#FFFFFF";
  const ctaFg = light ? "#0A0A0A" : (bg || "#0A0A0A");

  const label = typeof business === "string" ? business : business?.name || "Business";

  return (
    <>
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-5 sm:px-6 md:px-12 py-4 backdrop-blur-md"
        style={{
          background: bg?.startsWith("#") ? `${bg}EE` : bg,
          borderBottom: `1px solid ${accent}22`,
          color: fg,
        }}
      >
        <span className="font-bold text-base sm:text-lg tracking-tight truncate max-w-[50%]" style={{ color: fg }}>
          {label}
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to === "" ? base : `${base}/${l.to}`}
              end={l.to === ""}
              className={({ isActive }) =>
                `text-sm font-medium transition-opacity ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}`
              }
              style={{ color: fg }}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to={`${base}/contact`}
            className="px-5 py-2 rounded-full text-sm font-bold"
            style={{ background: accent, color: ctaFg }}
          >
            {ctaLabel}
          </NavLink>
        </div>

        <button className="md:hidden p-1" onClick={() => setOpen(true)} aria-label="Open menu" style={{ color: fg }}>
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col"
            style={{ background: menuBg, color: fg }}
          >
            <div className="flex justify-between items-center px-6 py-4" style={{ borderBottom: `1px solid ${accent}33` }}>
              <span className="font-bold text-lg" style={{ color: fg }}>{label}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" style={{ color: fg }}>
                <X size={22} />
              </button>
            </div>
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="flex-1 flex flex-col items-center justify-center gap-8"
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to === "" ? base : `${base}/${l.to}`}
                  end={l.to === ""}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold"
                  style={{ color: fg }}
                >
                  {l.label}
                </NavLink>
              ))}
              <NavLink
                to={`${base}/contact`}
                onClick={() => setOpen(false)}
                className="px-8 py-3 rounded-full font-bold"
                style={{ background: accent, color: ctaFg }}
              >
                {ctaLabel}
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
