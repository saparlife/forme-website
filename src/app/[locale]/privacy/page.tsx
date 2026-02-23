import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    ru: 'Политика конфиденциальности',
    kk: 'Құпиялық саясаты',
    en: 'Privacy Policy',
  };
  return {
    title: titles[locale] || titles.ru,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);
  const p = dict.privacy;

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="bg-[#1A1714] py-6">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href={`/${locale}`}>
            <Image
              src="/images/logo.png"
              alt="FORMĒ"
              width={100}
              height={32}
              className="h-6 w-auto brightness-0 invert"
            />
          </Link>
          <Link
            href={`/${locale}`}
            className="text-white/60 text-sm hover:text-[#B59F7E] transition-colors"
          >
            ← {locale === 'kk' ? 'Басты бет' : locale === 'en' ? 'Home' : 'Главная'}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="heading-lg text-[#1A1714] mb-2">{p.title}</h1>
        <p className="text-sm text-[#1A1714]/40 mb-10">{p.lastUpdated}</p>

        <p className="text-[#1A1714]/70 leading-relaxed mb-10">{p.intro}</p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section1Title}</h2>
          <p className="text-[#1A1714]/70 mb-3">{p.section1Text}</p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#1A1714]/70">
            {p.section1Items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section2Title}</h2>
          <p className="text-[#1A1714]/70 mb-3">{p.section2Text}</p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#1A1714]/70">
            {p.section2Items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section3Title}</h2>
          <p className="text-[#1A1714]/70">{p.section3Text}</p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section4Title}</h2>
          <p className="text-[#1A1714]/70">{p.section4Text}</p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section5Title}</h2>
          <p className="text-[#1A1714]/70 mb-3">{p.section5Text}</p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#1A1714]/70">
            {p.section5Items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section6Title}</h2>
          <p className="text-[#1A1714]/70">{p.section6Text}</p>
        </section>

        {/* Section 7 - Contacts */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[#1A1714] mb-3">{p.section7Title}</h2>
          <p className="text-[#1A1714]/70 mb-3">{p.section7Text}</p>
          <div className="bg-white border border-[#1A1714]/10 rounded-2xl p-6 space-y-2">
            <p className="text-[#1A1714]/70">{p.contactEmail}</p>
            <p className="text-[#1A1714]/70">{p.contactPhone}</p>
            <p className="text-[#1A1714]/70">{p.contactAddress}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1714] py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} FORMĒ. {dict.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
