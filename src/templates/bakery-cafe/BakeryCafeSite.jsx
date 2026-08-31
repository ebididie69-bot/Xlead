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
  { to: "services", label: "Menu" },
  { to: "about", label: "About" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

export default function BakeryCafeSite({ content, theme, images = {}, business, base }) {
  const colors = theme?.colors || { primary: "#FBF7F0", secondary: "#FFFFFF", accent: "#C4A574" };
  const name = typeof business === "string" ? business : business?.name || "Café";
  return (
    <div style={{ background: colors.primary, color: "#2C1810", minHeight: "100vh" }} className="font-sans antialiased">
      <DemoNav business={name} links={NAV_LINKS} accent={colors.accent} bg={colors.primary} base={base} ctaLabel="Order Ahead" />
      <Routes>
        <Route index element={<Home content={content} images={images} colors={colors} base={base} business={name} />} />
        <Route path="services" element={<Services content={content} colors={colors} base={base} />} />
        <Route path="about" element={<About content={content} images={images} colors={colors} />} />
        <Route path="gallery" element={<Gallery images={images} colors={colors} />} />
        <Route path="contact" element={<Contact content={content} colors={colors} />} />
      </Routes>
      <DemoFooter business={business} accent={colors.accent} bg="#2A1A0E" muted="#A89080" />
    </div>
  );
}
