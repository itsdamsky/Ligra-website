"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DARK_GREEN = "#259539";
const GREEN = "#88B532";

const EASE = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   SMOOTH LIGHTWEIGHT ANIMATIONS
   ========================================================= */

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

const viewportOnce = {
  once: true,
  amount: 0.2 as const,
};

/* ========================================================= */

type Benefit = {
  iconSrc: string;
  label: string;
};

type Product = {
  eyebrow: string;
  title: string;
  description: string[];
  image: string;
  bagImage: string;
  benefits: Benefit[];
  bgTint?: string;
  imageOnLeft: boolean;
  mosquitoNote?: boolean;
};

const products: Product[] = [
  {
    eyebrow: "HYDROPONIC",
    title: "Growth Medium",
    description: [
      "mGRO provides stable support for plant roots while maintaining excellent air circulation and rapid drainage.",
      "Its lightweight, porous structure helps deliver oxygen to the root zone, promoting healthy root development and reducing the risk of waterlogging. Durable and reusable, it's an ideal growing medium for hydroponic.",
    ],
    image: "/images/mgro/hydroponic-photo.webp",
    bagImage: "/images/mgro/bag-hydroponic.webp",
    benefits: [
      {
        iconSrc: "/images/mgro/icon/icon-highly-porous.svg",
        label: "Highly\nPorous",
      },
      {
        iconSrc: "/images/mgro/icon/icont-retains-water.svg",
        label: "Retains Water,\nNutrients & Microbes",
      },
      {
        iconSrc: "/images/mgro/icon/icon-excellent.svg",
        label: "Excellent\nDrainage",
      },
      {
        iconSrc: "/images/mgro/icon/icon-healty-growth.svg",
        label: "Healthy\nRoot Growth",
      },
    ],
    imageOnLeft: false,
  },

  {
    eyebrow: "SOIL AERATOR",
    title: "Improve Soil from the Ground Up",
    description: [
      "mGRO as lightweight soil aerator is designed to enhance soil structure by increasing air space and improving drainage. When mixed with soil, it helps reduce compaction and stickiness, creating a healthier environment where roots can grow, breathe, and access water more efficiently.",
      "Its durable, porous structure keeps the growing medium open over time, supporting stronger root development and healthier plant growth.",
    ],
    image: "/images/mgro/soil-aerator-photo.webp",
    bagImage: "/images/mgro/bag-soil-aerator.webp",
    benefits: [
      {
        iconSrc: "/images/mgro/icon/Icon-improves-darkgreen.svg",
        label: "Improves Water\nBalance",
      },
      {
        iconSrc: "/images/mgro/icon/icon-airflow-darkgreen.svg",
        label: "Increases Air Flow\n& Drainage",
      },
      {
        iconSrc: "/images/mgro/icon/icon-lightweight-darkgreen.svg",
        label: "Lightweight\n& Rich in Silica",
      },
      {
        iconSrc: "/images/mgro/icon/icon-prevent-rot.svg",
        label: "Prevents\nRoot Rot",
      },
    ],
    imageOnLeft: true,
    bgTint: "#FAFFF0",
  },

  {
    eyebrow: "SOILLESS MEDIUM",
    title: "Build a Better Growing Mix",
    description: [
      "mGRO transforms coco peat and other soilless substrates into a more balanced, high-performance growing medium.",
      "By improving the structure of the mix, it enhances aeration, supports efficient drainage, and maintains optimal moisture conditions for stronger root development and healthier plant growth.",
    ],
    image: "/images/mgro/soilless-photo.webp",
    bagImage: "/images/mgro/bag-soilless.webp",
    benefits: [
      {
        iconSrc: "/images/mgro/icon/Icon-improves-darkgreen.svg",
        label: "Improves Water\nBalance",
      },
      {
        iconSrc: "/images/mgro/icon/icon-airflow-darkgreen.svg",
        label: "Increases Air Flow\n& Drainage",
      },
      {
        iconSrc: "/images/mgro/icon/icon-lightweight-darkgreen.svg",
        label: "Lightweight\n& Rich in Silica",
      },
      {
        iconSrc: "/images/mgro/icon/icon-prevent-rot.svg",
        label: "Prevents\nRoot Rot",
      },
    ],
    imageOnLeft: false,
  },

  {
    eyebrow: "TOP DRESSING",
    title: "Mosquito Control",
    description: [
      "mGRO Top Dressing creates a decorative and also protective surface layer that helps prevent mosquito breeding by minimising water pooling on the soil surface.",
      "Its lightweight, porous structure & inlet properties improve drainage and airflow while supporting healthier root growth, providing a chemical-free solution for indoor and outdoor potted plants.",
    ],
    image: "/images/mgro/top-dressing-photo.webp",
    bagImage: "/images/mgro/bag-top-dressing.webp",
    benefits: [
      {
        iconSrc: "/images/mgro/icon/icon-chemical-free.svg",
        label: "Chemical\nFree",
      },
      {
        iconSrc: "/images/mgro/icon/icon-water-pooling.svg",
        label: "Prevents Water\nPooling",
      },
      {
        iconSrc: "/images/mgro/icon/icon-healthy-darkgreen.svg",
        label: "Supports\nRoot Growth",
      },
      {
        iconSrc: "/images/mgro/icon/icon-airflow-full.svg",
        label: "Improves Drainage\n& Air Flow",
      },
    ],
    imageOnLeft: true,
    bgTint: "#FAFFF0",
    mosquitoNote: true,
  },
];

