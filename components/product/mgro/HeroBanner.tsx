"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GREEN = "#47b449";

// Ganti sesuai nama file gambar baru yang kamu upload (monstera + tangan
// menuang pebbles, dengan ruang kosong lega di sisi kiri). Taruh filenya
// di /public/images/mgro/ lalu sesuaikan nama di bawah ini.
const HERO_IMAGE_TABLET = "/images/mgro/bg-hero-tablet.webp";
const HERO_IMAGE_DESKTOP = "/images/mgro/hero-mgro.webp";

function HeroHeadline({ imgMaxWidthClass }: { imgMaxWidthClass: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src="/images/mgro/healtheir.svg"
        alt="Sustainable Growing Media for Healthier Plants"
        width={1000}
        height={430}
        priority
        className={`h-auto w-full ${imgMaxWidthClass}`}
      />
    </motion.div>
  );
}

function HeroDescription() {
  return (
    <motion.p
      className="mt-5 max-w-md text-[14px] leading-relaxed text-[#1c5a35] sm:mt-6 sm:text-[16px]"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span className="font-bold italic">Lightweight</span> growing media
      solution for hydroponics, soilless mixes, soil aeration, &amp;
      decorative top dressing plant. Helps to improve drainage, enhance
      aeration, and promote healthier root growth.
    </motion.p>
  );
}

function HeroCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
    ></motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ============================================================
          MOBILE & TABLET (< lg) — tinggi tidak lagi 100vh, tapi
          menyesuaikan lewat aspect-ratio pada box gambar. Gambar yang
          dipakai di sini punya ruang kosong natural di sisi kiri, jadi
          teks ditaruh langsung di kiri tanpa perlu scrim/overlay
          tambahan karena tidak ada elemen visual yang mengganggu di
          area itu.
      ============================================================ */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/11]">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Image
              src={HERO_IMAGE_TABLET}
              alt="LiGrA lightweight green aggregates poured next to a monstera plant"
              fill
              priority
              className="object-cover object-[15%_center] sm:object-[36%_center]"
            />
          </motion.div>

          {/* Teks overlay — ditaruh di area kosong kiri gambar */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="w-[78%] max-w-[22rem] px-4 sm:w-[52%] sm:max-w-[26rem] sm:px-8">
              <HeroHeadline imgMaxWidthClass="max-w-[240px] sm:max-w-[340px]" />
              <HeroDescription />
              <HeroCta />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP (lg ke atas) — hero full-height overlay yang lama,
          tidak diubah sama sekali.
      ============================================================ */}
      <div className="relative hidden h-screen w-full lg:block">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1, ease: "easeOut" },
            scale: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <Image
            src={HERO_IMAGE_DESKTOP}
            alt="LiGrA lightweight green aggregates with concrete panels"
            fill
            priority
            className="object-cover object-right"
          />
        </motion.div>

        <div className="relative z-10 flex h-full w-full items-center">
          <div className="w-full max-w-[28rem] -translate-y-3 px-4 sm:px-10 sm:ml-24 md:max-w-[32rem] lg:ml-[13%] lg:max-w-[36rem] xl:ml-[17%] lg:pr-0">
            <HeroHeadline imgMaxWidthClass="max-w-[280px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px]" />
            <HeroDescription />
            <HeroCta />
          </div>
        </div>
      </div>
    </section>
  );
}
