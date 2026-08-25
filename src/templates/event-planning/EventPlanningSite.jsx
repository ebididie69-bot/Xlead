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
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

export default function EventPlanningSite({ content, theme, images = {}, business, base }) {
  const colors = theme?.colors || { primary: "#1A0A0F", secondary: "#2D1520", accent: "#D4AF37" };
  return (
    <div style={{ background: colors.primary, color: "#F5EEE6", minHeight: "100vh" }} className="font-sans">
      <DemoNav business={business} links={NAV_LINKS} accent={colors.accent} bg={colors.primary} base={base} ctaLabel="Plan Your Event" />
      <Routes>
        <Route index element={<Home content={content} images={images} colors={colors} base={base} />} />
        <Route path="services" element={<Services content={content} colors={colors} base={base} />} />
        <Route path="about" element={<About content={content} images={images} colors={colors} />} />
        <Route path="gallery" element={<Gallery images={images} colors={colors} />} />
        <Route path="contact" element={<Contact content={content} colors={colors} />} />
      </Routes>
      <DemoFooter business={business} accent={colors.accent} bg={colors.primary} muted="#6B7280" />
    </div>
  );
}
