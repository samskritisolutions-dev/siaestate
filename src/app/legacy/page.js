import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegacyHero from '@/components/LegacyHero';
import LegacyStats from '@/components/LegacyStats';
import LegacyTimeline from '@/components/LegacyTimeline';
import LegacyLeadership from '@/components/LegacyLeadership';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Our Legacy | 22 Years of Sia Estates',
  description: 'A journey of trust, excellence, and architectural brilliance. Discover the history and visionaries of Sia Estates.',
};

export default function LegacyPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main>
        <LegacyHero />
        <LegacyStats />
        <LegacyTimeline />
        <LegacyLeadership />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
