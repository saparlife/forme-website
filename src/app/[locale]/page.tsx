import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Blog from '@/components/Blog';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { getDictionary } from '@/i18n/get-dictionary';
import type { Locale } from '@/i18n/config';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Services dict={dict} />
        <Benefits dict={dict} />
        <Blog dict={dict} locale={locale} />
        <Location dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
