"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GREEN = "#47b449";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-white sm:h-[75vh] sm:min-h-[600px] lg:h-screen">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 1,
            ease: "easeOut",
          },
          scale: {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      >
        {/*
          Di layar sempit (mobile/tablet), container jadi tinggi & sempit,
          jadi object-cover dengan object-right otomatis "zoom" ke bagian
          kanan gambar (tangan + pebbles) dan area kosong di kiri (tempat
          teks) ikut ketutupan. Solusinya dua lapis:
          1) titik fokus (object position) digeser bertahap per breakpoint
             supaya area kosong tetap lebih terjaga di layar kecil.
          2) scrim putih di bawah ini (lihat div setelah ini) yang jadi
             jaring pengaman kontras teks, aktif hanya di bawah `lg`.
        */}
        <Image
          src="/images/mgro/heromgro.webp"
          alt="LiGrA lightweight green aggregates with concrete panels"
          fill
          priority
          className="object-cover object-[80%_center] sm:object-[72%_center] lg:object-right"
        />
      </motion.div>

      {/*
        SCRIM — lapisan putih semi-transparan yang fade dari kiri (solid)
        ke kanan (transparan). Ini yang menjamin teks tetap terbaca di
        mobile/tablet apa pun bagian gambar yang ke-crop di sana.
        Di `lg` ke atas discrim ini dimatikan (opacity-0) karena di layar
        lebar sudah ada ruang kosong alami dari gambar aslinya, sama
        seperti tampilan desktop yang sudah oke.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-300 lg:opacity-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0) 88%)",
        }}
      />

      {/* Text + button */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="w-full max-w-[28rem] -translate-y-3 px-4 sm:px-10 sm:ml-24 md:max-w-[32rem] lg:ml-[13%] lg:max-w-[36rem] xl:ml-[17%] lg:pr-0">

          {/* Headline */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
              className="h-auto w-full max-w-[280px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-5 max-w-md text-[14px] leading-relaxed text-[#1c5a35] sm:mt-6 sm:text-[16px]"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="font-bold italic">Lightweight</span> growing
            media solution for hydroponics, soilless mixes, soil aeration,
            &amp; decorative top dressing plant. Helps to improve drainage,
            enhance aeration, and promote healthier root growth.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
          </motion.div>

        </div>
      </div>
    </section>
  );
}
