import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "../components/Helmet";
import { TEMPLATE_REGISTRY } from "../templates";
import api from "../services/api";
import DemoNotFound from "./DemoNotFound";

/**
 * Mounted at /demo/:token/* (see App.jsx) so each niche site's nested
 * Home/Services/Gallery/Contact routes resolve underneath a stable base.
 * Fetches the site payload once here rather than per-page, since every
 * sub-page needs the same content/theme/images.
 */
export default function DemoRenderer() {
  const { token } = useParams();
  const [site, setSite] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api.get(`/demo/${token}`)
      .then((res) => setSite(res.data))
      .catch(() => setNotFound(true));
  }, [token]);

  if (notFound) return <DemoNotFound />;
  if (!site) return <div className="min-h-screen bg-ink" />;

  const Site = TEMPLATE_REGISTRY[site.template_key];
  if (!Site) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center text-ash text-sm">
        This niche's template hasn't been built yet.
      </div>
    );
  }

  return (
    <>
      <Helmet noindex title={site.content?.seo?.title} description={site.content?.seo?.description} />
      <Suspense fallback={<div className="min-h-screen" style={{ background: site.theme?.colors?.primary || "#0E1116" }} />}>
        <Site
          content={site.content}
          theme={site.theme}
          images={site.images || {}}
          enabledSections={site.enabled_sections}
          business={site.business_name}
          base={`/demo/${token}`}
        />
      </Suspense>
    </>
  );
}
