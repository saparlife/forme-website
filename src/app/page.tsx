import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
// import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        {/* <Testimonials /> */}
        <Blog />
        <Location />
      </main>
      <Footer />
    </>
  );
}
