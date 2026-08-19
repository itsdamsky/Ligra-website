"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TEAL = "#0d7490";
const GREEN = "#47b449";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background photo, right-weighted, fading into white on the left */}
      <Image
        src="/images/mgro/heromgro.webp"
        alt="LiGrA lightweight green aggregates with concrete panels"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Text + button overlay */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="max-w-xl -translate-y-3 px-6 sm:px-10 sm:ml-24 lg:ml-[13%] xl:ml-[17%] lg:pr-0">
          {/* Headline graphic: "SUSTAINABLE GROWING MEDIA / for Healthier Plants!" */}
          <Image
            src="/images/mgro/healtheir.svg"
            alt="Sustainable Growing Media for Healthier Plants"
            width={1000}
            height={430}
            priority
            className="h-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]"
          />

          {/* Description */}
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[#1c5a35] sm:mt-6 sm:text-[16px]">
            <span className="font-bold italic">Lightweight</span> growing
            media solution for hydroponics, soilless mixes, soil aeration,
            &amp; decorative top dressing plant. Helps to improve drainage,
            enhance aeration, and promote healthier root growth.
          </p>

          {/* CTA button */}
          <Link
            href="/products"
            className="group mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:mt-7"
            style={{ backgroundColor: GREEN }}
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </section>
  );
}
