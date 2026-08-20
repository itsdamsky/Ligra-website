"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const DARK_GREEN = "#259539";
const LIGHT_GREEN = "#8bc34a";
const MGRO_GREEN = "#259539";

const rows = [
  {
    iconSrc: "/images/mgro/icon/icon-drainage.svg",
    label: "Drainage",
    soil: "Medium",
    cocopeat: "Low",
    mgro: "Excellent",
  },
  {
    iconSrc: "/images/mgro/icon/icon-aeration.svg",
    label: "Aeration",
    soil: "Medium",
    cocopeat: "Medium",
    mgro: "Very High",
  },
  {
    iconSrc: "/images/mgro/icon/icon-compaction.svg",
    label: "Compaction",
    soil: "Yes",
    cocopeat: "Yes",
    mgro: "No",
  },
  {
    iconSrc: "/images/mgro/icon/icon-weight.svg",
    label: "Weight",
    soil: "Heavy",
    cocopeat: "Light",
    mgro: "Very Light",
  },
];

const CHECK_ICON_SRC = "/images/mgro/icon/ceklis.svg";
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};
export default function ComparisonSection() {
  return (
    <section className="relative flex min-h-[620px] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F6] to-[#f2f1ea] py-20 sm:py-24">
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 w-[220px] sm:w-[300px] lg:w-[360px]"
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/mgro/bibit.webp"
          alt="Seedlings sprouting from lightweight aggregate soil"
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-0 top-0 w-[140px] sm:w-[200px] lg:w-[260px]"
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 150% 150% at 100% 0%, black 0%, black 22%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.08) 82%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 150% 150% at 100% 0%, black 0%, black 22%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.35) 62%, rgba(0,0,0,0.08) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/images/mgro/grow-right.webp"
          alt="LiGrA lightweight aggregate pebbles with leaves"
          width={380}
          height={467}
          className="h-auto w-full"
        />
      </motion.div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          className="text-[26px] font-extrabold leading-tight sm:text-[32px] lg:text-[36px]"
          style={{
            color: DARK_GREEN,
          }}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          Better Drainage. Better Roots. Better Growth.
        </motion.h2>

        <motion.p
          className="mt-2 text-[18px] font-bold sm:text-[22px] lg:text-[26px]"
          style={{
            color: LIGHT_GREEN,
          }}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          mGRO provides something very few substrates offer
        </motion.p>
      </div>
      <div className="relative z-10 mx-auto mt-8 w-full max-w-[1000px] px-3 sm:mt-10 sm:px-6 md:px-8 lg:px-10">
        <div className="hidden md:flex md:items-stretch">
          <motion.div
            className="flex-[1.3] overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
              PROPERTY
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className={`flex items-center justify-center px-3 py-4 ${
                  i !== rows.length - 1
                    ? "border-b border-[#eef2e6]"
                    : ""
                }`}
              >
                <div className="mx-auto flex w-[150px] items-center justify-start gap-3">
                  <Image
                    src={row.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="h-7 w-7 shrink-0"
                  />

                  <span className="text-[16px] font-semibold text-[#606060] sm:text-[20px]">
                    {row.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex-1 overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
              SOIL
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className={`px-3 py-4 text-center text-[16px] font-light italic sm:text-[20px] ${
                  i !== rows.length - 1
                    ? "border-b border-[#eef2e6]"
                    : ""
                }`}
                style={{
                  color: "#606060",
                }}
              >
                {row.soil}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex-1 overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
              COCOPEAT
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className={`px-3 py-4 text-center text-[16px] font-light italic sm:text-[20px] ${
                  i !== rows.length - 1
                    ? "border-b border-[#eef2e6]"
                    : ""
                }`}
                style={{
                  color: "#606060",
                }}
              >
                {row.cocopeat}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-[1.4] flex-col overflow-hidden rounded-[14px] border bg-white shadow-lg sm:flex-1"
            style={{
              borderColor: MGRO_GREEN,
              boxShadow:
                "0 16px 32px -18px rgba(63,161,74,0.35)",
            }}
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <div
              className="flex items-center justify-center px-3 py-4 text-sm font-semibold text-white sm:text-lg"
              style={{
                backgroundColor: MGRO_GREEN,
              }}
            >
              mGRO
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className={`flex items-center justify-center px-3 py-4 ${
                  i !== rows.length - 1
                    ? "border-b border-[#e2f0d4]"
                    : ""
                }`}
                style={{
                  backgroundColor: "#FAFFF0",
                }}
              >
                <div className="mx-auto flex w-[150px] items-center justify-start gap-3 sm:gap-5">
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.35 + i * 0.08,
                      type: "spring",
                      stiffness: 220,
                      damping: 15,
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
                    className="whitespace-nowrap text-[16px] font-light italic sm:text-[20px]"
                    style={{
                      color: "#606060",
                    }}
                  >
                    {row.mgro}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative flex md:hidden"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main table — Property + Soil + Cocopeat */}
          <div className="flex-1 overflow-hidden rounded-[16px] border border-[#dcecc8] bg-white shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)] bg-[#eef7e4]">
              <div className="border-r border-[#dcecc8] px-2 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-[#259539]">
                Property
              </div>
              <div className="border-r border-[#dcecc8] px-1 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-[#259539]">
                Soil
              </div>
              <div className="px-1 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-[#259539]">
                Cocopeat
              </div>
              <div />
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`grid grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)] items-center ${
                  i !== rows.length - 1 ? "border-b border-[#eef2e6]" : ""
                }`}
              >
                {/* Property label — fixed-width block so it stays centered without zigzagging row to row */}
                <div className="flex items-center justify-center border-r border-[#eef2e6] px-2 py-3">
                  <div className="flex w-[100px] items-center gap-1.5">
                    <Image
                      src={row.iconSrc}
                      alt=""
                      width={16}
                      height={16}
                      className="h-3.5 w-3.5 shrink-0"
                    />
                    <span className="text-[11px] font-semibold leading-tight text-[#606060]">
                      {row.label}
                    </span>
                  </div>
                </div>

                {/* Soil */}
                <div className="flex items-center justify-center border-r border-[#eef2e6] px-1 py-3 text-center">
                  <span className="text-[10.5px] italic text-gray-500">
                    {row.soil}
                  </span>
                </div>

                {/* Cocopeat */}
                <div className="flex items-center justify-center px-1 py-3 text-center">
                  <span className="text-[10.5px] italic text-gray-500">
                    {row.cocopeat}
                  </span>
                </div>

                <div />
              </motion.div>
            ))}
          </div>

          {/* ======================================================
              mGRO FLOATING CARD — matches the width reserved by
              the grid's last column so it never overlaps Cocopeat.
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="absolute inset-y-0 right-0 flex w-[26%] flex-col overflow-hidden rounded-[14px] border bg-white shadow-lg"
            style={{
              borderColor: MGRO_GREEN,
              boxShadow: "0 14px 24px -10px rgba(37,149,57,0.35)",
            }}
          >
            <div
              className="px-1 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: MGRO_GREEN }}
            >
              mGRO
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-1 items-center justify-center px-1 py-3 ${
                  i !== rows.length - 1 ? "border-b border-[#e2f0d4]" : ""
                }`}
                style={{ backgroundColor: "#FAFFF0" }}
              >
                <div className="flex w-[76px] items-center gap-1.5">
                  <Image
                    src={CHECK_ICON_SRC}
                    alt=""
                    width={13}
                    height={13}
                    className="h-3 w-3 shrink-0"
                  />
                  <span
                    className="text-[10px] italic leading-tight"
                    style={{ color: "#606060" }}
                  >
                    {row.mgro}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
