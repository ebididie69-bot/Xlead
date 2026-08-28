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
  { to: "gallery", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export default function CleaningCompanySite({ content, theme, images = {}, business, base }) {
  const colors = theme?.colors || {
    primary: "#0B0F14",
    secondary: "#FFFFFF",
    accent: "#F5C518",
  };
  return (
    <div style={{ background: "#FFFFFF", color: "#0B0F14", minHeight: "100vh" }} className="font-sans antialiased">
      <DemoNav business={business} links={NAV_LINKS} accent={colors.accent} bg="#0B0F14" base={base} ctaLabel="Book Now" textLight />
      <Routes>
        <Route index element={<Home content={content} images={images} colors={colors} base={base} business={business} />} />
        <Route path="services" element={<Services content={content} colors={colors} base={base} />} />
        <Route path="about" element={<About content={content} images={images} colors={colors} />} />
        <Route path="gallery" element={<Gallery images={images} colors={colors} />} />
        <Route path="contact" element={<Contact content={content} colors={colors} />} />
      </Routes>
      <DemoFooter business={business} accent={colors.accent} bg="#0B0F14" muted="#94A3B8" />
    </div>
  );
}
