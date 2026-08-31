import { Routes, Route } from "react-router-dom";
import DemoNav from "../shared/DemoNav";
import DemoFooter from "../shared/DemoFooter";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

const NAV_LINKS = [
  { to: "", label: "Home" },
  { to: "services", label: "Services" },
  { to: "about", label: "About" },
  { to: "gallery", label: "Fleet" },
  { to: "contact", label: "Contact" },
];

export default function CarRentalSite({ content, theme, images = {}, business, base }) {
  const colors = theme?.colors || {
    primary: "#0A0A0B",
    secondary: "#FFFFFF",
    accent: "#2563EB",
  };
  const name = typeof business === "string" ? business : business?.name || "Premium Rentals";
  return (
    <div style={{ background: "#FFFFFF", color: "#0A0A0B", minHeight: "100vh" }} className="font-sans antialiased">
      <DemoNav business={name} links={NAV_LINKS} accent={colors.accent} bg={colors.primary} base={base} ctaLabel="Book a Car" textLight />
      <Routes>
        <Route index element={<Home content={content} images={images} colors={colors} base={base} business={name} />} />
        <Route path="services" element={<Services content={content} colors={colors} base={base} />} />
        <Route path="about" element={<About content={content} images={images} colors={colors} />} />
        <Route path="gallery" element={<Gallery images={images} colors={colors} />} />
        <Route path="contact" element={<Contact content={content} colors={colors} />} />
      </Routes>
      <DemoFooter business={business} accent={colors.accent} bg={colors.primary} muted="#94A3B8" />
    </div>
  );
}
