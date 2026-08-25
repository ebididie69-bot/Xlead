// Template registry — lazy loaded to keep initial bundle small.
// Folder names match exactly what's in src/templates/.

export const TEMPLATE_REGISTRY = {
  gym_fitness: {
    label: "Gym & Fitness",
    load: () => import("./gym-fitness/GymFitnessSite"),
  },
  salon_spa: {
    label: "Salon & Spa",
    load: () => import("./salon-spa/SalonSpaSite"),
  },
  makeup_studio: {
    label: "Makeup Studio",
    load: () => import("./makeup-studio/MakeupStudioSite"),
  },
  real_estate_agency: {
    label: "Real Estate Agency",
    load: () => import("./real-estate/RealEstateSite"),
  },
  dental_clinic: {
    label: "Dental Clinic",
    load: () => import("./dental-clinic/DentalClinicSite"),
  },
  construction_company: {
    label: "Construction Company",
    load: () => import("./construction-company/ConstructionCompanySite"),
  },
  car_dealership: {
    label: "Car Dealership",
    load: () => import("./car-dealership/CarDealershipSite"),
  },
  car_rental: {
    label: "Car Rental",
    load: () => import("./car-rental/CarRentalSite"),
  },
  hotel_guest_house: {
    label: "Hotel & Guest House",
    load: () => import("./hotel-guest-house/HotelGuestHouseSite"),
  },
  furniture_interior_design: {
    label: "Furniture & Interior Design",
    load: () => import("./furniture-interior/FurnitureInteriorSite"),
  },
  cleaning_company: {
    label: "Cleaning Company",
    load: () => import("./cleaning-company/CleaningCompanySite"),
  },
  bakery_cafe: {
    label: "Bakery & Café",
    load: () => import("./bakery-cafe/BakeryCafeSite"),
  },
  law_firm: {
    label: "Law Firm",
    load: () => import("./law-firm/LawFirmSite"),
  },
  photography_studio: {
    label: "Photography Studio",
    load: () => import("./photography-studio/PhotographyStudioSite"),
  },
  event_planning: {
    label: "Event Planning",
    load: () => import("./event-planning/EventPlanningSite"),
  },
  auto_repair_garage: {
    label: "Auto Repair & Garage",
    load: () => import("./auto-repair/AutoRepairSite"),
  },
};
