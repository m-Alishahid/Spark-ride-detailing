// src/utils/services.ts

// ---------------- Vehicle Service Packages ----------------
export type ServicePackage = {
  name: string;
  price?: number;
  pricePerFt?: number;
  includes: string[];
};

export type VehicleService = {
  interior?: Record<string, ServicePackage> | ServicePackage;
  exterior?: Record<string, ServicePackage> | ServicePackage;
  full: Record<string, ServicePackage> | ServicePackage;
  [key: string]: any; // Allow string indexing
};

export const service: Record<string, VehicleService> = {
  suv: {
    interior: {
      basic: {
        name: "Basic Interior",
        price: 180,
        includes: [
          "Vacuum Carpets & Floor Mats",
          "Wipe Down Dashboard, Console & Cupholders",
          "Clean Windows (Inside)",
          "Clean Door Panels & Pockets",
          "Light Dusting",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Premium Interior",
        price: 220,
        includes: [
          "Full Vacuum Carpets, Mats & Seats",
          "Shampoo & Deep Clean Upholstery + Carpets",
          "Leather/Vinyl Cleaning & Conditioning",
          "Dashboard, Console & Trim Detailed",
          "Interior Windows & Mirrors",
          "Door Panels & Cupholders Sanitized",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Basic Exterior",
        price: 160,
        includes: [
          "Biodegradable Soap Wash",
          "Rinse & Pressure Clean",
          "Hand Dry with Microfiber Towels",
          "Clean Windows & Mirrors (Outside)",
          "Basic Tire Shine",
        ],
      },
      premium: {
        name: "Premium Exterior",
        price: 190,
        includes: [
          "Foam Cannon Wash",
          "Clay Bar Treatment",
          "Hand Wax/Sealant",
          "Windows & Mirrors Polished",
          "Wheel & Tire Deep Cleaning + Shine",
          "Bug & Tar Removal",
        ],
      },
    },
    full: {
      basic: {
        name: "Basic Full",
        price: 220,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Premium Full",
        price: 300,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  sedan: {
    interior: {
      basic: {
        name: "Basic Interior",
        price: 190,
        includes: [
          "Vacuum Carpets & Floor Mats",
          "Wipe Down Dashboard, Console & Cupholders",
          "Clean Windows (Inside)",
          "Clean Door Panels & Pockets",
          "Light Dusting",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Premium Interior",
        price: 230,
        includes: [
          "Full Vacuum Carpets, Mats & Seats",
          "Shampoo & Deep Clean Upholstery + Carpets",
          "Leather/Vinyl Cleaning & Conditioning",
          "Dashboard, Console & Trim Detailed",
          "Interior Windows & Mirrors",
          "Door Panels & Cupholders Sanitized",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Basic Exterior",
        price: 170,
        includes: [
          "Biodegradable Soap Wash",
          "Rinse & Pressure Clean",
          "Hand Dry with Microfiber Towels",
          "Clean Windows & Mirrors (Outside)",
          "Basic Tire Shine",
        ],
      },
      premium: {
        name: "Premium Exterior",
        price: 200,
        includes: [
          "Foam Cannon Wash",
          "Clay Bar Treatment",
          "Hand Wax/Sealant",
          "Windows & Mirrors Polished",
          "Wheel & Tire Deep Cleaning + Shine",
          "Bug & Tar Removal",
        ],
      },
    },
    full: {
      basic: {
        name: "Basic Full",
        price: 230,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Premium Full",
        price: 310,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  truck: {
    interior: {
      basic: {
        name: "Basic Interior",
        price: 180,
        includes: [
          "Vacuum Carpets & Floor Mats",
          "Wipe Down Dashboard, Console & Cupholders",
          "Clean Windows (Inside)",
          "Clean Door Panels & Pockets",
          "Light Dusting",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Premium Interior",
        price: 220,
        includes: [
          "Full Vacuum Carpets, Mats & Seats",
          "Shampoo & Deep Clean Upholstery + Carpets",
          "Leather/Vinyl Cleaning & Conditioning",
          "Dashboard, Console & Trim Detailed",
          "Interior Windows & Mirrors",
          "Door Panels & Cupholders Sanitized",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Basic Exterior",
        price: 190,
        includes: [
          "Biodegradable Soap Wash",
          "Rinse & Pressure Clean",
          "Hand Dry with Microfiber Towels",
          "Clean Windows & Mirrors (Outside)",
          "Basic Tire Shine",
        ],
      },
      premium: {
        name: "Premium Exterior",
        price: 210,
        includes: [
          "Foam Cannon Wash",
          "Clay Bar Treatment",
          "Hand Wax/Sealant",
          "Windows & Mirrors Polished",
          "Wheel & Tire Deep Cleaning + Shine",
          "Bug & Tar Removal",
        ],
      },
    },
    full: {
      basic: {
        name: "Basic Full",
        price: 250,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Premium Full",
        price: 320,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  van: {
    interior: {
      basic: {
        name: "Basic Interior",
        price: 210,
        includes: [
          "Vacuum Carpets & Floor Mats",
          "Wipe Down Dashboard, Console & Cupholders",
          "Clean Windows (Inside)",
          "Clean Door Panels & Pockets",
          "Light Dusting",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Premium Interior",
        price: 240,
        includes: [
          "Full Vacuum Carpets, Mats & Seats",
          "Shampoo & Deep Clean Upholstery + Carpets",
          "Leather/Vinyl Cleaning & Conditioning",
          "Dashboard, Console & Trim Detailed",
          "Interior Windows & Mirrors",
          "Door Panels & Cupholders Sanitized",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Basic Exterior",
        price: 190,
        includes: [
          "Biodegradable Soap Wash",
          "Rinse & Pressure Clean",
          "Hand Dry with Microfiber Towels",
          "Clean Windows & Mirrors (Outside)",
          "Basic Tire Shine",
        ],
      },
      premium: {
        name: "Premium Exterior",
        price: 240,
        includes: [
          "Foam Cannon Wash",
          "Clay Bar Treatment",
          "Hand Wax/Sealant",
          "Windows & Mirrors Polished",
          "Wheel & Tire Deep Cleaning + Shine",
          "Bug & Tar Removal",
        ],
      },
    },
    full: {
      basic: {
        name: "Basic Full",
        price: 220,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Premium Full",
        price: 300,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  bike: {
    interior: {
      basic: {
        name: "Bike Basic Interior",
        price: 80,
        includes: [
          "Clean Seat & Saddle",
          "Wipe Down Handlebars & Console",
          "Clean Storage Compartments",
          "Dust Removal from Panels",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Bike Premium Interior",
        price: 120,
        includes: [
          "Deep Clean Seat & Upholstery",
          "Detailed Handlebars & Controls",
          "Interior Compartments Sanitized",
          "Leather/Vinyl Conditioning",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Bike Basic Exterior",
        price: 90,
        includes: [
          "Pressure Rinse Frame & Body",
          "Gentle Soap Wash + Hand Dry",
          "Wheels & Rims Cleaning",
          "Tire Shine",
          "Basic Polish on Chrome Parts",
        ],
      },
      premium: {
        name: "Bike Premium Exterior",
        price: 130,
        includes: [
          "Foam Wash & Clay Bar",
          "Wax/Sealant Application",
          "Deep Clean Wheels, Rims & Spokes",
          "Exhaust & Chrome Polishing",
          "Headlight Restoration",
          "Bug & Tar Removal",
        ],
      },
    },
    full: {
      basic: {
        name: "Bike Basic Full",
        price: 170,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Bike Premium Full",
        price: 250,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  boat: {
    interior: {
      basic: {
        name: "Boat Basic Interior",
        pricePerFt: 15,
        includes: [
          "Vacuum Carpets, Seats & Storage",
          "Light Cleaning of Upholstery",
          "Clean Cupholders, Dash & Panels",
          "Basic Dusting",
          "Air Freshener/Deodorizer",
        ],
      },
      premium: {
        name: "Boat Premium Interior",
        pricePerFt: 25,
        includes: [
          "Deep Vacuum Carpets, Seats & Storage",
          "Shampoo & Deep Clean Upholstery",
          "Mildew & Stain Removal",
          "Clean & Sanitize Cupholders, Dash & Panels",
          "Polish Interior Chrome/Metal Fixtures",
          "UV Protectant on Vinyl/Leather",
          "Interior Windows & Mirrors",
          "Advanced Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Boat Basic Exterior",
        pricePerFt: 18,
        includes: [
          "Pressure Rinse Hull & Deck",
          "Gentle Soapy Wash",
          "Clean Windows/Windshield",
          "Basic Scrub Surfaces",
          "Tire Shine (Trailer Tires)",
        ],
      },
      premium: {
        name: "Boat Premium Exterior",
        pricePerFt: 28,
        includes: [
          "Pressure Rinse Hull & Deck",
          "Gentle Soapy Wash (Salt/Dirt Removal)",
          "Clean & Polish Windows/Windshield",
          "Scrub & Brighten Non-Skid Surfaces",
          "Polish Chrome & Metal Fixtures",
          "Wax/Sealant for UV & Water Protection",
          "Deep Clean Trailer",
        ],
      },
    },
    full: {
      basic: {
        name: "Boat Basic Full",
        pricePerFt: 30,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Boat Premium Full",
        pricePerFt: 45,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  jetski: {
    interior: {
      basic: {
        name: "Jet Ski Basic Interior",
        price: 100,
        includes: [
          "Clean Seat & Upholstery",
          "Wipe Down Console & Handlebars",
          "Clean Storage Compartments",
          "Basic Dusting",
          "Air Freshener",
        ],
      },
      premium: {
        name: "Jet Ski Premium Interior",
        price: 140,
        includes: [
          "Deep Clean Seat & Upholstery",
          "Mildew & Stain Removal",
          "Detailed Console & Controls",
          "Interior Compartments Sanitized",
          "Odor Elimination",
        ],
      },
    },
    exterior: {
      basic: {
        name: "Jet Ski Basic Exterior",
        price: 120,
        includes: [
          "Pressure Rinse Hull & Body",
          "Gentle Soap Wash + Hand Dry",
          "Clean Mirrors/Lights/Windshield",
          "Basic Scrub Surfaces",
          "Tire Shine (Trailer)",
        ],
      },
      premium: {
        name: "Jet Ski Premium Exterior",
        price: 160,
        includes: [
          "Pressure Rinse Hull & Body",
          "Gentle Soap Wash (Salt/Dirt Removal)",
          "Clean & Polish Mirrors/Lights/Windshield",
          "Scrub Non-Skid Mats",
          "Polish Chrome/Metal Fixtures",
          "Wax/Sealant Protection",
          "Deep Clean Trailer",
        ],
      },
    },
    full: {
      basic: {
        name: "Jet Ski Basic Full",
        price: 200,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "Jet Ski Premium Full",
        price: 280,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },

  rv: {
    interior: {
      basic: {
        name: "RV Basic Interior",
        pricePerFt: 20,
        includes: [
          "Vacuum Carpets, Upholstery & Floors",
          "Light Cleaning of Seats",
          "Kitchen Basic Wipe Down",
          "Bathroom Basic Cleaning",
          "Dust & Wipe Surfaces",
          "Interior Windows & Mirrors",
          "Clean Storage Compartments",
          "Air Freshener",
        ],
      },
      premium: {
        name: "RV Premium Interior",
        pricePerFt: 30,
        includes: [
          "Deep Vacuum Carpets, Upholstery & Floors",
          "Shampoo/Steam Clean Carpets & Upholstery",
          "Leather/Fabric Seats Deep Clean",
          "Kitchen Cleaning (Counters, Sink, Microwave, Fridge Exterior)",
          "Bathroom Cleaning (Shower, Toilet, Sink, Mirrors)",
          "Dust & Wipe Surfaces",
          "Interior Windows & Mirrors",
          "Clean Storage Compartments & Cabinets",
          "UV Protectant for Leather/Vinyl/Plastic",
          "Odor Elimination & Air Freshener",
        ],
      },
    },
    exterior: {
      basic: {
        name: "RV Basic Exterior",
        pricePerFt: 20,
        includes: [
          "Pressure Wash Roof, Sides & Awning",
          "Biodegradable Soap Wash",
          "Hand Dry with Microfiber Towels",
          "Clean Windows/Mirrors/Lights",
          "Basic Wheel & Tire Cleaning",
          "Clean Door Jams",
        ],
      },
      premium: {
        name: "RV Premium Exterior",
        pricePerFt: 30,
        includes: [
          "Pressure Wash Roof, Sides & Awning",
          "Biodegradable Soap Wash",
          "Hand Dry with Microfiber Towels",
          "Clean Windows/Mirrors/Lights",
          "Roof Wash & Sealant",
          "Wheel & Tire Cleaning + Shine",
          "Polish Chrome & Metal Fixtures",
          "Wax or Ceramic Sealant",
          "Clean Door Jams & Storage Bay Seals",
        ],
      },
    },
    full: {
      basic: {
        name: "RV Basic Full",
        pricePerFt: 35,
        includes: ["Basic Interior + Basic Exterior Packages"],
      },
      premium: {
        name: "RV Premium Full",
        pricePerFt: 50,
        includes: ["Premium Interior + Premium Exterior Packages"],
      },
    },
  },
};

// ---------------- Extra Main Services ----------------
export const extraServices: Record<string, Record<string, ServicePackage>> = {
  windowtinting: {
    centurionsides: {
      name: "Centurion Tint - Sides each window",
      price: 69,
      includes: [
        "Tint for sides each window",
      ],
    },
    centurionrear: {
      name: "Centurion Tint - Rear windshield",
      price: 99,
      includes: [
        "Tint for rear windshield",
      ],
    },
    centurionfront: {
      name: "Centurion Tint - Front windshield",
      price: 155,
      includes: [
        "Tint for front windshield",
      ],
    },
    centurionbrow: {
      name: "Centurion Tint - Brow",
      price: 60,
      includes: [
        "Tint for brow",
      ],
    },
    centurionroof: {
      name: "Centurion Tint - Roof window",
      price: 79,
      includes: [
        "Tint for roof window",
      ],
    },
    ceramiccenturionsides: {
      name: "Ceramic Centurion Tint - Sides each window",
      price: 89,
      includes: [
        "Ceramic tint for sides each window",
      ],
    },
    ceramiccenturionrear: {
      name: "Ceramic Centurion Tint - Rear windshield",
      price: 119,
      includes: [
        "Ceramic tint for rear windshield",
      ],
    },
    ceramiccenturionfront: {
      name: "Ceramic Centurion Tint - Front windshield",
      price: 200,
      includes: [
        "Ceramic tint for front windshield",
      ],
    },
    ceramiccenturionbrow: {
      name: "Ceramic Centurion Tint - Brow",
      price: 79,
      includes: [
        "Ceramic tint for brow",
      ],
    },
    ceramiccenturionroof: {
      name: "Ceramic Centurion Tint - Roof",
      price: 99,
      includes: [
        "Ceramic tint for roof",
      ],
    },
  },
  ceramiccoating: {
    oneYear: {
      name: "Ceramic Coating (1 Year)",
      price: 379,
      includes: [
        "Hand wash & clay bar",
        "Apply 1 layer ceramic coating",
        "Protection for 1 year",
      ],
    },
    fiveYear: {
      name: "Ceramic Coating (5 Years)",
      price: 579,
      includes: [
        "Hand wash & clay bar",
        "Apply 2 layers ceramic coating",
        "Enhanced gloss & hydrophobic protection",
        "Protection for 5 years",
      ],
    },
    tenYear: {
      name: "Ceramic Coating (10 Years)",
      price: 779,
      includes: [
        "Hand wash & clay bar",
        "Apply 3 layers ceramic coating",
        "Maximum gloss & durability",
        "Protection for 10 years",
      ],
    },
  },
};

// ---------------- Vehicle Types ----------------
export const vehicleTypes = [
  { id: "sedan", name: "Sedan" },
  { id: "suv", name: "SUV" },
  { id: "truck", name: "Truck" },
  { id: "van", name: "Van" },
  { id: "boat", name: "Boat" },
  { id: "rv", name: "RV" },
  { id: "jetski", name: "JetSki" },
  { id: "bike", name: "Bike" },
];

// ---------------- Additional Services ----------------
export const additionalServices = [
  { id: "odor_removal", name: "Odor Removal", price: 50 },
  { id: "pet_hair", name: "Pet Hair Removal", price: 40 },
  { id: "engine_cleaning", name: "Engine Cleaning", price: 70 },
  { id: "headlight_restore", name: "Headlight Restoration", price: 60 },
  { id: "paint_correction", name: "Paint Correction", price: 179 },
];

// ---------------- Time Slots ----------------
export const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM",
];

// ---------------- City-State Map ----------------
export const cityStateMap: Record<string, string> = {
  "Virginia Beach": "Virginia",
  "Norfolk": "Virginia",
  "Chesapeake": "Virginia",
  "Portsmouth": "Virginia",
  "Suffolk": "Virginia",
  "Hampton": "Virginia",
  "Newport News": "Virginia",
  "Poquoson": "Virginia",
  "Williamsburg": "Virginia",
  "Smithfield": "Virginia",
  "Yorktown": "Virginia",
  "Isle of Wight": "Virginia",
  "Gloucester": "Virginia",
  "Cape Charles": "Virginia",
  "Exmore": "Virginia",
  "Onancock": "Virginia",
  "Windsor": "Virginia",
  "Franklin": "Virginia",
  "Courtland": "Virginia",
};

// ---------------- All Cities (for booking.jsx) ----------------
export const allCities: Record<string, string> = {
  "New York": "NY",
  "Los Angeles": "CA", 
  "Chicago": "IL",
  "Houston": "TX",
  "Phoenix": "AZ",
  "Philadelphia": "PA",
  "San Antonio": "TX",
  "San Diego": "CA",
  "Dallas": "TX",
  "San Jose": "CA",
  "Austin": "TX",
  "Jacksonville": "FL",
  "Fort Worth": "TX",
  "Columbus": "OH",
  "Charlotte": "NC",
  "San Francisco": "CA",
  "Indianapolis": "IN",
  "Seattle": "WA",
  "Denver": "CO",
  "Washington": "DC",
  "Boston": "MA",
  "El Paso": "TX",
  "Nashville": "TN",
  "Detroit": "MI",
  "Oklahoma City": "OK",
  "Portland": "OR",
  "Las Vegas": "NV",
  "Memphis": "TN",
  "Louisville": "KY",
  "Baltimore": "MD",
  "Milwaukee": "WI",
  "Albuquerque": "NM",
  "Tucson": "AZ",
  "Fresno": "CA",
  "Sacramento": "CA",
  "Mesa": "AZ",
  "Kansas City": "MO",
  "Atlanta": "GA",
  "Long Beach": "CA",
  "Colorado Springs": "CO",
  "Raleigh": "NC",
  "Miami": "FL",
  "Virginia Beach": "VA",
  "Omaha": "NE",
  "Oakland": "CA",
  "Minneapolis": "MN",
  "Tulsa": "OK",
  "Arlington": "TX",
  "New Orleans": "LA",
  "Wichita": "KS",
  "Cleveland": "OH",
  "Tampa": "FL",
  "Bakersfield": "CA",
  "Aurora": "CO",
  "Anaheim": "CA",
  "Honolulu": "HI",
  "Santa Ana": "CA",
  "Riverside": "CA",
  "Corpus Christi": "TX",
  "Lexington": "KY",
  "Stockton": "CA",
  "St. Louis": "MO",
  "Saint Paul": "MN",
  "Henderson": "NV",
  "Pittsburgh": "PA",
  "Cincinnati": "OH",
  "Anchorage": "AK",
  "Greensboro": "NC",
  "Plano": "TX",
  "Newark": "NJ",
  "Lincoln": "NE",
  "Orlando": "FL",
  "Irvine": "CA",
  "Toledo": "OH"
};

// ---------------- Service Types ----------------
export const serviceTypes = [
  {
    id: "interior",
    name: "Interior",
    packages: [
      { id: "basic", name: "Basic Interior", price: 180 },
      { id: "premium", name: "Premium Interior", price: 220 },
    ],
  },
  {
    id: "exterior",
    name: "Exterior",
    packages: [
      { id: "basic", name: "Basic Exterior", price: 160 },
      { id: "premium", name: "Premium Exterior", price: 190 },
    ],
  },
  {
    id: "full",
    name: "Full",
    packages: [
      { id: "basic", name: "Basic Full", price: 220 },
      { id: "premium", name: "Premium Full", price: 300 },
    ],
  },
];

// ---------------- Price Calculation ----------------
export const calculateTotalPrice = (formData: any) => {
  let total = 0;
  const { vehicleType, packageType, extraService, vehicleSize, additionalServices: addons } = formData;

  if (!vehicleType || (!packageType && (!extraService || extraService === "none"))) return 0;

  // If extra service is selected
  if (extraService && extraService !== "none") {
    const extraPkg = extraServices[extraService]?.[packageType];
    if (extraPkg) {
      if (extraPkg.pricePerFt && vehicleSize) {
        total += extraPkg.pricePerFt * Number(vehicleSize);
      } else {
        total += extraPkg.price ?? 0;
      }
    }
  } else {
    // Cars, Trucks, Vans (nested)
    if (["suv", "truck", "van", "sedan"].includes(vehicleType)) {
      if (packageType) {
        const [category, pkgKey] = packageType.split("-"); // e.g., "interior-basic"
        const pkgObj = service[vehicleType]?.[category] as Record<string, ServicePackage>;
        const pkg = pkgObj?.[pkgKey];
        if (pkg) total += pkg.price ?? 0;
      }
    }

    // Boats / RVs
    if (["boat", "rv"].includes(vehicleType)) {
      const pkg = service[vehicleType]?.[packageType as keyof VehicleService] as ServicePackage;
      if (pkg) {
        if (pkg.pricePerFt && vehicleSize) {
          total += pkg.pricePerFt * Number(vehicleSize);
        } else {
          total += pkg.price ?? 0;
        }
      }
    }

    // Jetski / Bike (flat)
    if (["jetski", "bike"].includes(vehicleType)) {
      const pkg = service[vehicleType]?.[packageType] as ServicePackage;
      if (pkg) total += pkg.price ?? 0;
    }
  }

  // Add-ons
  if (addons?.length) {
    addons.forEach((addId: string) => {
      const add = additionalServices.find((a) => a.id === addId);
      if (add) total += add.price;
    });
  }

  return total;
};

// ---------------- Single Package Price ----------------
export const calculatePrice = (
  vehicleType: string,
  packageId: string,
  serviceCategory: string,
  vehicleSize?: number,
  extraService?: string
): number => {
  // Extra Services (WT / CC)
  if (extraService && extraService !== "none") {
    const pkg = extraServices[extraService]?.[packageId];
    if (!pkg) return 0;
    return pkg.pricePerFt && vehicleSize ? pkg.pricePerFt * vehicleSize : pkg.price || 0;
  }

  // All detailing services are nested: parse packageId to get category and key
  if (!packageId.includes("-")) return 0;
  const [, packageKey] = packageId.split("-"); // e.g., "interior-basic" -> "basic"
  const pkgObj = service[vehicleType]?.[serviceCategory] as Record<string, ServicePackage>;
  const pkg = pkgObj?.[packageKey];
  if (!pkg) return 0;

  // Use pricePerFt if available and vehicleSize provided, else use fixed price
  const size = vehicleSize && !isNaN(vehicleSize) ? vehicleSize : 0;
  const calculated = pkg.pricePerFt && size ? pkg.pricePerFt * size : pkg.price || 0;
  return typeof calculated === 'number' && !isNaN(calculated) ? calculated : 0;
};









// Add this to your src/utils/services.js file

// ---------------- Enhanced Main Services ----------------
export const enhancedMainServices = [
  {
    id: "detailing",
    title: "Premium Detailing",
    description: "Complete interior and exterior detailing services to restore your vehicle's showroom shine",
    icon: "✨",
    features: [
      "Deep cleaning & protection",
      "Paint correction",
      "Interior sanitization",
      "Odor elimination"
    ],
    startingPrice: 180,
    popular: true
  },
  {
    id: "ceramiccoating",
    title: "Ceramic Coating",
    description: "Long-lasting protection with advanced ceramic technology for superior gloss and durability",
    icon: "🔮",
    features: [
      "1-10 year protection",
      "Hydrophobic surface",
      "UV protection",
      "Easy maintenance"
    ],
    startingPrice: 379,
    popular: false
  },
  {
    id: "windowtinting",
    title: "Window Tinting",
    description: "Professional window tinting for privacy, UV protection, and enhanced comfort",
    icon: "🌅",
    features: [
      "Heat rejection",
      "UV protection",
      "Privacy & security",
      "Reduced glare"
    ],
    startingPrice: 69,
    popular: false
  },
  {
    id: "paintcorrection",
    title: "Paint Correction",
    description: "Remove swirl marks, scratches, and imperfections for flawless paint finish",
    icon: "🎨",
    features: [
      "Swirl mark removal",
      "Scratch repair",
      "Paint enhancement",
      "Gloss restoration"
    ],
    startingPrice: 179,
    popular: false
  }
];