import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const fg = textLight ? "#F8FAFC" : undefined;

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
        <span className="font-bold text-base sm:text-lg tracking-tight truncate max-w-[50%]">{business}</span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to === "" ? base : `${base}/${l.to}`}
              end={l.to === ""}
              className={({ isActive }) =>
                `text-sm font-medium transition-opacity ${isActive ? "" : "opacity-60 hover:opacity-100"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to={`${base}/contact`}
            className="px-5 py-2 rounded-full text-sm font-bold"
            style={{ background: accent, color: textLight ? "#0A0A0A" : bg }}
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
            style={{ background: bg || "#0A0A0A", color: fg || "#0A0A0A" }}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="font-bold text-lg">{business}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={22} /></button>
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
                >
                  {l.label}
                </NavLink>
              ))}
              <NavLink
                to={`${base}/contact`}
                onClick={() => setOpen(false)}
                className="px-8 py-3 rounded-full font-bold"
                style={{ background: accent, color: textLight ? "#0A0A0A" : bg }}
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
