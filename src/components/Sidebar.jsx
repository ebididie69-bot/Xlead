import { NavLink } from "react-router-dom";
import {
  LayoutGrid, Radar, Globe2, LayoutTemplate, Mail, BarChart3, Settings as SettingsIcon, X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/leads", label: "Lead Finder", icon: Radar },
  { to: "/websites", label: "Generated Websites", icon: Globe2 },
  { to: "/templates", label: "Templates", icon: LayoutTemplate },
  { to: "/emails", label: "Email Queue", icon: Mail },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

function SidebarContent({ onNavigate }) {
  return (
    <>
      <div className="px-5 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-signal shadow-glow" />
          <span className="font-display font-semibold text-lg tracking-tight text-ash-light">
            LeadForge <span className="text-signal">AI</span>
          </span>
        </div>
        {onNavigate && (
          <button onClick={onNavigate} className="md:hidden text-ash p-1" aria-label="Close menu">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "text-ash-light" : "text-ash hover:text-ash-light hover:bg-ink-700"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-ink-700 rounded-lg border border-ink-600"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={17} className="relative z-10 flex-shrink-0" />
                <span className="relative z-10">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-ink-600 text-xs text-ash font-mono">
        single-admin instance
      </div>
    </>
  );
}

/**
 * Desktop (md and up): a normal static sidebar, always visible, same as before.
 * Mobile (below md): the sidebar is NOT in the flex layout at all — it's an
 * off-canvas drawer triggered by the hamburger button in DashboardLayout's
 * mobile header. This is what was missing: previously the sidebar was
 * always `w-60` in the flex row regardless of viewport, which is what
 * pushed all page content off-screen to the right on a phone.
 */
export default function Sidebar({ mobileOpen, onCloseMobile }) {
  return (
    <>
      <aside className="hidden md:flex w-60 shrink-0 h-screen sticky top-0 bg-ink-800 border-r border-ink-600 flex-col">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="md:hidden fixed inset-0 bg-black/60 z-40"
            />
            <motion.aside
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="md:hidden fixed inset-y-0 left-0 w-72 max-w-[80vw] bg-ink-800 border-r border-ink-600 flex flex-col z-50"
            >
              <SidebarContent onNavigate={onCloseMobile} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
