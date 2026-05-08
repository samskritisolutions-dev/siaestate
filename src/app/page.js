import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Manifesto from '@/components/Manifesto';
import Prospera from '@/components/Prospera';
import ProjectUpdates from '@/components/ProjectUpdates';
import WhyUs from '@/components/WhyUs';
import Upcoming from '@/components/Upcoming';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <Hero />
      <Marquee />
      <Manifesto />
      <Prospera />
      <ProjectUpdates />
      <WhyUs />
      <Upcoming />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </SiteShell>
  );
}
