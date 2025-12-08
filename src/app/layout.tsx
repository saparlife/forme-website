import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1714",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://forme.kz"),
  title: {
    default: "FORME — Премиальный женский фитнес-клуб в Алматы",
    template: "%s | FORME",
  },
  description:
    "Приватный премиальный фитнес-клуб для женщин в ЖК Metropole, Алматы. Персональные тренировки на оборудовании TechnoGym. Никаких камер, полная приватность. Записаться: +7 700 250 2222",
  keywords: [
    "фитнес клуб Алматы",
    "женский фитнес",
    "премиум фитнес",
    "персональные тренировки Алматы",
    "приватный фитнес",
    "TechnoGym Алматы",
    "фитнес для женщин",
    "тренажерный зал Алматы",
    "ЖК Metropole фитнес",
    "Аль-Фараби фитнес",
    "forme kz",
    "форме фитнес",
  ],
  authors: [{ name: "FORME" }],
  creator: "FORME",
  publisher: "FORME",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://forme.kz",
    languages: {
      "ru-KZ": "https://forme.kz",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "https://forme.kz",
    siteName: "FORME",
    title: "FORME — Премиальный женский фитнес-клуб в Алматы",
    description:
      "Приватный премиальный фитнес-клуб для женщин. Персональные тренировки на оборудовании TechnoGym. Полная приватность.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FORME — Премиальный женский фитнес-клуб",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORME — Премиальный женский фитнес-клуб в Алматы",
    description:
      "Приватный премиальный фитнес-клуб для женщин. Персональные тренировки на TechnoGym.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "fitness",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "FORME",
  description:
    "Приватный премиальный фитнес-клуб для женщин в Алматы. Персональные тренировки на оборудовании TechnoGym.",
  url: "https://forme.kz",
  telephone: "+77002502222",
  email: "info@forme.kz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Аль-Фараби, 41/7, блок 7",
    addressLocality: "Алматы",
    addressRegion: "Алматы",
    postalCode: "050059",
    addressCountry: "KZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2180,
    longitude: 76.9282,
  },
  image: "https://forme.kz/images/og-image.jpg",
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "TechnoGym Equipment" },
    { "@type": "LocationFeatureSpecification", name: "Personal Training" },
    { "@type": "LocationFeatureSpecification", name: "Women Only" },
    { "@type": "LocationFeatureSpecification", name: "Private Training" },
    { "@type": "LocationFeatureSpecification", name: "Kids Area" },
    { "@type": "LocationFeatureSpecification", name: "Sauna" },
  ],
  sameAs: [
    "https://instagram.com/forme.kz",
    "https://wa.me/77002502222",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
