import { Building2, Flame, Volume2, Landmark, Box, PenTool, Sprout } from "lucide-react";

// Palette sampled from the LiGrA "G" logo mark
const LIGRA_BLUE = "#2f7e93";   // teal/blue swoosh
const ORANGE = "#e07b39";       // orange arc
const LIGRA_GREEN = "#6ba043";  // green arc
const LIGRA_RED = "#a3393c";    // maroon/red arc

const W = 900;
const H = 420;
const CX = 450;
const CY = 210;
const R = 95;
const RING1_R = R + 14; // inner dotted ring
const RING2_R = R + 28; // outer dotted ring
const LINE_END_R = RING2_R + 16; // connector lines sit outside both rings, with a gap

function circlePoint2(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY - radius * Math.sin(rad),
  };
}

// Smooth S-curve from a card edge to a point on the circle.
// Starts horizontal at the card, ends tangent-ish at the circle point.
function smoothCurve(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}

// Vertical version for the bottom connector (Growing Media -> circle)
function smoothCurveVertical(x1: number, y1: number, x2: number, y2: number) {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

const leftItems = [
  { icon: Building2, label: "Construction\nMaterials", color: LIGRA_GREEN, top: 20, angle: 155 },
  { icon: Flame, label: "Fire\nProtection", color: ORANGE, top: 165, angle: 180 },
  { icon: Volume2, label: "Acoustic\nSolutions", color: LIGRA_BLUE, top: 310, angle: 205 },
];

const rightItems = [
  { icon: Landmark, label: "Architectural\nMaterials", color: LIGRA_GREEN, top: 20, angle: 25 },
  { icon: Box, label: "Lightweight\nConcrete", color: ORANGE, top: 165, angle: 0 },
  { icon: PenTool, label: "GFRC &\nFinishing", color: LIGRA_BLUE, top: 310, angle: -25 },
];

const CARD_W = 220;
const CARD_H = 90;

export default function ApplicationsDiagram() {
  return (
    <div
      className="relative hidden md:block mx-auto"
      style={{ width: `${W}px`, height: `${H}px` }}
    >
      {/* Connector lines */}
      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {leftItems.map((item, i) => {
          const x1 = CARD_W;
          const y1 = item.top + CARD_H / 2;
          const pt = circlePoint2(item.angle, LINE_END_R);
          return (
            <g key={`l-${i}`}>
              <path
                d={smoothCurve(x1, y1, pt.x, pt.y)}
                fill="none"
                stroke={item.color}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <circle cx={x1} cy={y1} r={4} fill={item.color} />
              <circle cx={pt.x} cy={pt.y} r={4} fill={item.color} />
            </g>
          );
        })}

        {rightItems.map((item, i) => {
          const x1 = W - CARD_W;
          const y1 = item.top + CARD_H / 2;
          const pt = circlePoint2(item.angle, LINE_END_R);
          return (
            <g key={`r-${i}`}>
              <path
                d={smoothCurve(x1, y1, pt.x, pt.y)}
                fill="none"
                stroke={item.color}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <circle cx={x1} cy={y1} r={4} fill={item.color} />
              <circle cx={pt.x} cy={pt.y} r={4} fill={item.color} />
            </g>
          );
        })}

        {/* Bottom connector */}
        {(() => {
          const x1 = CX;
          const y1 = 370;
          const pt = circlePoint2(270, LINE_END_R);
          return (
            <g>
              <path
                d={smoothCurveVertical(x1, y1, pt.x, pt.y)}
                fill="none"
                stroke={LIGRA_GREEN}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <circle cx={x1} cy={y1} r={4} fill={LIGRA_GREEN} />
              <circle cx={pt.x} cy={pt.y} r={4} fill={LIGRA_GREEN} />
            </g>
          );
        })()}

        {/* Two concentric dotted rings around the center circle */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i / 36) * 360;
          const pt = circlePoint2(angle, RING1_R);
          return (
            <circle
              key={`ring1-dot-${i}`}
              cx={pt.x}
              cy={pt.y}
              r={1.6}
              fill="#c7ccd1"
            />
          );
        })}
        {Array.from({ length: 48 }).map((_, i) => {
          const angle = (i / 48) * 360;
          const pt = circlePoint2(angle, RING2_R);
          return (
            <circle
              key={`ring2-dot-${i}`}
              cx={pt.x}
              cy={pt.y}
              r={1.6}
              fill="#c7ccd1"
            />
          );
        })}

        {/* Decorative corner dot grids */}
        {[
          { ox: 40, oy: 20 },
          { ox: W - 120, oy: H - 60 },
        ].map((corner, gi) => (
          <g key={`grid-${gi}`}>
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle
                  key={`grid-${gi}-${row}-${col}`}
                  cx={corner.ox + col * 12}
                  cy={corner.oy + row * 12}
                  r={1.4}
                  fill="#d6dade"
                />
              ))
            )}
          </g>
        ))}
      </svg>

      {/* Left cards */}
      {leftItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="absolute left-0 flex items-center justify-center gap-3 bg-white shadow-md px-4 py-4 animate-fade-in-up transition-all duration-200 ease-out cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              top: `${item.top}px`,
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              borderRadius: "28px",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <Icon size={24} color={item.color} strokeWidth={1.75} />
            <span className="text-sm font-bold text-gray-800 whitespace-pre-line leading-tight text-center">
              {item.label}
            </span>
          </div>
        );
      })}

      {/* Right cards */}
      {rightItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="absolute right-0 flex items-center justify-center gap-3 bg-white shadow-md px-4 py-4 animate-fade-in-up transition-all duration-200 ease-out cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]"
            style={{
              top: `${item.top}px`,
              width: `${CARD_W}px`,
              height: `${CARD_H}px`,
              borderRadius: "28px",
              animationDelay: `${(i + 3) * 100}ms`,
            }}
          >
            <Icon size={24} color={item.color} strokeWidth={1.75} />
            <span className="text-sm font-bold text-gray-800 whitespace-pre-line leading-tight text-center">
              {item.label}
            </span>
          </div>
        );
      })}

      {/* Center circle */}
      <div
        className="absolute rounded-full flex flex-col items-center justify-center text-white text-center"
        style={{
          width: `${R * 2}px`,
          height: `${R * 2}px`,
          left: `${CX - R}px`,
          top: `${CY - R}px`,
          backgroundColor: LIGRA_BLUE,
        }}
      >
        <span className="text-2xl font-extrabold">LiGrA</span>
        <span className="text-[10px] tracking-wide mt-1 opacity-90 px-4">
          LIGHTWEIGHT
          <br />
          GREEN AGGREGATES
        </span>
      </div>

      {/* Bottom card - Growing Media */}
      <div
        className="absolute flex items-center justify-center gap-3 bg-white shadow-md px-4 py-4 animate-fade-in-up transition-all duration-200 ease-out cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]"
        style={{
          top: "370px",
          left: `${CX - CARD_W / 2}px`,
          width: `${CARD_W}px`,
          height: `${CARD_H}px`,
          borderRadius: "28px",
          animationDelay: "600ms",
        }}
      >
        <Sprout size={24} color={LIGRA_GREEN} strokeWidth={1.75} />
        <span className="text-sm font-bold text-gray-800 whitespace-pre-line leading-tight text-center">
          Growing{"\n"}Media
        </span>
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {[...leftItems, ...rightItems].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-white shadow-sm px-3 py-3 transition-all duration-200 ease-out cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderRadius: "20px" }}
            >
              <Icon size={20} color={item.color} strokeWidth={1.75} />
              <span className="text-xs font-bold text-gray-800 whitespace-pre-line leading-tight">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