/* ========================================================= */

export default function GrowingSolutionsPage() {
  return (
    <>
      {/* =====================================================
          HERO BANNER
          ===================================================== */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/mgro/growsolutions.webp"
          alt="mGRO lava rocks growing medium with potted plants"
          width={2200}
          height={620}
          priority
          className="h-[220px] w-full object-cover object-[65%_center] sm:h-[280px] lg:h-[340px]"
        />

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="absolute inset-0 flex flex-col items-start justify-center pl-[10%] pr-6 pt-16 sm:pl-[16%] sm:pt-14 lg:pl-[16%] lg:pt-18"
        >
          <div className="relative">
            <Image
              src="/images/mgro/logo-mgro-green.svg"
              alt="mGRO"
              width={140}
              height={40}
              className="h-auto w-24 sm:w-38 lg:w-46"
            />
          </div>

          <p
            className="whitespace-nowrap text-[14px] font-semibold leading-snug sm:text-[18px] lg:text-[30px]"
            style={{ color: DARK_GREEN }}
          >
            Discover the right growing solution
            <br />
            for every plant and every growing method
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          PRODUCT SECTIONS
          ===================================================== */}

      {products.map((product, i) => {
        const bagOnLeft = i % 2 === 0;

        return (
          <section
            key={product.title}
            className="w-full overflow-x-hidden pb-24 pt-14 sm:pb-32 sm:pt-20"
            style={{
              backgroundColor: product.bgTint ?? "#FFFFFF",
              paddingLeft:
                "max(24px, calc((100vw - 1400px) / 2 + 24px))",
              paddingRight:
                "max(24px, calc((100vw - 1400px) / 2 + 24px))",
            }}
          >
            <div
              className={`grid gap-10 lg:items-center ${
                product.imageOnLeft
                  ? "lg:grid-cols-[1fr_1.05fr]"
                  : "lg:grid-cols-[1.05fr_1fr]"
              }`}
            >
              {/* =================================================
                  IMAGE SIDE
                  FOTO + BAG DIANIMASIKAN RINGAN
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: product.imageOnLeft ? -20 : 20,
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
                className={`relative ${
                  product.imageOnLeft
                    ? "lg:order-1"
                    : "lg:order-2"
                }`}
              >
                {/* MAIN IMAGE */}

                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={`${product.eyebrow} ${product.title}`}
                    width={700}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>

                {/* BAG IMAGE */}

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
                    delay: 0.12,
                    ease: EASE,
                  }}
                  className={`pointer-events-none absolute -bottom-6 w-[110px] drop-shadow-2xl sm:w-[140px] lg:w-[200px] ${
                    bagOnLeft
                      ? "left-0 -translate-x-1/2"
                      : "right-0 translate-x-1/2"
                  }`}
                >
                  <Image
                    src={product.bagImage}
                    alt={`mGRO ${product.title} packaging`}
                    width={400}
                    height={560}
                    sizes="(max-width: 1024px) 140px, 200px"
                    className="h-auto w-full"
                  />
                </motion.div>
              </motion.div>

              {/* =================================================
                  TEXT SIDE
                  MUNCUL SATU PER SATU
                  ================================================= */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={textContainer}
                className={`${
                  product.imageOnLeft
                    ? "lg:order-2 lg:pl-20"
                    : "lg:order-1"
                }`}
              >
                {/* EYEBROW */}

                <motion.p
                  variants={fadeUp}
                  className="text-[26px] font-bold italic uppercase leading-none tracking-wide sm:text-[36px] lg:text-[42px]"
                  style={{
                    color: DARK_GREEN,
                  }}
                >
                  {product.eyebrow}
                </motion.p>

                {/* TITLE */}

                <motion.h2
                  variants={fadeUp}
                  className="mt-1 text-[20px] font-bold italic leading-tight sm:text-[26px] lg:text-[30px]"
                  style={{
                    color: GREEN,
                  }}
                >
                  {product.title}
                </motion.h2>

                {/* DESCRIPTION */}

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
                >
                  {product.description.join(" ")}
                </motion.p>

                {/* BENEFITS */}

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex items-start gap-x-8 sm:gap-x-10"
                >
                  {product.benefits.map((b) => (
                    <div
                      key={b.label}
                      className="flex w-fit flex-col items-center gap-2 text-center"
                    >
                      <Image
                        src={b.iconSrc}
                        alt=""
                        width={64}
                        height={64}
                        className="h-12 w-auto sm:h-14 lg:h-16"
                      />

                      <p className="whitespace-pre-line text-[11px] font-regular uppercase leading-snug text-[#3d3d3d] sm:text-[13px] lg:text-[10px]">
                        {b.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* MOSQUITO NOTE */}

                {product.mosquitoNote && (
                  <motion.div
                    variants={fadeUp}
                    className="mt-6 flex items-center gap-3"
                  >
                    <Image
                      src="/images/mgro/icon/icon-mosquito.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0"
                    />

                    <div>
                      <p className="text-[15px] font-bold uppercase leading-tight text-red-600">
                        Prevent Mosquito
                        <br />
                        Breeding
                      </p>

                      <p className="mt-1 text-[13px] leading-relaxed text-[#3d3d3d]">
                        Stop mosquitoes from laying eggs
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}