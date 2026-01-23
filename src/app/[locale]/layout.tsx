import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1A1714",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// SEO metadata for each locale
const seoData: Record<Locale, {
  title: string;
  description: string;
  keywords: string[];
  ogLocale: string;
}> = {
  ru: {
    title: "FORME — Премиальный женский фитнес-клуб в Алматы | Персональные тренировки",
    description: "Приватный премиум фитнес-клуб для женщин в ЖК Metropole, Алматы. Персональные тренировки на TechnoGym. Без камер, полная приватность. Детская зона с няней. Записаться: +7 702 222 25 66",
    keywords: [
      "женский фитнес клуб Алматы",
      "премиум фитнес для женщин",
      "персональные тренировки Алматы",
      "приватный фитнес клуб",
      "TechnoGym Алматы",
      "фитнес без камер",
      "женский тренажерный зал",
      "фитнес ЖК Metropole",
      "Аль-Фараби фитнес",
      "forme fitness",
      "форме фитнес Алматы",
      "фитнес с детской комнатой",
      "элитный фитнес клуб",
      "VIP фитнес Алматы",
      "тренировки для женщин Алматы",
    ],
    ogLocale: "ru_RU",
  },
  kk: {
    title: "FORME — Алматыдағы премиум әйелдер фитнес-клубы | Жеке жаттығулар",
    description: "Алматы, ЖК Metropole-дегі әйелдерге арналған жеке премиум фитнес-клуб. TechnoGym жабдығында жеке жаттығулар. Камерасыз, толық құпиялық. Күтушімен балалар бөлмесі. Жазылу: +7 702 222 25 66",
    keywords: [
      "әйелдер фитнес клубы Алматы",
      "премиум фитнес әйелдерге",
      "жеке жаттығулар Алматы",
      "жеке фитнес клуб",
      "TechnoGym Алматы",
      "камерасыз фитнес",
      "әйелдер тренажер залы",
      "фитнес ЖК Metropole",
      "Әл-Фараби фитнес",
      "forme fitness",
      "форме фитнес Алматы",
      "балалар бөлмесі бар фитнес",
      "элиталық фитнес клуб",
      "VIP фитнес Алматы",
    ],
    ogLocale: "kk_KZ",
  },
  en: {
    title: "FORME — Premium Women's Fitness Club in Almaty | Personal Training",
    description: "Private premium fitness club for women in Metropole Residence, Almaty. Personal training on TechnoGym equipment. No cameras, complete privacy. Kids zone with nanny. Book: +7 702 222 25 66",
    keywords: [
      "women fitness club Almaty",
      "premium fitness for women",
      "personal training Almaty",
      "private fitness club",
      "TechnoGym Almaty",
      "no camera fitness",
      "women gym Almaty",
      "fitness Metropole Residence",
      "Al-Farabi fitness",
      "forme fitness",
      "fitness with kids room",
      "elite fitness club",
      "VIP fitness Almaty",
      "women workout Almaty",
      "luxury gym Kazakhstan",
    ],
    ogLocale: "en_US",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const seo = seoData[locale];

  return {
    metadataBase: new URL("https://forme.kz"),
    title: {
      default: seo.title,
      template: "%s | FORME",
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "FORME", url: "https://forme.kz" }],
    creator: "FORME",
    publisher: "FORME",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    alternates: {
      canonical: `https://forme.kz/${locale}`,
      languages: {
        "ru": "https://forme.kz/ru",
        "kk": "https://forme.kz/kk",
        "en": "https://forme.kz/en",
        "x-default": "https://forme.kz/ru",
      },
    },
    openGraph: {
      type: "website",
      locale: seo.ogLocale,
      alternateLocale: locales.filter(l => l !== locale).map(l => seoData[l].ogLocale),
      url: `https://forme.kz/${locale}`,
      siteName: "FORME",
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "https://forme.kz/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: locale === 'ru' ? "FORME — Премиальный женский фитнес-клуб" : locale === 'kk' ? "FORME — Премиум әйелдер фитнес-клубы" : "FORME — Premium Women's Fitness Club",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["https://forme.kz/images/og-image.jpg"],
      creator: "@forme_women",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.json",
    category: "fitness",
    classification: "Business",
    other: {
      "geo.region": "KZ-ALA",
      "geo.placename": "Almaty",
      "geo.position": "43.218;76.9282",
      "ICBM": "43.218, 76.9282",
    },
  };
}

// JSON-LD Structured Data with locale support
function getJsonLd(locale: Locale) {
  const names: Record<Locale, string> = {
    ru: "FORME — Премиальный женский фитнес-клуб",
    kk: "FORME — Премиум әйелдер фитнес-клубы",
    en: "FORME — Premium Women's Fitness Club",
  };

  const descriptions: Record<Locale, string> = {
    ru: "Приватный премиальный фитнес-клуб для женщин в Алматы. Персональные тренировки на оборудовании TechnoGym. Полная приватность, без камер.",
    kk: "Алматыдағы әйелдерге арналған жеке премиум фитнес-клуб. TechnoGym жабдығында жеке жаттығулар. Толық құпиялық, камерасыз.",
    en: "Private premium fitness club for women in Almaty. Personal training on TechnoGym equipment. Complete privacy, no cameras.",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SportsActivityLocation",
        "@id": "https://forme.kz/#organization",
        name: names[locale],
        alternateName: "FORME",
        description: descriptions[locale],
        url: `https://forme.kz/${locale}`,
        telephone: "+77022222566",
        email: "Forme.gym@list.ru",
        address: {
          "@type": "PostalAddress",
          streetAddress: locale === 'kk' ? "Әл-Фараби, 41/7, блок 7" : locale === 'en' ? "Al-Farabi, 41/7, block 7" : "Аль-Фараби, 41/7, блок 7",
          addressLocality: locale === 'kk' ? "Алматы" : "Almaty",
          addressRegion: locale === 'kk' ? "Алматы қаласы" : "Almaty",
          postalCode: "050059",
          addressCountry: "KZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.218,
          longitude: 76.9282,
        },
        image: "https://forme.kz/images/og-image.jpg",
        logo: "https://forme.kz/images/logo.png",
        priceRange: "$$$",
        currenciesAccepted: "KZT",
        paymentAccepted: "Cash, Credit Card",
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
          { "@type": "LocationFeatureSpecification", name: "TechnoGym Equipment", value: true },
          { "@type": "LocationFeatureSpecification", name: "Personal Training", value: true },
          { "@type": "LocationFeatureSpecification", name: "Women Only", value: true },
          { "@type": "LocationFeatureSpecification", name: "Private Training", value: true },
          { "@type": "LocationFeatureSpecification", name: "Kids Area", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sauna", value: true },
          { "@type": "LocationFeatureSpecification", name: "No Cameras Policy", value: true },
        ],
        sameAs: [
          "https://www.instagram.com/forme.women",
          "https://wa.me/77022222566",
        ],
        hasMap: "https://go.2gis.com/0oeQS",
      },
      {
        "@type": "WebSite",
        "@id": "https://forme.kz/#website",
        url: "https://forme.kz",
        name: "FORME",
        description: descriptions[locale],
        publisher: { "@id": "https://forme.kz/#organization" },
        inLanguage: locale === 'kk' ? 'kk-KZ' : locale === 'en' ? 'en-US' : 'ru-RU',
        potentialAction: {
          "@type": "SearchAction",
          target: `https://forme.kz/${locale}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://forme.kz/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === 'ru' ? "Главная" : locale === 'kk' ? "Басты бет" : "Home",
            item: `https://forme.kz/${locale}`,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://forme.kz/#localbusiness",
        name: names[locale],
        image: "https://forme.kz/images/og-image.jpg",
        telephone: "+77022222566",
        address: {
          "@type": "PostalAddress",
          streetAddress: locale === 'kk' ? "Әл-Фараби, 41/7" : locale === 'en' ? "Al-Farabi, 41/7" : "Аль-Фараби, 41/7",
          addressLocality: locale === 'kk' ? "Алматы" : "Almaty",
          addressCountry: "KZ",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "47",
        },
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const jsonLd = getJsonLd(locale);

  return (
    <html lang={locale === 'kk' ? 'kk' : locale === 'en' ? 'en' : 'ru'}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
