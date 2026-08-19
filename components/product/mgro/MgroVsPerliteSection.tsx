"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DARK_GREEN = "#259539";

const rows = [
  {
    iconSrc: "/images/mgro/icon/icon-tree.svg",
    label: "Strength",
    perlite: "Fragile",
    mgro: "Stronger",
  },
  {
    iconSrc: "/images/mgro/icon/icon-recycle.svg",
    label: "Reusability",
    perlite: "Low",
    mgro: "High",
  },
  {
    iconSrc: "/images/mgro/icon/icon-windgreen.svg",
    label: "Dust",
    perlite: "High",
    mgro: "Low",
  },
  {
    iconSrc: "/images/mgro/icon/icon-hand.svg",
    label: "Sustainability",
    perlite: "Moderate",
    mgro: "Very High",
  },
];

const CHECK_ICON_SRC = "/images/mgro/icon/ceklis.svg";

const bullets = [
  {
    title: "Stronger Structure",
    body: "Unlike perlite, mGRO resists breaking and maintains its shape over time.",
  },
  {
    title: "High Reusability",
    body: "Can be reused through multiple growing cycles.",
  },
  {
    title: "Low Dust",
    body: "Cleaner handling with significantly less airborne dust.",
  },
  {
    title: "More Sustainable",
    body: "Made from recycled mineral materials for a lower environmental footprint.",
  },
];

const GREENHOUSE_PHOTO = "/images/mgro/plant.webp";
const YIELD_BADGE = "/images/mgro/badge.svg";

