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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
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

/** Reusable section wrapper — keeps spacing + max-width consistent across the page */
function Section({
  children,
  bg = "white",
  className = "",
}: {
  children: React.ReactNode;
  bg?: "white" | "tint";
  className?: string;
}) {
  return (
    <section
      className={`w-full px-5 py-14 sm:px-8 md:py-20 lg:py-24 ${className}`}
      style={{ backgroundColor: bg === "tint" ? "#FAFFF0" : "#FFFFFF" }}
    >
      <div className="mx-auto max-w-[1320px]">{children}</div>
    </section>
  );
}

export default function ProvenPerformancePage() {
  return (
    <div className="overflow-x-hidden motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="relative flex h-[240px] w-full items-center overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[440px]"
        style={{ backgroundColor: "#0F3D1E" }}
      >
        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src="/images/mgro/bg-horticulture.webp"
            alt="mGRO vertical green wall installation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.28) 25%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.95) 65%, black 75%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.28) 25%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.95) 65%, black 75%)",
            }}
          />
          {/* subtle bottom fade so hero text stays legible on short viewports */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F3D1E]/60 to-transparent sm:hidden" />
        </motion.div>

        {/* HERO COPY */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textContainer}
          className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.3rem,4vw,3.5rem)] font-bold leading-tight tracking-tight"
            style={{ color: "#8FD14F" }}
          >
            Horticulture with
          </motion.p>

          <motion.div variants={fadeUp}>
            <Image
              src="/images/mgro/logo-mgro-white.svg"
              alt="mGRO"
              width={391}
              height={70}
              className="mt-1 h-[38px] w-auto sm:h-[48px] md:h-[70px] lg:h-[96px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          20% HIGHER CROP YIELDS
          ===================================================== */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(1.4rem,2.6vw,2.5rem)] font-bold leading-tight"
              style={{ color: DARK_GREEN }}
            >
              20% Higher Crop Yields
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-1 text-[clamp(1.15rem,2vw,1.875rem)] font-semibold"
              style={{ color: GREEN }}
            >
              Research at Temasek Polytechnic
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-[#606060] sm:text-[15px]"
            >
              The study, under controlled environment by Centre for Research
              and Opportunities in Plant Science, Temasek Polytechnic, shows
              that with the use of mGRO yields 20% more crops.
            </motion.p>

            {/* IMAGE */}
            <motion.div variants={imageLeft} className="relative mt-16 sm:mt-20">
              <div className="relative overflow-hidden rounded-[18px] shadow-[0_18px_40px_-16px_rgba(15,61,30,0.35)] sm:rounded-[24px]">
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                className="pointer-events-none absolute left-1/2 top-0 w-[96px] -translate-x-1/2 -translate-y-1/2 drop-shadow-lg sm:w-[150px] lg:w-[190px]"
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
            className="lg:mt-2"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-[#dcecc8] bg-white p-4 shadow-sm sm:p-5"
            >
              <h3 className="mb-3 text-center text-[14px] font-semibold uppercase tracking-wide text-[#8a8a8a] sm:text-[15px]">
                LiGrA Experiment
              </h3>
              <LigraChart />
            </motion.div>

            {/* TABLE — scrollable on narrow screens so nothing gets clipped */}
            <motion.div variants={fadeUp} className="mt-4">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[340px] border-collapse rounded-xl text-center text-[11px] sm:min-w-0 sm:text-[13px]">
                  <thead>
                    <tr>
                      <th className="border border-[#dcecc8] bg-white px-1.5 py-1.5 text-left font-medium text-[#606060] sm:px-2 sm:py-2" />
                      <th
                        className="border border-[#dcecc8] px-1.5 py-1.5 font-semibold text-white sm:px-2 sm:py-2"
                        style={{ backgroundColor: "#4C8FE8" }}
                      >
                        Control A
                      </th>
                      <th
                        className="border border-[#dcecc8] px-1.5 py-1.5 font-semibold text-white sm:px-2 sm:py-2"
                        style={{ backgroundColor: "#F2A649" }}
                      >
                        Control B
                      </th>
                      <th
                        className="border border-[#dcecc8] px-1.5 py-1.5 font-semibold text-white sm:px-2 sm:py-2"
                        style={{ backgroundColor: "#5FA857" }}
                      >
                        T1
                      </th>
                      <th
                        className="border border-[#dcecc8] px-1.5 py-1.5 font-semibold text-white sm:px-2 sm:py-2"
                        style={{ backgroundColor: "#D9534F" }}
                      >
                        T2
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {ligraTableRows.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? "bg-[#FAFFF0]" : "bg-white"}
                      >
                        <td className="border border-[#dcecc8] px-1.5 py-1.5 text-left font-medium text-[#606060] sm:px-2 sm:py-2">
                          {row.label}
                        </td>
                        <td className="border border-[#dcecc8] px-1.5 py-1.5 text-[#606060] sm:px-2 sm:py-2">
                          {row.controlA}
                        </td>
                        <td className="border border-[#dcecc8] px-1.5 py-1.5 text-[#606060] sm:px-2 sm:py-2">
                          {row.controlB}
                        </td>
                        <td className="border border-[#dcecc8] px-1.5 py-1.5 text-[#606060] sm:px-2 sm:py-2">
                          {row.t1}
                        </td>
                        <td className="border border-[#dcecc8] px-1.5 py-1.5 text-[#606060] sm:px-2 sm:py-2">
                          {row.t2}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* NOTES */}
            <motion.div variants={fadeUp} className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-xl">
                <Image
                  src="/images/mgro/icon/icon-treegreen.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-9 w-9 shrink-0 sm:h-10 sm:w-10"
                />
                <p className="text-[13px] leading-relaxed text-[#606060]">
                  Both T2 and Control B contain bio-organisms, allowing for a
                  fair assessment of the growth impact from LiGrA in T2.
                </p>
              </div>

              <div className="flex items-start gap-3 rounded-xl">
                <Image
                  src="/images/mgro/icon/icon-bullgreen.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-0.5 h-9 w-9 shrink-0 sm:h-10 sm:w-10"
                />
                <p className="text-[13px] leading-relaxed text-[#606060]">
                  When T2 is compared with Control A, which contains no
                  bio-organisms, it shows that adding bio-organisms and LiGrA{" "}
                  <span className="font-semibold" style={{ color: DARK_GREEN }}>
                    yields 37% more crops.
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          EDIBLE GREEN WALL
          ===================================================== */}
      <Section bg="tint">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-[15px] font-bold uppercase tracking-[0.14em]"
              style={{ color: GREEN }}
            >
              Featured in
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-1 text-[clamp(1.3rem,2.6vw,2.5rem)] font-bold leading-snug"
              style={{ color: DARK_GREEN }}
            >
              Singapore Sustainability Academy&rsquo;s Edible Green Wall
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[52ch] text-[14px] font-light leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Launched by the Singapore Sustainability Academy, the Edible
              Green Wall utilizes potting soil combined with LiGrA as the
              growth medium for plants.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[14px] font-bold text-[#606060] sm:text-[18px]"
            >
              Benefit of using mGRO
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-1 max-w-[52ch] text-[14px] font-light leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Enhances soil structure by improving aeration, drainage, and
              resistance to compaction. This creates a healthier root
              environment, allowing plants to establish stronger roots and
              thrive with improved water and air balance.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: EASE }}
            className="relative overflow-hidden rounded-[20px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] sm:rounded-[26px]"
          >
            <Image
              src="/images/mgro/ssa-greenwall.webp"
              alt="Singapore Sustainability Academy's Edible Green Wall installation"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 65vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          STRUCTURAL ADVANTAGES
          ===================================================== */}
      <Section bg="white">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center text-[clamp(1.15rem,2.2vw,1.875rem)] font-bold"
          style={{ color: GREEN }}
        >
          Structural Advantages
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={textContainer}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {structuralAdvantages.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className={`flex items-start gap-4 px-0 sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-[#dcecc8]" : ""
              } ${i === structuralAdvantages.length - 1 ? "sm:col-span-2 sm:mx-auto sm:max-w-[370px] lg:col-span-1 lg:mx-0 lg:max-w-none" : ""}`}
            >
              <Image
                src={item.iconSrc}
                alt=""
                width={32}
                height={32}
                className="h-14 w-14 shrink-0 sm:h-16 sm:w-16"
              />
              <div>
                <p className="text-[14px] font-bold text-[#606060] sm:text-[15px]">
                  {item.title}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#606060] sm:text-[14px]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* =====================================================
          TAMAN DAMAI
          ===================================================== */}
      <Section bg="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: EASE }}
            className="relative overflow-hidden rounded-[20px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] sm:rounded-[26px] lg:order-1"
          >
            <Image
              src="/images/mgro/taman-damai.webp"
              alt="mGRO used in Taman Damai Communal Garden"
              width={1000}
              height={700}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
            className="lg:order-2"
          >
            <motion.div variants={fadeUp} className="hidden sm:block">
              <Image
                src="/images/mgro/icon/icon-arrow.svg"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 lg:-ml-16 lg:h-24 lg:w-24"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-1 text-[clamp(1.3rem,2.6vw,2.5rem)] font-bold leading-tight sm:-mt-2"
              style={{ color: DARK_GREEN }}
            >
              Proven in Taman Damai Communal Garden
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              The approach of combining mGRO with soil has been successfully
              tested at a Communal Garden in Taman Damai, located within the
              HDB estate at Yuan Ching Road.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              A{" "}
              <span className="font-semibold" style={{ color: DARK_GREEN }}>
                40% mGRO : 60% soil
              </span>{" "}
              mixture was used to reduce the stickiness of the clayey soil
              while maintaining favourable conditions for plant growth.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          SEED GERMINATION
          ===================================================== */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={textContainer}
            className="lg:order-1"
          >
            <motion.div variants={fadeUp} className="hidden sm:block">
              <Image
                src="/images/mgro/icon/icon-arrow.svg"
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 scale-x-[-1] lg:ml-auto lg:-mr-16 lg:h-24 lg:w-24"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-1 text-[clamp(1.3rem,2.6vw,2.5rem)] font-bold leading-tight sm:-mt-2"
              style={{ color: DARK_GREEN }}
            >
              Healthy Seed Germination
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              Kang Kong seeds were grown in two different growing media: 100%
              soil and a 50:50 mGRO-soil blend (by volume). Both media
              produced healthy shoots within 5 days, while the mGRO composite
              weighed only{" "}
              <span className="font-semibold" style={{ color: DARK_GREEN }}>
                55% as much as soil
              </span>
              , creating a significantly lighter growing medium.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
            >
              These promising results support the continued exploration of
              mGRO as a sustainable solution for horticultural applications.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: EASE }}
            className="relative overflow-hidden rounded-[20px] shadow-[0_18px_40px_-16px_rgba(0,0,0,0.25)] sm:rounded-[26px] lg:order-2"
          >
            <Image
              src="/images/mgro/seed-germination.webp"
              alt="Kang Kong seedlings grown in mGRO-soil blend"
              width={1000}
              height={700}
              sizes="(max-width: 768px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
