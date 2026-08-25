import { useEffect } from "react";

/**
 * Minimal stand-in for react-helmet: demo pages are the only place we need
 * to set <title>/meta/robots dynamically, so a full library is unnecessary
 * weight. Sets noindex,nofollow unconditionally on demo pages per spec —
 * these are sales previews, never meant to be indexed.
 */
export function Helmet({ title, description, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    if (noindex) setMeta("robots", "noindex, nofollow");

    return () => {
      // Reset to defaults when leaving the demo page.
      document.title = "LeadForge AI";
      const robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    };
  }, [title, description, noindex]);

  return null;
}
