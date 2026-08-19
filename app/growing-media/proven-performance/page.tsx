"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LigraChart from "./LigraChart";

const DARK_GREEN = "#259539";
const GREEN = "#88B532";

const YIELD_BADGE = "/images/mgro/badge.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE,
    },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const imageLeft = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const imageRight = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const viewportOnce = {
  once: true,
  amount: 0.2 as const,
};

const ligraTableRows = [
  {
    label: "Mean",
    controlA: "36.54 ± 3.06",
    controlB: "53.56 ± 2.58",
    t1: "60.95 ± 3.25",
    t2: "64.14 ± 3.73",
  },
  {
    label: "% of Control A",
    controlA: "–",
    controlB: "14.1",
    t1: "29.8",
    t2: "37.1",
  },
  {
    label: "% of Control B",
    controlA: "–",
    controlB: "–",
    t1: "13.8",
    t2: "20.1",
  },
];

const structuralAdvantages = [
  {
    iconSrc: "/images/mgro/icon/icon-load.svg",
    title: "Lower Load on Green Wall",
    body: "The composite significantly reduces the weight on the green wall structure.",
  },
  {
    iconSrc: "/images/mgro/icon/icon-space.svg",
    title: "Increased Space Efficiency",
    body: "Allows for greater use of vertical space.",
  },
  {
    iconSrc: "/images/mgro/icon/icon-easy-handling.svg",
    title: "Easier Handling",
    body: "Simplifies maintenance & installation processes.",
  },
];

