import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "../components/Helmet";
import { TEMPLATE_REGISTRY } from "../templates";
import api from "../services/api";
import DemoNotFound from "./DemoNotFound";

/** Old backend keys → current niche registry keys */
const LEGACY_TEMPLATE_KEYS = {
  GymFitnessTemplate: "gym_fitness",
  SalonSpaTemplate: "salon_spa",
  MakeupStudioTemplate: "makeup_studio",
  RealEstateTemplate: "real_estate_agency",
  DentalClinicTemplate: "dental_clinic",
  ConstructionTemplate: "construction_company",
  CarDealershipTemplate: "car_dealership",
  CarRentalTemplate: "car_rental",
  HotelGuestHouseTemplate: "hotel_guest_house",
  FurnitureInteriorTemplate: "furniture_interior_design",
  CleaningCompanyTemplate: "cleaning_company",
  BakeryCafeTemplate: "bakery_cafe",
  LawFirmTemplate: "law_firm",
  PhotographyStudioTemplate: "photography_studio",
  EventPlanningTemplate: "event_planning",
  AutoRepairTemplate: "auto_repair_garage",
};

function resolveRegistryEntry(templateKey) {
  if (!templateKey) return null;
  if (TEMPLATE_REGISTRY[templateKey]) return TEMPLATE_REGISTRY[templateKey];
  const niche = LEGACY_TEMPLATE_KEYS[templateKey];
  return niche ? TEMPLATE_REGISTRY[niche] : null;
}

export default function DemoRenderer() {
  const { token } = useParams();
  const [site, setSite] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api.get(`/demo/${token}`)
      .then((res) => setSite(res.data))
      .catch(() => setNotFound(true));
  }, [token]);

  const entry = site ? resolveRegistryEntry(site.template_key) : null;

  const Site = useMemo(() => {
    if (!entry?.load) return null;
    return lazy(entry.load);
  }, [entry]);

  if (notFound) return <DemoNotFound />;
  if (!site) return <div className="min-h-screen bg-ink" />;

  if (!Site) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center text-ash text-sm px-6 text-center">
        This niche's template hasn't been built yet.
        {site.template_key ? (
          <span className="block mt-2 text-ash/50 text-xs font-mono">{site.template_key}</span>
        ) : null}
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
