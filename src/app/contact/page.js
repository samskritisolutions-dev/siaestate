import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactContent from '@/components/ContactContent';
import ContactDetails from '@/components/ContactDetails';
import ContactMap from '@/components/ContactMap';

export const metadata = {
  title: 'Contact Us | Sia Estates',
  description: 'Have a question or interested in our projects? Reach out to Sia Estates. Our team is here to help you find your dream home in Hyderabad.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
        <ContactDetails />
        <ContactMap />
      </main>
      <Footer />
    </SiteShell>
  );
}
