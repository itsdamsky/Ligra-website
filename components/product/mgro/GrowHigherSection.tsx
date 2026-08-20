"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DARK_GREEN = "#259539";
const LIGHT_GREEN = "#8bc34a";

const ROOFTOP_PHOTO = "/images/mgro/rooftop-garden.webp";
const PLANTER_BOX_3D = "/images/mgro/planter-box.webp";

const LEAF_DECOR = "/images/mgro/leaf-decor-tall.svg";

const specs = [
  { label: "Size", value: "2 to 8mm" },
  { label: "Bulk Density", value: "150kg/m³" },
  { label: "Crushing Value", value: "0.6 MPa" },
  { label: "Water Abs by Volume", value: "30kg/m³" },
];

const benefits = [
  {
    iconSrc: "/images/mgro/icon/icon-weightgreen.svg",
    text: "Lightest amongst all lightweight aggregates",
  },
  {
    iconSrc: "/images/mgro/icon/icon-watergreen.svg",
    text: "Water absorption of 30kg/m³ does not increase roof loading significantly",
  },
  {
    iconSrc: "/images/mgro/icon/icon-deffance.svg",
    text: "Solid particulate with high crushing strength does not cause settlement",
  },
  {
    iconSrc: "/images/mgro/icon/icon-aint.svg",
    text: "Create inhospitable environment for pests such as cockroaches and termites.",
  },
];

export default function GrowHigherSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Dekorasi daun — ANIMASI DARI KIRI */}
      <motion.div
        className="pointer-events-none absolute -left-6 top-[260px] z-20 w-[160px] opacity-70 sm:top-[320px] sm:w-[220px] lg:w-[360px]"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <Image
          src={LEAF_DECOR}
          alt=""
          width={480}
          height={900}
          className="h-auto w-full"
        />
      </motion.div>

      {/* SECTION 1 — hijau muda / foto full-bleed */}
      <section className="relative z-10 grid w-full bg-[#FAFFF0] lg:grid-cols-2 lg:min-h-[624px]">
        <div
          className="flex h-full flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:pr-16 lg:py-0 lg:pl-[max(24px,calc((100vw-1400px)/2+24px))]"
        >
          {/* ICON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Image
              src="/images/mgro/icon/icon-weightgreen.svg"
              alt=""
              width={36}
              height={36}
              className="h-16 w-16"
            />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            className="text-[28px] font-bold leading-tight sm:text-[40px]"
            style={{ color: DARK_GREEN }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.05,
            }}
          >
            Grow Higher. Carry Lighter.
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            className="mt-1 max-w-[260px] text-[19px] font-bold leading-snug sm:max-w-[420px] sm:text-[30px]"
            style={{ color: LIGHT_GREEN }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.12,
            }}
          >
            Perfect for Rooftops,{" "}
            <span className="whitespace-nowrap">
              Balconies &amp; Urban Gardens
            </span>
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-4 max-w-[1400px] text-[15px] leading-relaxed text-[#606060] sm:text-base"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            mGRO can be as low as 25% the weight of traditional soil, making it
            an ideal growing medium for weight-sensitive spaces. Create
            thriving gardens on rooftops, balconies, terraces, and elevated
            planters with less load and easier handling while supporting
            healthier plants.
          </motion.p>
        </div>

        {/* FOTO — TIDAK ADA ANIMASI */}
        <div className="relative h-[280px] w-full sm:h-[360px] lg:h-full">
          <Image
            src={ROOFTOP_PHOTO}
            alt="Rooftop garden with lightweight mGRO planter boxes and lush plants"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SECTION 2 — putih */}
      <section className="relative z-10 w-full bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* ILUSTRASI — TIDAK ADA ANIMASI */}
          <div>
            <Image
              src={PLANTER_BOX_3D}
              alt="Isometric illustration of a raised planter box with mGRO lightweight aggregate layers"
              width={700}
              height={560}
              className="h-auto w-full"
            />

            {/* SPECS */}
            <motion.p
              className="mt-3 text-center text-[9px] text-gray-500 sm:text-[11px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {specs.map((spec, i) => (
                <span key={spec.label}>
                  {i !== 0 && (
                    <span className="mx-1 text-gray-300">|</span>
                  )}
                  {spec.label}:{" "}
                  <span className="font-semibold text-gray-700">
                    {spec.value}
                  </span>
                </span>
              ))}
            </motion.p>
          </div>

          {/* HEADING + BENEFITS */}
          <div>
            {/* HEADING */}
            <motion.h3
              className="text-[26px] font-bold leading-tight sm:text-[40px]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <span style={{ color: DARK_GREEN }}>
                Create larger planter box
                <br />
                with{" "}
              </span>
              <span style={{ color: LIGHT_GREEN }}>less weight.</span>
            </motion.h3>

            {/* BENEFITS */}
            <ul className="mt-8 space-y-6">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit.text}
                  className="flex items-center gap-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.1,
                  }}
                >
                  <Image
                    src={benefit.iconSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="h-10 w-10 shrink-0"
                  />

                  <p className="text-base font-light leading-relaxed text-[#606060] sm:text-[16px]">
                    {benefit.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}