export default function ProvenPerformancePage() {
  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="relative flex h-[260px] w-full items-center overflow-hidden sm:h-[320px] lg:h-[380px]"
        style={{
          backgroundColor: "#0F3D1E",
        }}
      >
        {/* HERO IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: EASE,
          }}
          className="absolute right-0 top-0 h-full w-auto"
        >
          <Image
            src="/images/mgro/bg-horticulture.webp"
            alt="mGRO vertical green wall installation"
            width={2238}
            height={1542}
            priority
            className="h-full w-auto"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.28) 25%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.95) 65%, black 75%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.28) 25%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.95) 65%, black 75%)",
            }}
          />
        </motion.div>

        {/* HERO COPY */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textContainer}
          className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-[24px] font-bold leading-tight sm:text-[32px] lg:text-[60px]"
            style={{
              color: "#8FD14F",
            }}
          >
            Horticulture with
          </motion.p>

          <motion.div variants={fadeUp}>
            <Image
              src="/images/mgro/logo-mgro-white.svg"
              alt="mGRO"
              width={391}
              height={70}
              className="mt-1 h-[42px] w-auto sm:h-[52px] lg:h-[102px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          20% HIGHER CROP YIELDS
          ===================================================== */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[22px] font-bold sm:text-[26px] lg:text-[40px]"
              style={{ color: DARK_GREEN }}
            >
              20% Higher Crop Yields
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[30px] font-semibold"
              style={{ color: GREEN }}
            >
              Research at Temasek Polytechnic
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] leading-relaxed text-[#606060] sm:text-[15px]"
            >
              The study, under controlled environment by Centre for Research
              and Opportunities in Plant Science, Temasek Polytechnic, shows
              that with the use of mGRO yields 20% more crops.
            </motion.p>

            {/* IMAGE */}
            <motion.div
              variants={imageLeft}
              className="relative mt-20 sm:mt-24"
            >
              <div className="relative overflow-hidden rounded-[18px] shadow-xl sm:rounded-[24px]">
                <Image
                  src="/images/mgro/plant.webp"
                  alt="mGRO trial trays at Temasek Polytechnic"
                  width={700}
                  height={420}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-auto w-full"
                />
              </div>

              {/* BADGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.55,
                  delay: 0.2,
                  ease: EASE,
                }}
                className="pointer-events-none absolute left-1/2 top-0 w-[110px] -translate-x-1/2 -translate-y-1/2 sm:w-[200px]"
              >
                <Image
                  src={YIELD_BADGE}
                  alt="Proven by Temasek Polytechnic: increase over 20% crop yields"
                  width={480}
                  height={480}
                  className="h-auto w-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: CHART + TABLE + NOTES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
            className="lg:mt-4"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#dcecc8] p-3 sm:p-4"
            >
              <h3 className="mb-2 text-center text-[15px] font-semibold text-[#606060]">
                LiGrA Experiment
              </h3>

              <LigraChart />
            </motion.div>

            {/* TABLE */}
            <motion.div
              variants={fadeUp}
              className="mt-3 overflow-hidden rounded-xl border border-[#dcecc8]"
            >
              <table className="w-full border-collapse text-center text-[12px] sm:text-[13px]">
                <thead>
                  <tr>
                    <th className="border border-[#dcecc8] bg-white px-2 py-2 text-left font-medium text-[#606060]" />

                    <th
                      className="border border-[#dcecc8] px-2 py-2 font-semibold text-white"
                      style={{
                        backgroundColor: "#4C8FE8",
                      }}
                    >
                      Control A
                    </th>

                    <th
                      className="border border-[#dcecc8] px-2 py-2 font-semibold text-white"
                      style={{
                        backgroundColor: "#F2A649",
                      }}
                    >
                      Control B
                    </th>

                    <th
                      className="border border-[#dcecc8] px-2 py-2 font-semibold text-white"
                      style={{
                        backgroundColor: "#5FA857",
                      }}
                    >
                      T1
                    </th>

                    <th
                      className="border border-[#dcecc8] px-2 py-2 font-semibold text-white"
                      style={{
                        backgroundColor: "#D9534F",
                      }}
                    >
                      T2
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {ligraTableRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={
                        i % 2 === 0
                          ? "bg-[#FAFFF0]"
                          : "bg-white"
                      }
                    >
                      <td className="border border-[#dcecc8] px-2 py-2 text-left font-medium text-[#606060]">
                        {row.label}
                      </td>

                      <td className="border border-[#dcecc8] px-2 py-2 text-[#606060]">
                        {row.controlA}
                      </td>

                      <td className="border border-[#dcecc8] px-2 py-2 text-[#606060]">
                        {row.controlB}
                      </td>

                      <td className="border border-[#dcecc8] px-2 py-2 text-[#606060]">
                        {row.t1}
                      </td>

                      <td className="border border-[#dcecc8] px-2 py-2 text-[#606060]">
                        {row.t2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* NOTES */}
            <motion.div
              variants={fadeUp}
              className="mt-3 space-y-2"
            >
              <div className="flex items-center gap-3 rounded-xl">
                <Image
                  src="/images/mgro/icon/icon-treegreen.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-12 w-12 shrink-0"
                />

                <p className="text-[13px] leading-relaxed text-[#606060]">
                  Both T2 and Control B contain bio-organisms, allowing for a
                  fair assessment of the growth impact from LiGrA in T2.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl">
                <Image
                  src="/images/mgro/icon/icon-bullgreen.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-12 w-12 shrink-0"
                />

                <p className="text-[13px] leading-relaxed text-[#606060]">
                  When T2 is compared with Control A, which contains no
                  bio-organisms, it shows that adding bio-organisms and LiGrA{" "}
                  <span
                    className="font-semibold"
                    style={{ color: DARK_GREEN }}
                  >
                    yields 37% more crops.
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EDIBLE GREEN WALL
          ===================================================== */}
      <section
        className="w-full px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundColor: "#FAFFF0",
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-[30px] font-bold tracking-wide"
              style={{ color: GREEN }}
            >
              Featured in
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-[22px] font-bold leading-snug sm:text-[26px] lg:text-[40px]"
              style={{ color: DARK_GREEN }}
            >
              Singapore Sustainability Academy&rsquo;s Edible Green Wall
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] font-light leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Launched by the Singapore Sustainability Academy, the Edible
              Green Wall utilizes potting soil combined with LiGrA as the
              growth medium for plants.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[14px] font-bold text-[#606060] sm:text-[20px]"
            >
              Benefit of using mGRO:
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-1 text-[14px] font-light leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Enhances soil structure by improving aeration, drainage, and
              resistance to compaction. This creates a healthier root
              environment, allowing plants to establish stronger roots and
              thrive with improved water and air balance.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="relative rounded-[26px] shadow-[-10px_16px_24px_-4px_rgba(0,0,0,0.2)]"
          >
            <Image
              src="/images/mgro/ssa-greenwall.webp"
              alt="Singapore Sustainability Academy's Edible Green Wall installation"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STRUCTURAL ADVANTAGES
          ===================================================== */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1400px]">
          <motion.h2
            initial={{
              opacity: 0,
              y: 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.65,
              ease: EASE,
            }}
            className="text-center text-[20px] font-bold sm:text-[30px]"
            style={{
              color: GREEN,
            }}
          >
            Structural Advantages
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
            className="mt-8 flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-y-6"
          >
            {structuralAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`flex max-w-[370px] items-center gap-3 px-0 sm:px-8 ${
                  i !== 0
                    ? "sm:border-l sm:border-[#dcecc8]"
                    : ""
                }`}
              >
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={32}
                  height={32}
                  className="h-20 w-20 shrink-0"
                />

                <div>
                  <p className="text-[14px] font-bold text-[#606060] sm:text-[15px]">
                    {item.title}:
                  </p>

                  <p className="mt-1 text-[13px] leading-relaxed text-[#606060] sm:text-[14px]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TAMAN DAMAI
          ===================================================== */}
      <section className="w-full px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-26 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="relative rounded-[26px] shadow-[-10px_16px_24px_-4px_rgba(0,0,0,0.2)]"
          >
            <Image
              src="/images/mgro/taman-damai.webp"
              alt="mGRO used in Taman Damai Communal Garden"
              width={1000}
              height={700}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
            className="-mt-20"
          >
            <motion.div variants={fadeUp}>
              <Image
                src="/images/mgro/icon/icon-arrow.svg"
                alt=""
                width={64}
                height={64}
                className="h-24 w-24 lg:-ml-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="-mt-6 text-[20px] font-bold sm:text-[40px]"
              style={{
                color: DARK_GREEN,
              }}
            >
              Proven in Taman Damai
              <br />
              Communal Garden
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              The approach of combining mGRO with soil has been successfully
              tested at a Communal Garden in Taman Damai, located within the
              HDB estate at Yuan Ching Road.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              A 40% mGRO : 60% soil mixture was used to reduce the stickiness
              of the clayey soil while maintaining favourable conditions for
              plant growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SEED GERMINATION
          ===================================================== */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-26 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
          >
            <motion.div variants={fadeUp}>
              <Image
                src="/images/mgro/icon/icon-arrow.svg"
                alt=""
                width={64}
                height={64}
                className="h-24 w-24 scale-x-[-1] sm:h-28 sm:w-28 lg:h-32 lg:w-32 lg:-mr-24 lg:ml-auto"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="-mt-6 text-[20px] font-bold sm:text-[40px]"
              style={{
                color: DARK_GREEN,
              }}
            >
              Healthy Seed Germination
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Kang Kong seeds were grown in two different growing media: 100%
              soil and a 50:50 mGRO-soil blend (by volume). Both media produced
              healthy shoots within 5 days, while the mGRO composite weighed
              only 55% as much as soil, creating a significantly lighter
              growing medium.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              These promising results support the continued exploration of
              mGRO as a sustainable solution for horticultural applications.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={viewportOnce}
            transition={{
              duration: 0.7,
              ease: EASE,
            }}
            className="relative rounded-[26px] shadow-[10px_16px_24px_-4px_rgba(0,0,0,0.2)]"
          >
            <Image
              src="/images/mgro/seed-germination.webp"
              alt="Kang Kong seedlings grown in mGRO-soil blend"
              width={1000}
              height={700}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}