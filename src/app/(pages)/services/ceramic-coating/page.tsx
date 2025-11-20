import Service from "@/pages/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceramic Coating Protection - Long-Lasting Car Paint Protection Karachi",
  description: "Advanced ceramic coating services in Karachi for superior paint protection. Hydrophobic coating that lasts years, protecting against scratches, UV rays, and contaminants.",
  keywords: "ceramic coating Karachi, car paint protection Pakistan, hydrophobic coating, nano ceramic coating, Decent Auto Detailing ceramic",
  alternates: {
    canonical: "https://decentautocaredetailing.vercel.app/services/ceramic-coating",
  },
  openGraph: {
    title: "Ceramic Coating Protection - Long-Lasting Car Paint Protection Karachi",
    description: "Advanced ceramic coating services in Karachi for superior paint protection. Hydrophobic coating that lasts years, protecting against scratches, UV rays, and contaminants.",
    url: "https://decentautocaredetailing.vercel.app/services/ceramic-coating",
    siteName: "Decent Auto Detailing",
    images: [
      {
        url: "/pictures/DecentAutoDetailing/Ceramic Coating.jpg",
        width: 1200,
        height: 630,
        alt: "Ceramic Coating Services - Decent Auto Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceramic Coating Protection - Long-Lasting Car Paint Protection Karachi",
    description: "Advanced ceramic coating services in Karachi for superior paint protection. Hydrophobic coating that lasts years, protecting against scratches, UV rays, and contaminants.",
    images: ["/pictures/DecentAutoDetailing/Ceramic Coating.jpg"],
  },
};

export default function CeramicCoatingPage() {
  return <Service serviceId="ceramic-coating" />;
}
