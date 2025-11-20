import Service from "@/pages/Service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Window Tinting Services - Decent Auto Detailing Karachi",
  description: "Expert window tinting services in Karachi for UV protection, heat reduction, and privacy. Professional installation with high-quality films. Book your appointment today!",
  keywords: "window tinting Karachi, car window tint Pakistan, UV protection tinting, privacy window film, Decent Auto Detailing window tint",
  alternates: {
    canonical: "https://decentautocaredetailing.vercel.app/services/window-tinting",
  },
  openGraph: {
    title: "Professional Window Tinting Services - Decent Auto Detailing Karachi",
    description: "Expert window tinting services in Karachi for UV protection, heat reduction, and privacy. Professional installation with high-quality films. Book your appointment today!",
    url: "https://decentautocaredetailing.vercel.app/services/window-tinting",
    siteName: "Decent Auto Detailing",
    images: [
      {
        url: "/pictures/WindowTintingAfter.png",
        width: 1200,
        height: 630,
        alt: "Window Tinting Services - Decent Auto Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Window Tinting Services - Decent Auto Detailing Karachi",
    description: "Expert window tinting services in Karachi for UV protection, heat reduction, and privacy. Professional installation with high-quality films. Book your appointment today!",
    images: ["/pictures/WindowTintingAfter.png"],
  },
};

export default function WindowTintingPage() {
  return <Service serviceId="window-tinting" />;
}
