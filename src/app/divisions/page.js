import SiteShell from '@/components/SiteShell';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryShowcase from '@/components/CategoryShowcase';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Divisions | Sia Estates',
  description: 'Explore our diverse portfolio across Agriculture, Real Estate, and Strategic Assets.',
};

export default function CategoriesPage() {
  return (
    <SiteShell>
      <CustomCursor />
      <Header />
      <main className="bg-ink min-h-screen">
        <Breadcrumb 
          title="Our Divisions" 
          bgImage="images/breadcrumb.jpg"
        />
        <CategoryShowcase />
        <div className="bg-bone">
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </SiteShell>
  );
}
