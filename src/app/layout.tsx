import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Spark Ride - Premium Auto Detailing Services in Virginia",
  description: "Professional auto detailing in Virginia. Mobile car wash, ceramic coating, window tinting, paint correction. Transform your vehicle with Spark Ride's expert detailing services.",
  keywords: "auto detailing Virginia, car detailing, mobile car wash, ceramic coating, window tinting, paint correction, interior detailing, Spark Ride",
  authors: [{ name: "Spark Ride" }],
  creator: "Spark Ride",
  publisher: "Spark Ride",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sparkride.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Spark Ride - Premium Auto Detailing Services in Virginia",
    description: "Professional auto detailing in Virginia. Mobile car wash, ceramic coating, window tinting, paint correction. Transform your vehicle with Spark Ride's expert detailing services.",
    url: "https://sparkride.vercel.app",
    siteName: "Spark Ride",
    images: [
      {
        url: "/pictures/sparkride.png",
        width: 1200,
        height: 630,
        alt: "Spark Ride - Premium Auto Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Ride - Premium Auto Detailing Services in Virginia",
    description: "Professional auto detailing in Virginia. Mobile car wash, ceramic coating, window tinting, paint correction. Transform your vehicle with Spark Ride's expert detailing services.",
    images: ["/pictures/sparkride.png"],
    creator: "@SparkRideVA",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/pictures/sparkride.png",
    shortcut: "/pictures/sparkride.png",
    apple: "/pictures/sparkride.png",
  },
  verification: {
    google: "your-google-search-console-verification", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}

        {/* JSON-LD Schema Markup for LocalBusiness - Virginia */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Spark Ride",
              "description": "Premium auto detailing services in Virginia including mobile car wash, ceramic coating, window tinting, paint correction, and interior detailing.",
              "url": "https://sparkride.vercel.app",
              "telephone": "+1 (703) XXX-XXXX",
              "email": "info@sparkride.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Auto Care Lane",
                "addressLocality": "Richmond",
                "addressRegion": "VA",
                "postalCode": "23220",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "State",
                "name": "Virginia"
              },
              "serviceType": [
                "Auto Detailing",
                "Car Wash",
                "Ceramic Coating",
                "Window Tinting",
                "Paint Correction"
              ],
              "sameAs": [
                "https://www.instagram.com/sparkride_va",
                "https://www.facebook.com/sparkrideva",
                "https://twitter.com/SparkRideVA"
              ],
              "image": "https://sparkride.vercel.app/pictures/sparkride.png",
              "priceRange": "$$",
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-17:00",
                "Su 09:00-16:00"
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
              "currenciesAccepted": "USD",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Detailing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Basic Wash & Detail",
                      "description": "Exterior wash and interior vacuuming"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ceramic Coating",
                      "description": "Professional ceramic coating application"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Window Tinting",
                      "description": "Premium window tinting services"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Additional Schema for Auto Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBusiness",
              "name": "Spark Ride",
              "description": "Professional auto detailing and car care services in Virginia",
              "url": "https://sparkride.vercel.app",
              "telephone": "+1 (703) XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Richmond",
                "addressRegion": "VA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.5407",
                "longitude": "-77.4360"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-17:00, Su 09:00-16:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "State",
                "name": "Virginia"
              }
            })
          }}
        />

        {/* ✅ Global Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
          }}
        />

        {/* Tawk.to Live Chat */}
        <div dangerouslySetInnerHTML={{
          __html: `<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69207a0f3430481966e589eb/1jajdpja7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->`
        }} />

        {/* Google Analytics Script (Uncomment and add your GA ID) */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID');
            `,
          }}
        /> */}
      </body>
    </html>
  );
}