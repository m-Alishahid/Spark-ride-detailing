import type { Metadata } from "next";
import Index from "../pages/Index";

export const metadata: Metadata = {
  title: "Spark Ride - Premium Mobile Car Detailing Services",
  description: "Experience premium mobile car detailing services at your doorstep. We bring top-quality products and expert craftsmanship to deliver showroom shine wherever you are.",
  keywords: "car detailing, mobile detailing, window tint, ceramic coating, auto detailing, car wash, Spark Ride",
  authors: [{ name: "Spark Ride" }],
  creator: "Spark Ride",
  publisher: "Spark Ride",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sparkride.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spark Ride - Premium Mobile Car Detailing Services",
    description: "Experience premium mobile car detailing services at your doorstep. We bring top-quality products and expert craftsmanship to deliver showroom shine wherever you are.",
    url: "https://sparkride.com",
    siteName: "Spark Ride",
    images: [
      {
        url: "/pictures/spark-ride-logo.svg",
        width: 1200,
        height: 630,
        alt: "Spark Ride Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Ride - Premium Mobile Car Detailing Services",
    description: "Experience premium mobile car detailing services at your doorstep. We bring top-quality products and expert craftsmanship to deliver showroom shine wherever you are.",
    images: ["/pictures/spark-ride-logo.svg"],
    creator: "@sparkride",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <Index />;
}
