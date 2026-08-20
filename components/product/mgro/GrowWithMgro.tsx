"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DARK_GREEN = "#259539";

const BANNER_IMAGE = "/images/mgro/grow.webp";

const CORNER_LEAVES = {
  left: "/images/mgro/leaf-left.svg",
  right: "/images/mgro/flower-right.svg",
};

const benefits = [
  {
    iconSrc: "/images/mgro/icon/icon-lightweight.svg",
    label: "Lightweight\n& Rich in Silica",
  },
  {
    iconSrc: "/images/mgro/icon/icon-porous.svg",
    label: "Highly\nPorous",
  },
  {
    iconSrc: "/images/mgro/icon/icon-water.svg",
    label: "Retains Water,\nNutrients & Microbes",
  },
  {
    iconSrc: "/images/mgro/icon/icon-airflow.svg",
    label: "Increases Air Flow\n& Drainage",
  },
  {
    iconSrc: "/images/mgro/icon/icon-healthy.svg",
    label: "Healthy\nRoot Growth",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const viewportOnce = { once: true, amount: 0.2 } as const;

export default function GrowWithMgroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-10 sm:pb-24 sm:pt-12">
      {/* LEFT LEAVES */}
      <motion.div
        className="pointer-events-none absolute left-0 top-20 w-[120px] opacity-70 sm:w-[200px] lg:w-[280px]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1, ease: EASE }}
      >
        <Image
          src={CORNER_LEAVES.left}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </motion.div>

      {/* RIGHT FLOWER */}
      <motion.div
        className="pointer-events-none absolute bottom-20 right-0 w-[160px] opacity-70 sm:w-[280px] lg:w-[420px]"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
      >
        <Image
          src={CORNER_LEAVES.right}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </motion.div>

      {/* PRODUCT BANNER */}
      <div className="relative z-10 mx-auto mt-4 max-w-5xl px-5 sm:px-8">
        <div className="relative">
          {/* GREEN BAR */}
          <motion.div
            className="absolute inset-x-0 top-1/2 h-[90px] -translate-y-1/2 rounded-[32px] sm:inset-x-2 sm:h-[110px] sm:rounded-[36px] lg:h-[130px] lg:rounded-[40px]"
            style={{ backgroundColor: "#88B532" }}
            initial={{ opacity: 0, scaleX: 0.9 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          />

          {/* PRODUCT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <Image
              src={BANNER_IMAGE}
              alt="mGRO product lineup: Hydroponic Growth Medium, Soil Aerator, Soilless Medium, and Top Dressing"
              width={1600}
              height={620}
              className="relative h-auto w-full translate-x-0 sm:translate-x-8"
              priority
            />
          </motion.div>

          {/* HEADING — pt in % so it stays proportional to the image's
              fluid height at every viewport width, not just at breakpoints */}
          <motion.div
            className="absolute inset-0 z-20 flex items-start justify-center px-4 pt-[max(0.5rem,3%)] text-center sm:pt-[max(1rem,5%)] sm:px-6 lg:pt-[max(2.25rem,11%)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          >
            <h2
              className="text-[clamp(1.35rem,4vw,2.5rem)] font-bold leading-tight"
              style={{
                color: DARK_GREEN,
                textShadow:
                  "0 0 8px rgba(255,255,255,0.95), 0 0 16px rgba(255,255,255,0.85), 0 0 28px rgba(255,255,255,0.6)",
              }}
            >
              Grow with mGRO
            </h2>
          </motion.div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <motion.div
        className="relative z-20 mx-auto -mt-4 max-w-2xl px-5 text-center sm:-mt-12 sm:px-8 lg:-mt-24"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
      >
        <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
          mGRO offers four specialised growing media solutions, each designed
          to support healthier roots and stronger plants. Whether you&apos;re
          aerating soil, creating a soilless mix, growing hydroponically, or
          adding a protective top dressing, our products help improve
          drainage, increase aeration, and make plant care easier all with
          lightweight, sustainable materials powered by LiGrA® technology.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/growing-media/solutions"
            className="mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: DARK_GREEN }}
          >
            EXPLORE MORE
          </Link>
        </motion.div>
      </motion.div>

      {/* WHY MGRO */}
      <div className="relative z-10 mx-auto mt-14 max-w-5xl px-5 text-center sm:mt-16 sm:px-8">
        {/* TITLE */}
        <motion.h3
          className="text-[clamp(1.3rem,3vw,2rem)] font-bold"
          style={{ color: DARK_GREEN }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          Why use mGRO for your plants?
        </motion.h3>

        {/* BENEFITS — flex-wrap + justify-center so an incomplete last
            row (e.g. 5 items wrapping to 2+2+1) centers itself instead
            of hanging left under the grid */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-8 sm:mt-10 sm:gap-x-8 sm:gap-y-10 lg:gap-x-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              className={`group flex cursor-pointer flex-col items-center gap-3 sm:w-[27%] lg:w-[17%] ${
                index === 2 ? "w-full" : "w-[40%]"
              }`}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE },
                },
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={benefit.iconSrc}
                  alt=""
                  width={80}
                  height={80}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                />
              </motion.div>

              <p className="whitespace-pre-line text-xs font-semibold leading-snug text-gray-700 transition-colors duration-300 group-hover:text-[#259539] sm:text-sm">
                {benefit.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
