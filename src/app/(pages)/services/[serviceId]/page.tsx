import Service from "@/pages/Service";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

const serviceData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  image: string;
}> = {
  'mobile-detailing': {
    title: "Mobile Auto Detailing Services - Convenient Car Detailing in Karachi",
    description: "Professional mobile auto detailing services in Karachi. We bring expert car detailing to your location including exterior wash, interior cleaning, and ceramic coating. Book now!",
    keywords: "mobile auto detailing Karachi, car detailing at home Pakistan, mobile car wash Karachi, convenient detailing services, Spark Ride mobile",
    image: "/pictures/service-1.jpg"
  },
  'window-tinting': {
    title: "Professional Window Tinting Services - Spark Ride Karachi",
    description: "Expert window tinting services in Karachi for UV protection, heat reduction, and privacy. Professional installation with high-quality films. Book your appointment today!",
    keywords: "window tinting Karachi, car window tint Pakistan, UV protection tinting, privacy window film, Spark Ride window tint",
    image: "/pictures/window-tint.jpg"
  },
  'ceramic-coating': {
    title: "Ceramic Coating Protection - Long-Lasting Car Paint Protection Karachi",
    description: "Advanced ceramic coating services in Karachi for superior paint protection. Hydrophobic coating that lasts years, protecting against scratches, UV rays, and contaminants.",
    keywords: "ceramic coating Karachi, car paint protection Pakistan, hydrophobic coating, nano ceramic coating, Spark Ride ceramic",
    image: "/pictures/DecentAutoDetailing/Ceramic Coating.jpg"
  },
  'paint-correction': {
    title: "Professional Paint Correction Services - Spark Ride Karachi",
    description: "Expert paint correction services in Karachi to remove swirl marks, scratches, and restore your car's original shine. Professional polishing and protection.",
    keywords: "paint correction Karachi, car paint restoration Pakistan, swirl mark removal, car polishing, Spark Ride paint correction",
    image: "/pictures/CarDetailing.jpg"
  },
  'all-services': {
    title: "All Auto Detailing Services - Spark Ride Karachi",
    description: "Complete range of professional auto detailing services in Karachi. Mobile detailing, ceramic coating, window tinting, paint correction and more. Book now!",
    keywords: "auto detailing Karachi, car detailing services Pakistan, mobile detailing, ceramic coating, window tinting, Spark Ride services",
    image: "/pictures/SedanCarDetailing.jpeg"
  }
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = serviceData[serviceId];

  if (!service) {
    return {
      title: "Service Not Found - Spark Ride",
      description: "The requested service could not be found. Browse our professional car detailing services in Karachi.",
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://sparkride.com/services/${serviceId}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://sparkride.com/services/${serviceId}`,
      siteName: "Spark Ride",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - Spark Ride`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  return <Service serviceId={serviceId} />;
}

// Generate static params for better performance
export async function generateStaticParams() {
  return [
    { serviceId: 'mobile-detailing' },
    { serviceId: 'window-tinting' },
    { serviceId: 'ceramic-coating' },
    { serviceId: 'paint-correction' },
    { serviceId: 'all-services' },
  ];
}