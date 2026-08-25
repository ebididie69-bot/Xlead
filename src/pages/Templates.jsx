import DashboardLayout from "../components/DashboardLayout";

const NICHES = [
  { key: "gym_fitness", label: "Gym & Fitness", built: true },
  { key: "salon_spa", label: "Salon & Spa", built: true },
  { key: "makeup_studio", label: "Makeup Studio", built: true },
  { key: "real_estate_agency", label: "Real Estate Agency", built: true },
  { key: "dental_clinic", label: "Dental Clinic", built: true },
  { key: "construction_company", label: "Construction Company", built: true },
  { key: "car_dealership", label: "Car Dealership", built: true },
  { key: "car_rental", label: "Car Rental", built: true },
  { key: "hotel_guest_house", label: "Hotel & Guest House", built: true },
  { key: "furniture_interior_design", label: "Furniture & Interior Design", built: true },
  { key: "cleaning_company", label: "Cleaning Company", built: true },
  { key: "bakery_cafe", label: "Bakery & Café", built: true },
  { key: "law_firm", label: "Law Firm", built: true },
  { key: "photography_studio", label: "Photography Studio", built: true },
  { key: "event_planning", label: "Event Planning & Catering", built: true },
  { key: "auto_repair_garage", label: "Auto Repair & Garage", built: true },
];

export default function Templates() {
  return (
    <DashboardLayout>
      <h1 className="font-display font-semibold text-2xl text-ash-light mb-1">Templates</h1>
      <p className="text-ash text-sm mb-8">
        One reusable React template per niche. The AI fills content only — never markup.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {NICHES.map((n) => (
          <div key={n.key} className="card p-4">
            <p className="text-ash-light text-sm font-medium mb-1">{n.label}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full ${n.built ? "text-signal bg-signal/10" : "text-ash bg-ink-700"}`}>
              {n.built ? "Built" : "Not yet built"}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
