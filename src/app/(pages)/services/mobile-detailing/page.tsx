import Service from "@/pages/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Services - Convenient Car Detailing in Karachi",
  description: "Professional mobile auto detailing services in Karachi. We bring expert car detailing to your location including exterior wash, interior cleaning, and ceramic coating. Book now!",
  keywords: "mobile auto detailing Karachi, car detailing at home Pakistan, mobile car wash Karachi, convenient detailing services, Decent Auto Detailing mobile",
  alternates: {
    canonical: "https://decentautocaredetailing.vercel.app/services/mobile-detailing",
  },
  openGraph: {
    title: "Mobile Auto Detailing Services - Convenient Car Detailing in Karachi",
    description: "Professional mobile auto detailing services in Karachi. We bring expert car detailing to your location including exterior wash, interior cleaning, and ceramic coating. Book now!",
    url: "https://decentautocaredetailing.vercel.app/services/mobile-detailing",
    siteName: "Decent Auto Detailing",
    images: [
      {
        url: "/pictures/service-1.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile Auto Detailing Services - Decent Auto Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Auto Detailing Services - Convenient Car Detailing in Karachi",
    description: "Professional mobile auto detailing services in Karachi. We bring expert car detailing to your location including exterior wash, interior cleaning, and ceramic coating. Book now!",
    images: ["/pictures/service-1.jpg"],
  },
};

export default function MobileDetailingPage() {
  return <Service serviceId="mobile-detailing" />;
}
