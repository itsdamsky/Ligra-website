import HeroBanner from '@/components/HeroBanner';
import ComparisonSection from '@/components/ComparisonSection';
import GrowWithMgroSection from '@/components/GrowWithMgro';
import MgroVsPerliteSection from '@/components/MgroVsPerliteSection';
import GrowHighersection from '@/components/GrowHigherSection';
import PottedPlantsCertifiedSection from '@/components/PottedPlantsCertifiedSection';
import QuoteBannerSection from '@/components/QuoteBannerSection';

export default function GrowingMediaPage() {
  return (
    <main>
      <HeroBanner />
      <GrowWithMgroSection />
      <ComparisonSection />
      <MgroVsPerliteSection />
      <GrowHighersection />
      <PottedPlantsCertifiedSection />
      <QuoteBannerSection />
    </main>
  );
}
