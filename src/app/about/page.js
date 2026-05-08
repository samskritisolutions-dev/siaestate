import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import ChoiceOfCustomers from '@/components/ChoiceOfCustomers';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'About Us | Sia Estates',
  description: 'Learn more about Sia Estates, our mission, vision, and why thousands of families trust us.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <ChoiceOfCustomers />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
