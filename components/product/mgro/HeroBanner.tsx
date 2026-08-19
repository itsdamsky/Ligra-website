"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GREEN = "#47b449";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
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
        <Image
          src="/images/mgro/heromgro.webp"
          alt="LiGrA lightweight green aggregates with concrete panels"
          fill
          priority
          className="object-cover object-right"
        />
      </motion.div>

      {/* Text + button */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="max-w-xl -translate-y-3 px-6 sm:px-10 sm:ml-24 lg:ml-[13%] xl:ml-[17%] lg:pr-0">

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
              className="h-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px]"
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