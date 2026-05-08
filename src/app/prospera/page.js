import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProsperaHero from '@/components/ProsperaHero';
import ProsperaLocation from '@/components/ProsperaLocation';
import ProsperaVirtualTour from '@/components/ProsperaVirtualTour';
import ProsperaEngineering from '@/components/ProsperaEngineering';
import ProsperaMasterPlan from '@/components/ProsperaMasterPlan';
import ProsperaAmenities from '@/components/ProsperaAmenities';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Indis Sia Prospera | Miyapur, Hyderabad',
  description: 'Experience Indis Sia Prospera in Miyapur. Explore our 360° virtual tour, master plan, and premium amenities.',
};

export default function ProsperaPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main>
        <ProsperaHero />
        <ProsperaLocation />
        <ProsperaVirtualTour />
        <ProsperaEngineering />
        <ProsperaMasterPlan />
        <ProsperaAmenities />
      </main>
      <Footer />
    </SiteShell>
  );
}
