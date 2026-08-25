import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  // Without this, navigating from a page you'd scrolled down/right on left
  // the browser at the same scroll position on the new page — on a page
  // shorter or narrower than the last one, that looks exactly like a blank
  // page, because you're scrolled past all of its content.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close the mobile drawer automatically on route change, in case a link
  // was triggered by something other than the drawer's own onNavigate.
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-ink">
      <Sidebar mobileOpen={mobileNavOpen} onCloseMobile={() => setMobileNavOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile-only top bar with hamburger — the sidebar itself is off-canvas below md */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 border-b border-ink-600 bg-ink-800 sticky top-0 z-30">
          <button onClick={() => setMobileNavOpen(true)} className="text-ash-light p-1" aria-label="Open menu">
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-signal shadow-glow" />
            <span className="font-display font-semibold text-base tracking-tight text-ash-light">
              LeadForge <span className="text-signal">AI</span>
            </span>
          </div>
        </header>

        <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 py-6 md:py-8 max-w-6xl w-full overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