/* ============================================================
   ANIMATION SETTINGS
============================================================ */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const rowAnimation = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MgroVsPerliteSection() {
  return (
    <>
      {/* ============================================================
          COMPARISON SECTION
      ============================================================ */}

      <section className="relative w-full overflow-hidden bg-[#FAFFF0] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pb-52 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">

          {/* ========================================================
              MOBILE / TABLET
          ======================================================== */}

          <motion.div
            className="space-y-3 lg:hidden"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-[1fr_auto] gap-3 px-1 text-center text-[13px] font-semibold uppercase text-[#259539] sm:text-sm"
            >
              <span className="text-left">Property</span>

              <span className="grid grid-cols-2 gap-3">
                <span>Perlite</span>
                <span>mGRO</span>
              </span>
            </motion.div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl border border-[#dcecc8] bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Image
                    src={row.iconSrc}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                  />

                  <span className="text-[14px] font-semibold text-[#606060] sm:text-[16px]">
                    {row.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Perlite */}
                  <div className="rounded-xl bg-gray-50 py-2.5 text-center">
                    <p className="text-[13px] italic text-gray-500 sm:text-[15px]">
                      {row.perlite}
                    </p>
                  </div>

                  {/* mGRO */}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="flex items-center justify-center gap-1.5 rounded-xl py-2.5"
                    style={{
                      backgroundColor: "#FAFFF0",
                      border: `1px solid ${DARK_GREEN}`,
                    }}
                  >
                    <Image
                      src={CHECK_ICON_SRC}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 shrink-0"
                    />

                    <p className="text-[13px] italic text-[#606060] sm:text-[15px]">
                      {row.mgro}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ========================================================
              DESKTOP
          ======================================================== */}

          <motion.div
            className="relative hidden overflow-visible lg:flex"
          >
            {/* Main table */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 overflow-hidden rounded-[16px] border border-[#dcecc8] bg-white shadow-sm"
            >
              {/* Table header */}
              <div
                className="grid grid-cols-[1.3fr_1fr_1.05fr] divide-x divide-[#dcecc8]"
                style={{ backgroundColor: "#EEF4DF" }}
              >
                <div className="px-4 py-6 text-center text-[21.5px] font-semibold text-[#259539]">
                  PROPERTY
                </div>

                <div className="px-4 py-6 text-center text-[21.5px] font-semibold text-[#259539]">
                  PERLITE
                </div>

                <div />
              </div>

              {/* Rows */}
              {rows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className={`grid grid-cols-[1.3fr_1fr_1.05fr] items-center text-[20px] font-light divide-x divide-[#eef2e6] ${
                    i !== rows.length - 1
                      ? "border-b border-[#eef2e6]"
                      : ""
                  }`}
                  style={{ color: "#606060" }}
                >
                  <div className="flex min-w-0 items-center justify-center px-4 py-6">
                    <div className="mx-auto flex w-full max-w-[220px] items-center justify-start gap-2 pl-6">
                      <Image
                        src={row.iconSrc}
                        alt=""
                        width={20}
                        height={20}
                        className="h-7 w-7 shrink-0"
                      />

                      <span className="text-[20px] font-semibold text-[#606060]">
                        {row.label}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 py-6 text-center text-[20px] italic text-gray-500">
                    {row.perlite}
                  </div>

                  <div />
                </motion.div>
              ))}
            </motion.div>

            {/* ======================================================
                mGRO FLOATING CARD
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.3,
                },
              }}
              className="absolute inset-y-0 right-0 flex w-[34%] flex-col rounded-[16px] border bg-white shadow-xl"
              style={{
                borderColor: DARK_GREEN,
                boxShadow:
                  "0 20px 35px -12px rgba(37,149,57,0.35)",
              }}
            >
              {/* mGRO header */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="rounded-t-[15px] px-3 py-5 text-center text-[21.5px] font-semibold text-white"
                style={{ backgroundColor: DARK_GREEN }}
              >
                mGRO
              </motion.div>

              {/* mGRO rows */}
              {rows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative flex flex-1 items-center justify-center gap-2 px-2 py-6 transition-all duration-300 ease-out hover:z-10 hover:scale-[1.03] hover:rounded-[12px] hover:bg-white ${
                    i === rows.length - 1
                      ? "rounded-b-[15px]"
                      : "border-b border-[#e2f0d4] group-hover:border-transparent"
                  }`}
                  style={{
                    backgroundColor: "#FAFFF0",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 scale-95 rounded-[12px] opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        "0 10px 18px -6px rgba(37,149,57,0.35)",
                    }}
                  />

                  <div className="relative mx-auto flex w-[150px] items-center justify-start gap-5">
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                    >
                      <Image
                        src={CHECK_ICON_SRC}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 shrink-0"
                      />
                    </motion.div>

                    <span
                      className="whitespace-nowrap text-[20px] font-light italic"
                      style={{ color: "#606060" }}
                    >
                      {row.mgro}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ========================================================
              HEADING + BULLETS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[22px] font-bold sm:text-[26px] lg:text-[32px]"
              style={{ color: DARK_GREEN }}
            >
              mGRO vs Perlite
            </motion.h2>

            <motion.ul
              className="mt-4 space-y-4 sm:space-y-5"
            >
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                  whileHover={{
                    x: 5,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="flex gap-3"
                >
                  <motion.span
                    initial={{
                      scale: 0,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: DARK_GREEN,
                    }}
                  />

                  <p className="text-[14px] leading-relaxed text-[#606060] sm:text-[16px]">
                    <span className="font-bold text-[#606060]">
                      {bullet.title}
                    </span>
                    <br />
                    {bullet.body}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          GREENHOUSE IMAGE
      ============================================================ */}

      <motion.div
        className="relative z-20 mx-auto -mt-10 max-w-4xl px-4 sm:-mt-14 sm:px-6 lg:-mt-16"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[18px] shadow-xl sm:rounded-[24px]"
        >
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <Image
              src={GREENHOUSE_PHOTO}
              alt="mGRO hydroponic greenhouse trial with healthy leafy greens"
              width={1200}
              height={720}
              className="h-auto w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </motion.div>
        </motion.div>

        {/* ========================================================
            YIELD BADGE
        ======================================================== */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-0 w-[130px] -translate-x-1/2 -translate-y-1/2 sm:w-[190px] lg:w-[240px]"
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -12,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
        >
          <Image
            src={YIELD_BADGE}
            alt="Proven by Temasek Polytechnic: increase over 20% crop yields"
            width={380}
            height={380}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* ============================================================
          PROVEN PERFORMANCE
      ============================================================ */}

      <section className="relative w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[22px] font-bold sm:text-[26px] lg:text-[32px]"
            style={{ color: DARK_GREEN }}
          >
            Proven Performance
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-4 text-[14px] leading-relaxed text-gray-600 sm:text-[15px] lg:text-base"
          >
            From institutional research, mGRO has demonstrated its ability to
            improve growing environments by increasing the crop yields up to
            37% when combined with microbes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
          >
            <Link
              href="/growing-media/proven-performance"
              className="mt-6 inline-block rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg cursor-pointer sm:px-8 sm:py-3 sm:text-sm"
              style={{
                backgroundColor: DARK_GREEN,
              }}
            >
              EXPLORE MORE
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}