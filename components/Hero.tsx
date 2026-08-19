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
        src="/herobg.webp"
        alt="LiGrA lightweight green aggregates with concrete panels"
        fill
        priority
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 sm:via-white/55 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl text-left animate-fade-in-up">

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] tracking-tight text-gray-900">
              <span style={{ color: TEAL }}>LIGHTER</span>
              <br />
              <span style={{ color: TEAL }}>STRONGER</span>
              <br />
              <span style={{ color: GREEN }}>GREENER</span>
            </h1>

            <p 
              className="mt-6 max-w-lg text-lg sm:text-xl leading-relaxed text-gray-600"
              style={{ fontWeight: 300 }}
            >
              LiGrA is advanced lightweight green aggregate engineered to
              reduce weight, improve performance and build a more
              sustainable future.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 text-base font-bold text-white transition-all duration-200 hover:shadow-lg hover:gap-3"
                style={{ backgroundColor: TEAL }}
              >
                Explore Technology
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 px-7 py-4 text-base font-bold transition-all duration-200 hover:gap-3"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                View Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
