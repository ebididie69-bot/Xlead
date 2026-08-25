import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/**
 * Shared multi-page nav for every niche template. Desktop: horizontal links.
 * Mobile/tablet (<768px): hamburger opens a full-screen slide-down drawer.
 * `accent`/`bg` come from the AI-recommended theme colors so this reads as
 * part of that business's site, not a generic component chrome.
 */
export default function DemoNav({ business, links, accent, bg, ctaLabel = "Get in Touch", base }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md"
           style={{ background: `${bg}CC`, borderBottom: `1px solid ${accent}22` }}>
        <span className="font-bold text-lg tracking-tight" style={{ fontFamily: "inherit" }}>{business}</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to === "" ? base : `${base}/${l.to}`}
              end={l.to === ""}
              className={({ isActive }) => `text-sm font-medium transition-opacity ${isActive ? "" : "opacity-60 hover:opacity-100"}`}
            >
              {l.label}
            </NavLink>
          ))}
          <a href="#" className="px-5 py-2 rounded-full text-sm font-bold" style={{ background: accent, color: bg }}>
            {ctaLabel}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col"
            style={{ background: bg }}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-bold text-lg">{business}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <motion.div
              initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }}
              className="flex-1 flex flex-col items-center justify-center gap-8"
            >
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to === "" ? base : `${base}/${l.to}`}
                  end={l.to === ""}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {l.label}
                </NavLink>
              ))}
              <a href="#" className="px-8 py-3 rounded-full font-bold" style={{ background: accent, color: bg }}>
                {ctaLabel}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
