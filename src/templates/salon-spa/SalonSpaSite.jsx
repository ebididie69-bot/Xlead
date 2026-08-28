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
  { to: "about", label: "About Us" },
  { to: "services", label: "Services" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

export default function SalonSpaSite({ content, theme, images = {}, business, base }) {
  const colors = theme?.colors || {
    primary: "#0A0A0A",
    secondary: "#161616",
    accent: "#C9A227",
  };
  return (
    <div style={{ background: colors.primary, color: "#F5F5F4", minHeight: "100vh" }} className="font-sans antialiased">
      <DemoNav business={business} links={NAV_LINKS} accent={colors.accent} bg="transparent" base={base} ctaLabel="Book Now" textLight />
      <Routes>
        <Route index element={<Home content={content} images={images} colors={colors} base={base} business={business} />} />
        <Route path="services" element={<Services content={content} colors={colors} base={base} />} />
        <Route path="about" element={<About content={content} images={images} colors={colors} />} />
        <Route path="gallery" element={<Gallery images={images} colors={colors} />} />
        <Route path="contact" element={<Contact content={content} colors={colors} />} />
      </Routes>
      <DemoFooter business={business} accent={colors.accent} bg="#050505" muted="#A8A29E" />
    </div>
  );
}
