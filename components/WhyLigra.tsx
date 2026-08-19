"use client";

import { useState, useRef, useEffect } from "react";
import { Leaf, Flame, Volume2, Building2, Recycle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

const LIGRA_GREEN = "#4a9d5f";
const LIGRA_DARK = "#1e293b";
const LIGRA_BLUE = "#048099";

const reasons = [
  {
    icon: Leaf,
    title: "Lightweight",
    description: "Reduces structural load",
    detail:
      "LiGrA's porous aggregate structure significantly reduces overall material density, lowering the structural load on buildings while maintaining strength — ideal for high-rise construction and retrofit projects.",
  },
  {
    icon: Flame,
    title: "Fire Resistant",
    description: "Improves safety",
    detail:
      "Engineered to withstand high temperatures without releasing toxic fumes, LiGrA enhances fire safety ratings for walls, ceilings, and partitions in both residential and industrial buildings.",
  },
  {
    icon: Volume2,
    title: "Acoustic",
    description: "Better sound absorption",
    detail:
      "The irregular, porous surface of LiGrA aggregates traps sound waves effectively, making it a preferred material for acoustic panels, partitions, and soundproofing applications.",
  },
  {
    icon: Building2,
    title: "Thermal Insulation",
    description: "Higher energy efficiency",
    detail:
      "LiGrA's low thermal conductivity helps regulate indoor temperature, reducing reliance on HVAC systems and contributing to lower energy consumption in buildings.",
  },
  {
    icon: Recycle,
    title: "Recyclable",
    description: "Supports circular economy",
    detail:
      "Made from recycled waste materials and fully recyclable at end-of-life, LiGrA supports circular economy principles and reduces the environmental footprint of construction projects.",
  },
];

export default function WhyLigra() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Title */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold flex items-center justify-center gap-1 flex-wrap"
            style={{ color: LIGRA_DARK }}
          >
            Why
            <Image
              src="/images/logo/ligra.svg"
              alt="LiGrA"
              width={220}
              height={64}
              className="h-11 sm:h-14 w-auto inline-block -mx-1"
            />
            ?
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-500">
            Smart Material. Greater Impact.
          </p>
        </div>

        {/* Reasons */}
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-x-6 gap-y-6"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const isOpen = openIndex === i;

            return (
              <button
                key={reason.title}
                onClick={() => toggle(i)}
                className={`group flex flex-col items-center gap-3 rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer animate-fade-in-up ${
                    isOpen ? "w-72" : "w-40"
                }`}
                style={{
                    animationDelay: `${i * 100}ms`,
                    borderColor: isOpen ? LIGRA_BLUE : "transparent",
                    backgroundColor: isOpen ? "#f0f9f2" : "transparent",
                }}
              >
                <div
                    className="flex-shrink-0 w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                        borderColor: LIGRA_BLUE,
                        backgroundColor: isOpen ? LIGRA_BLUE : "transparent",
                    }}
                >
                    <Icon
                        size={30}
                        color={isOpen ? "#ffffff" : LIGRA_BLUE}
                        strokeWidth={1.75}
                        className="transition-colors duration-300"
                    />
                </div>

                {/* Title + description, chevron positioned absolute below */}
                <div className="relative w-full pb-4">
                  <h3 className="font-bold text-gray-900 text-base text-center">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5 text-center">
                    {reason.description}
                  </p>
                  <ChevronDown
                    size={16}
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: LIGRA_BLUE }}
                  />
                </div>

                {/* Expandable detail */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {reason.detail}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}