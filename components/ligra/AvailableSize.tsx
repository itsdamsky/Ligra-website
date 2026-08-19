import Image from "next/image";
import Container from "./Container";

const LIGRA_GREEN = "#4a9d5f";
const LIGRA_DARK = "#1e293b";

const hexW = 220;
const hexH = 190.5; // hexW * 0.866
const gap = 12;

const colGap = hexW * 0.75 + gap;
const rowGap = hexH + gap;
const offsetGap = (hexH + gap) / 2;

const hexagons = [
  { src: "/images/aggregates/aggregate-0.1-0.3mm.webp", size: "0.1 - 0.3mm", left: 0, top: rowGap, labelSide: "top" },
  { src: "/images/aggregates/aggregate-0.25-0.5mm.webp", size: "0.25 - 0.5mm", left: colGap, top: offsetGap, labelSide: "top" },
  { src: "/images/aggregates/aggregate-0.5-1mm.webp", size: "0.5 - 1mm", left: colGap * 2, top: 0, labelSide: "top" },
  { src: "/images/aggregates/aggregate-1-2mm.webp", size: "1 - 2mm", left: colGap * 2, top: rowGap, labelSide: "bottom" },
  { src: "/images/aggregates/aggregate-2-4mm.webp", size: "2 - 4mm", left: colGap * 3, top: offsetGap, labelSide: "bottom" },
  { src: "/images/aggregates/aggregate-4-8mm.webp", size: "4 - 8mm", left: colGap * 4, top: 0, labelSide: "bottom" },
];

const hexClip = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export default function AvailableSize() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 600px 350px at 0% 100%, rgba(74, 157, 95, 0.15), transparent 65%),
          radial-gradient(ellipse 600px 350px at 100% 0%, rgba(74, 157, 95, 0.15), transparent 65%),
          #ffffff
        `,
      }}
    >
      <Container>
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-center mb-16"
          style={{ color: LIGRA_DARK }}
        >
          Available Size Lightweight Green Aggregates (LiGrA™)
        </h2>

        {/* Hexagon cluster - desktop */}
        <div
          className="relative hidden md:flex justify-center items-center w-full"
          style={{ height: `${rowGap + hexH}px` }}
        >
          <div
            className="relative"
            style={{
              width: `${colGap * 4 + hexW}px`,
              height: `${rowGap + hexH}px`,
            }}
          >
            {hexagons.map((hex, i) => (
              <div
                key={hex.size}
                className="absolute animate-fade-in-up"
                style={{
                  left: `${hex.left}px`,
                  top: `${hex.top}px`,
                  width: `${hexW}px`,
                  height: `${hexH}px`,
                  animationDelay: `${i * 120}ms`,
                }}
              >
                {/* Leader line + label */}
                {hex.labelSide === "top" ? (
                  <div className="absolute -top-11 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-sm font-bold whitespace-nowrap mb-1" style={{ color: LIGRA_GREEN }}>
                      {hex.size}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#048099" }} />
                    <span className="w-px h-3" style={{ backgroundColor: "#048099" }} />
                  </div>
                ) : (
                  <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="w-px h-3" style={{ backgroundColor: "#048099" }} />
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#048099" }} />
                    <span className="text-sm font-bold whitespace-nowrap mt-1" style={{ color: LIGRA_GREEN }}>
                      {hex.size}
                    </span>
                  </div>
                )}

                {/* Hexagon image */}
                <div
                  className="relative w-full h-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:z-10"
                  style={{ clipPath: hexClip }}
                >
                  <Image
                    src={hex.src}
                    alt={`LiGrA aggregate ${hex.size}`}
                    fill
                    sizes="230px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="grid grid-cols-3 gap-4 md:hidden">
          {hexagons.map((hex) => (
            <div key={hex.size} className="flex flex-col items-center gap-2">
              <div className="relative w-24 h-24 overflow-hidden" style={{ clipPath: hexClip }}>
                <Image
                  src={hex.src}
                  alt={`LiGrA aggregate ${hex.size}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-bold text-center" style={{ color: LIGRA_GREEN }}>
                {hex.size}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}