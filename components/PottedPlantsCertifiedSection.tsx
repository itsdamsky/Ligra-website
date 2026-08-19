"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DARK_GREEN = "#259539";
const LIGHT_GREEN = "#8bc34a";

// Ganti semua path di bawah ini sesuai file gambar/icon kamu
const POTTED_PLANTS_PHOTO = "/images/mgro/potted-plants.webp";
const LEAF_DECOR = "/images/mgro/leaf-left.svg";
const LEAF_ICON_SMALL = "/images/mgro/icon/icon-2leaf.svg";

const certifications = [
  {
    iconSrc: "/images/mgro/icon/icon-greensg.svg",
    titleLines: ["Singapore Green", "Product Certified"],
    description:
      "mGRO has successfully met the assessment criteria of the Singapore Green Building Product Certification Scheme.",
  },
  {
    iconSrc: "/images/mgro/icon/icon-recyclematerials.svg",
    titleLines: ["Made from", "Recycled Materials"],
    description:
      "Produced using recycled materials to reduce waste and support a more sustainable future.",
  },
  {
    iconSrc: "/images/mgro/icon/icon-crystal.svg",
    titleLines: ["Crystalline Silica", "Free"],
    description:
      "mGRO is free from crystalline silica, offers a cleaner growing media solution for a wide range of horticultural applications.",
  },
];

export default function PottedPlantsCertifiedSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Dekorasi daun — ANIMASI DARI KANAN */}
      <motion.div
        className="pointer-events-none absolute -right-6 top-[260px] z-20 w-[220px] -scale-x-100 opacity-70 sm:top-[320px] sm:w-[300px] lg:w-[360px]"
        initial={{ opacity: 0, x: 100 }}
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

      {/* SECTION 1 — hijau muda (kiri: foto full-bleed) / (kanan: heading + teks), tinggi fix 624px */}
      <section className="relative z-10 grid h-[624px] w-full bg-[#FAFFF0] lg:grid-cols-2">
        {/* FOTO — TIDAK DIANIMASIKAN */}
        <div className="relative h-full w-full">
          <Image
            src={POTTED_PLANTS_PHOTO}
            alt="mGRO lightweight aggregate used in potted plants"
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          className="flex h-full flex-col justify-center pl-8 py-16 sm:pl-14 sm:py-20 lg:py-0"
          style={{
            paddingRight:
              "max(24px, calc((100vw - 1400px) / 2 + 24px))",
          }}
        >
          {/* HEADING */}
          <motion.h2
            className="text-[28px] font-bold leading-tight sm:text-[40px]"
            style={{ color: DARK_GREEN }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            The Perfect Choice for <br />
            Potted Plants
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            className="mt-1 text-[19px] font-bold leading-snug sm:text-[30px]"
            style={{ color: LIGHT_GREEN }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            Grow Better in Every Pot.
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#606060] sm:text-base"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            mGRO is a lightweight aggregate that enhances potted plants and
            landscaping applications by reducing the weight of growing media
            while improving drainage and aeration. Suitable for mixing with
            soil or soilless media (e.g. coco coir, coco peat, peat moss), it
            also functions as a drainage layer or decorative top dressing. mGRO
            helps create a less favourable environment for certain pests,
            supporting cleaner and healthier planting spaces.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — putih (heading center + 3 card sertifikasi) */}
      <section className="relative z-10 w-full bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* HEADING */}
          <motion.h2
            className="inline-flex items-center gap-2 text-[28px] font-bold leading-tight sm:text-[40px]"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <span>
              <span style={{ color: DARK_GREEN }}>Certified Green</span>
              <br />
              <span style={{ color: DARK_GREEN }}>
                For a Greener Future
              </span>
            </span>

            {/* ICON DAUN KECIL — ANIMASI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <Image
                src={LEAF_ICON_SMALL}
                alt=""
                width={32}
                height={32}
                className="-ml-6 h-10 w-10 shrink-0 self-end sm:h-26 sm:w-26"
              />
            </motion.div>
          </motion.h2>

          {/* 3 CARD SERTIFIKASI */}
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.titleLines.join(" ")}
                className="flex w-full max-w-[280px] flex-col items-center rounded-2xl border border-gray-100 bg-[#FAF8F6] px-6 py-8 shadow-[-6px_10px_16px_-2px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[-8px_14px_20px_-2px_rgba(37,149,57,0.3)] sm:w-[280px]"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* CARD ICON — TIDAK DIANIMASIKAN */}
                <Image
                  src={cert.iconSrc}
                  alt=""
                  width={64}
                  height={64}
                  className="h-30 w-30"
                />

                {/* CARD TITLE */}
                <h3
                  className="mt-4 text-[17px] font-bold leading-snug"
                  style={{ color: LIGHT_GREEN }}
                >
                  {cert.titleLines[0]}
                  <br />
                  {cert.titleLines[1]}
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}