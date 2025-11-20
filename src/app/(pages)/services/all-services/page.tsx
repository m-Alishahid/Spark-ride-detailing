import Service from "@/pages/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Auto Detailing Services - Mobile Detailing, Ceramic Coating & More - Karachi",
  description: "Complete range of professional auto detailing services in Karachi including mobile detailing, window tinting, ceramic coating, and paint correction. Book your service today!",
  keywords: "auto detailing Karachi, car detailing services Pakistan, mobile detailing, ceramic coating, window tinting, paint correction, Decent Auto Detailing",
  alternates: {
    canonical: "https://decentautocaredetailing.vercel.app/services/all-services",
  },
  openGraph: {
    title: "All Auto Detailing Services - Mobile Detailing, Ceramic Coating & More - Karachi",
    description: "Complete range of professional auto detailing services in Karachi including mobile detailing, window tinting, ceramic coating, and paint correction. Book your service today!",
    url: "https://decentautocaredetailing.vercel.app/services/all-services",
    siteName: "Decent Auto Detailing",
    images: [
      {
        url: "/pictures/CarDetailing.jpg",
        width: 1200,
        height: 630,
        alt: "All Auto Detailing Services - Decent Auto Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Auto Detailing Services - Mobile Detailing, Ceramic Coating & More - Karachi",
    description: "Complete range of professional auto detailing services in Karachi including mobile detailing, window tinting, ceramic coating, and paint correction. Book your service today!",
    images: ["/pictures/CarDetailing.jpg"],
  },
};

export default function AllServicesPage() {
  return <Service serviceId="all-services" />;
}
