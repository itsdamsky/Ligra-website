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

/* =========================
   ANIMATION VARIANTS
========================= */

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

/* =========================
   COMPONENT
========================= */

export default function ComparisonSection() {
  return (
    <section className="relative flex min-h-[620px] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F6] to-[#f2f1ea] py-20 sm:py-24">

      {/* =========================
          LEFT DECORATIVE IMAGE
      ========================== */}

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

      {/* =========================
          RIGHT DECORATIVE IMAGE
      ========================== */}

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
      >
        <Image
          src="/images/mgro/grow-right.webp"
          alt="LiGrA lightweight aggregate pebbles with leaves"
          width={380}
          height={467}
          className="h-auto w-full"
        />
      </motion.div>

      {/* =========================
          HEADING
      ========================== */}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          className="text-[32px] font-extrabold leading-tight sm:text-[40px]"
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
          className="mt-2 text-[22px] font-bold sm:text-[30px]"
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

      {/* =========================
          COMPARISON TABLE
      ========================== */}

      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-[1000px] items-stretch px-6 sm:mt-10 sm:px-10">

        {/* =========================
            PROPERTY
        ========================== */}

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

        {/* =========================
            SOIL
        ========================== */}

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

        {/* =========================
            COCOPEAT
        ========================== */}

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

        {/* =========================
            MGRO
        ========================== */}

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
          {/* MGRO HEADER */}

          <div
            className="flex items-center justify-center px-3 py-4 text-sm font-semibold text-white sm:text-lg"
            style={{
              backgroundColor: MGRO_GREEN,
            }}
          >
            mGRO
          </div>

          {/* MGRO ROWS */}

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

                {/* CHECK ICON */}

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

                {/* TEXT */}

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
    </section>
  );
}