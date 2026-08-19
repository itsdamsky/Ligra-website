import HeroBanner from '@/components/HeroBanner';
import ComparisonSection from '@/components/ComparisonSection';
import GrowWithMgroSection from '@/components/GrowWithMgro';
import MgroVsPerliteSection from '@/components/MgroVsPerliteSection';
import GrowHighersection from '@/components/GrowHigherSection';
import PottedPlantsCertifiedSection from '@/components/PottedPlantsCertifiedSection';
import QuoteBannerSection from '@/components/QuoteBannerSection';
import Reveal from '@/components/Reveal';

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