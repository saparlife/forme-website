import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Blog from '@/components/Blog';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import LeadForm from '@/components/LeadForm';
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
        <CTA dict={dict} variant="consultation" />
        <Services dict={dict} />
        <LeadForm dict={dict} variant="tour" />
        <Benefits dict={dict} />
        <LeadForm dict={dict} variant="start" />
        <Blog dict={dict} locale={locale} />
        <CTA dict={dict} variant="trial" />
        <Location dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
