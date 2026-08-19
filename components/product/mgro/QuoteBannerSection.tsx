"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Ganti path di bawah ini sesuai foto kamu
const BANNER_BG = "/images/mgro/bg-growing.webp";

export default function QuoteBannerSection() {
  return (
    <section className="relative flex h-[280px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[440px] lg:h-[500px]">
      {/* Background foto full-bleed — TIDAK DIANIMASIKAN */}
      <Image
        src={BANNER_BG}
        alt="mGRO lightweight aggregate texture"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#224124]/25" />

      {/* Konten — ANIMASI SAAT SCROLL */}
      <motion.div
        className="relative z-10 flex max-w-[90%] flex-col items-center px-4 text-center sm:max-w-2xl sm:px-6 lg:max-w-3xl"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <p className="text-[18px] font-bold leading-snug text-white sm:text-[26px] sm:leading-tight md:text-[32px] lg:text-[40px]">
          &ldquo;Growing a Sustainable Future
          <br />
          Through Green Innovation&rdquo;
        </p>
      </motion.div>
    </section>
  );
}