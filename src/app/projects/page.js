import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/ProjectsHero';
import OngoingProject from '@/components/OngoingProject';
import ProjectEndeavors from '@/components/ProjectEndeavors';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Our Projects | Sia Estates Portfolio',
  description: 'Explore the diverse portfolio of Sia Estates, from our flagship ongoing project Indis Sia Prospera to our successful legacy developments across Hyderabad.',
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main>
        <ProjectsHero />
        <OngoingProject />
        <ProjectEndeavors />
        <ContactCTA />
      </main>
      <Footer />
    </SiteShell>
  );
}
