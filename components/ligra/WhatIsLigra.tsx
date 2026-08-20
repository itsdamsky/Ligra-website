import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import ApplicationsDiagram from "./ApplicationsDiagram";

const LIGRA_BLUE = "#048099";

const hexW = 175;
const hexH = 151.6; // hexW * 0.866
const gap = 8;

const colGap = hexW * 0.75 + gap;
const rowGap = hexH + gap;
const offsetGap = (hexH + gap) / 2; // offset naik-turun antar kolom

const hexagons = [
  { src: "/images/aggregates/aggregate-0.1-0.3mm.webp", size: "0.1 - 0.3mm", left: 0, top: rowGap, labelSide: "top" },
  { src: "/images/aggregates/aggregate-0.25-0.5mm.webp", size: "0.25 - 0.5mm", left: colGap, top: offsetGap, labelSide: "top" },
  { src: "/images/aggregates/aggregate-0.5-1mm.webp", size: "0.5 - 1mm", left: colGap * 2, top: 0, labelSide: "top" },
  { src: "/images/aggregates/aggregate-1-2mm.webp", size: "1 - 2mm", left: colGap * 2, top: rowGap, labelSide: "bottom" },
  { src: "/images/aggregates/aggregate-2-4mm.webp", size: "2 - 4mm", left: colGap * 3, top: offsetGap, labelSide: "bottom" },
  { src: "/images/aggregates/aggregate-4-8mm.webp", size: "4 - 8mm", left: colGap * 4, top: 0, labelSide: "bottom" },
];

const hexClip = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export default function WhatIsLigra() {
  return (
    <section
    className="relative py-20 overflow-hidden"
    style={{
        background: `
        radial-gradient(ellipse 600px 350px at 0% 100%, rgba(74, 157, 95, 0.28), transparent 65%),
        radial-gradient(ellipse 600px 350px at 100% 100%, rgba(74, 157, 95, 0.28), transparent 65%),
        #ffffff
        `,
    }}
    >
      <Container>
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 flex items-center gap-1 flex-wrap">
              What is
              <Image
                src="/images/logo/ligra.svg"
                alt="LiGrA"
                width={220}
                height={64}
                className="h-14 sm:h-16 lg:h-[70px] w-auto inline-block -mx-1"
              />
              ?
            </h2>

            <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-md">
              LiGrA is a lightweight green aggregate designed to deliver
              high-performance material solutions while reducing weight and
              supporting more sustainable construction.
            </p>

            <Link
              href="/growing-media/proven-performance"
              className="mt-7 inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-md transition-all duration-200 hover:shadow-lg hover:gap-3"
              style={{ backgroundColor: LIGRA_BLUE }}
            >
              Discover Our Technology →
            </Link>
          </div>

            <ApplicationsDiagram />

        </div>
      </Container>
    </section>
  );
}