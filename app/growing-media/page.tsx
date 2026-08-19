import HeroBanner from '@/components/product/mgro/HeroBanner';
import ComparisonSection from '@/components/product/mgro/ComparisonSection';
import GrowWithMgroSection from '@/components/product/mgro/GrowWithMgro';
import MgroVsPerliteSection from '@/components/product/mgro/MgroVsPerliteSection';
import GrowHighersection from '@/components/product/mgro/GrowHigherSection';
import PottedPlantsCertifiedSection from '@/components/product/mgro/PottedPlantsCertifiedSection';
import QuoteBannerSection from '@/components/product/mgro/QuoteBannerSection';
import Reveal from '@/components/product/mgro/Reveal';

export default function GrowingMediaPage() {
  return (
    <main>
      <HeroBanner />

      <Reveal>
        <GrowWithMgroSection />
      </Reveal>

      <Reveal delay={0.05}>
        <ComparisonSection />
      </Reveal>

      <Reveal>
        <MgroVsPerliteSection />
      </Reveal>

      <Reveal>
        <GrowHighersection />
      </Reveal>

      <Reveal>
        <PottedPlantsCertifiedSection />
      </Reveal>

      <Reveal y={30}>
        <QuoteBannerSection />
      </Reveal>
    </main>
  );
}