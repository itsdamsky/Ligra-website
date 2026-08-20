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
          className="h-[220px] w-full object-cover object-[65%_center] sm:h-[280px] min-[768px]:max-[1199px]:h-[300px] min-[1200px]:h-[340px]"
        />

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE,
          }}
          className="absolute inset-0 flex flex-col items-start justify-center pl-[10%] pr-6 pt-16 sm:pl-[16%] sm:pt-14 min-[768px]:max-[1199px]:pl-[12%] min-[768px]:max-[1199px]:pt-12 min-[1200px]:pl-[16%] min-[1200px]:pt-18"
        >
          <div className="relative">
            <Image
              src="/images/mgro/logo-mgro-green.svg"
              alt="mGRO"
              width={140}
              height={40}
              className="h-auto w-24 sm:w-38 min-[768px]:max-[1199px]:w-32 min-[1200px]:w-46"
            />
          </div>

          <p
            className="whitespace-nowrap text-[14px] font-semibold leading-snug sm:text-[18px] min-[768px]:max-[1199px]:text-[24px] min-[1200px]:text-[30px]"
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
            className="relative w-full overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16 min-[768px]:max-[1023px]:pb-8 min-[768px]:max-[1023px]:pt-16 min-[1024px]:max-[1199px]:pb-24 min-[1024px]:max-[1199px]:pt-16 min-[1200px]:pb-32 min-[1200px]:pt-20"
            style={{
              backgroundColor: product.bgTint ?? "#FFFFFF",
            }}
          >
            {/* =====================================================
                MOBILE + DESKTOP BASE
                Mobile (<768px) keeps the current mobile composition.
                Desktop (>=1200px) keeps the current desktop composition.
                Tablet 768–1199px uses the dedicated layout below.
                ===================================================== */}
            <div
              className={`
                mx-auto flex max-w-[1400px] flex-col gap-8 px-4 sm:px-6
                min-[768px]:max-[1199px]:hidden
                min-[1200px]:grid min-[1200px]:gap-10 min-[1200px]:px-8
                ${
                  product.imageOnLeft
                    ? "min-[1200px]:grid-cols-[1fr_1.05fr]"
                    : "min-[1200px]:grid-cols-[1.05fr_1fr]"
                }
              `}
            >
              {/* IMAGE SIDE */}
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
                className={`relative self-start ${
                  product.imageOnLeft
                    ? "order-1 min-[1200px]:order-1"
                    : "order-1 min-[1200px]:order-2"
                }`}
              >
                <div className="relative overflow-visible">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={product.image}
                      alt={`${product.eyebrow} ${product.title}`}
                      width={700}
                      height={480}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="h-auto w-full object-cover"
                    />
                  </div>

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
                    className={`
                      pointer-events-none absolute z-20
                      -bottom-5 w-[clamp(96px,18vw,200px)] drop-shadow-2xl
                      ${
                        bagOnLeft
                          ? "left-2"
                          : "right-2"
                      }
                      min-[1200px]:${
                        bagOnLeft
                          ? "left-0 -translate-x-1/2"
                          : "right-0 translate-x-1/2"
                      }
                    `}
                  >
                    <Image
                      src={product.bagImage}
                      alt={`mGRO ${product.title} packaging`}
                      width={400}
                      height={560}
                      sizes="(max-width: 767px) 140px, 200px"
                      className="h-auto w-full"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={textContainer}
                className={`${
                  product.imageOnLeft
                    ? "order-2 min-[1200px]:order-2 min-[1200px]:pl-20"
                    : "order-2 min-[1200px]:order-1"
                }`}
              >
                <div className="w-full">
                  <motion.p
                    variants={fadeUp}
                    className="text-[26px] font-bold italic uppercase leading-none tracking-wide sm:text-[36px] min-[1200px]:text-[42px]"
                    style={{ color: DARK_GREEN }}
                  >
                    {product.eyebrow}
                  </motion.p>

                  <motion.h2
                    variants={fadeUp}
                    className="mt-1 text-[20px] font-bold italic leading-tight sm:text-[26px] min-[1200px]:text-[30px]"
                    style={{ color: GREEN }}
                  >
                    {product.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-[#606060] sm:text-[16px]"
                  >
                    {product.description.join(" ")}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6 min-[1200px]:flex min-[1200px]:items-start min-[1200px]:gap-x-8"
                  >
                    {product.benefits.map((b) => (
                      <div
                        key={b.label}
                        className="flex flex-col items-center gap-2 text-center"
                      >
                        <Image
                          src={b.iconSrc}
                          alt=""
                          width={64}
                          height={64}
                          className="h-12 w-auto sm:h-14 min-[1200px]:h-16"
                        />

                        <p className="whitespace-pre-line text-[11px] font-regular uppercase leading-snug text-[#3d3d3d] sm:text-[13px] min-[1200px]:text-[10px]">
                          {b.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>

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
                </div>
              </motion.div>
            </div>

            {/* =====================================================
                TABLET 768–1199px (REDESIGNED)

                768–1023px (portrait, incl. iPad Air 820px):
                  - Image is FULL-BLEED (edge to edge, no side padding)
                  - Bag tucked into a corner, inset from the edge
                  - Text block below, centered, comfortable reading width
                  - Benefits as a clean 4-col row, larger icons, readable labels

                1024–1199px (landscape):
                  - Two-column row, image + text side by side
                  - Alternates left/right per product, same as desktop rhythm
                ===================================================== */}

            {/* ---- PORTRAIT 768–1023px: full-bleed image ---- */}
            <div
              className={`hidden min-[768px]:max-[1023px]:block ${
                product.bgTint || products[i - 1]?.bgTint
                  ? "min-[768px]:max-[1023px]:-mt-16"
                  : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative w-full"
              >
                <div className="relative w-full overflow-hidden aspect-[16/10]">
                  <Image
                    src={product.image}
                    alt={`${product.eyebrow} ${product.title}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: EASE,
                  }}
                  className={`
                    pointer-events-none absolute z-20 -bottom-14
                    w-[clamp(170px,22vw,250px)] drop-shadow-2xl
                    ${bagOnLeft ? "left-6 sm:left-10" : "right-6 sm:right-10"}
                  `}
                >
                  <Image
                    src={product.bagImage}
                    alt={`mGRO ${product.title} packaging`}
                    width={400}
                    height={560}
                    sizes="250px"
                    className="h-auto w-full"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={textContainer}
                className="mx-auto mt-20 w-full max-w-[760px] px-6 text-center sm:px-8"
              >
                <motion.p
                  variants={fadeUp}
                  className="text-[30px] font-bold italic uppercase leading-[0.98] tracking-wide"
                  style={{ color: DARK_GREEN }}
                >
                  {product.eyebrow}
                </motion.p>

                <motion.h2
                  variants={fadeUp}
                  className="mt-2 text-[22px] font-bold italic leading-[1.1]"
                  style={{ color: GREEN }}
                >
                  {product.title}
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.65] text-[#606060]"
                >
                  {product.description.join(" ")}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mx-auto mt-9 flex max-w-[720px] flex-wrap justify-center gap-x-8 gap-y-6"
                >
                  {product.benefits.map((b) => (
                    <div
                      key={b.label}
                      className="flex w-[150px] flex-col items-center gap-2.5 text-center"
                    >
                      <Image
                        src={b.iconSrc}
                        alt=""
                        width={64}
                        height={64}
                        className="h-12 w-auto"
                      />

                      <p className="line-clamp-2 whitespace-pre-line text-[11px] font-medium uppercase leading-[1.35] text-[#3d3d3d]">
                        {b.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {product.mosquitoNote && (
                  <motion.div
                    variants={fadeUp}
                    className="mx-auto mt-8 flex max-w-[380px] flex-col items-center gap-2 text-center"
                  >
                    <Image
                      src="/images/mgro/icon/icon-mosquito.svg"
                      alt=""
                      width={56}
                      height={56}
                      className="h-12 w-12 shrink-0"
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

            {/* ---- LANDSCAPE 1024–1199px: two-column row ---- */}
            <div className="mx-auto hidden w-full max-w-[1040px] px-8 min-[1024px]:max-[1199px]:block">
              <div
                className={`
                  flex flex-row items-center gap-16 text-left
                  ${product.imageOnLeft ? "" : "flex-row-reverse"}
                `}
              >
                {/* MEDIA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative flex-1"
                >
                  <div className="relative overflow-visible">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] shadow-xl shadow-black/10">
                      <Image
                        src={product.image}
                        alt={`${product.eyebrow} ${product.title}`}
                        fill
                        sizes="45vw"
                        className="object-cover"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{
                        duration: 0.55,
                        delay: 0.15,
                        ease: EASE,
                      }}
                      className={`
                        pointer-events-none absolute z-20 -bottom-11
                        w-[clamp(150px,19vw,215px)] drop-shadow-2xl
                        ${bagOnLeft ? "-left-8" : "-right-8"}
                      `}
                    >
                      <Image
                        src={product.bagImage}
                        alt={`mGRO ${product.title} packaging`}
                        width={400}
                        height={560}
                        sizes="215px"
                        className="h-auto w-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={textContainer}
                  className="flex-1"
                >
                  <motion.p
                    variants={fadeUp}
                    className="text-[36px] font-bold italic uppercase leading-[0.98] tracking-wide"
                    style={{ color: DARK_GREEN }}
                  >
                    {product.eyebrow}
                  </motion.p>

                  <motion.h2
                    variants={fadeUp}
                    className="mt-2 text-[27px] font-bold italic leading-[1.1]"
                    style={{ color: GREEN }}
                  >
                    {product.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-[#606060]"
                  >
                    {product.description.join(" ")}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="mt-9 grid grid-cols-4 items-start gap-x-6 gap-y-4"
                  >
                    {product.benefits.map((b) => (
                      <div
                        key={b.label}
                        className="flex min-w-0 flex-col items-center gap-2.5 text-center"
                      >
                        <Image
                          src={b.iconSrc}
                          alt=""
                          width={64}
                          height={64}
                          className="h-14 w-auto"
                        />

                        <p className="line-clamp-2 whitespace-pre-line text-[11px] font-medium uppercase leading-[1.3] text-[#3d3d3d]">
                          {b.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>

                  {product.mosquitoNote && (
                    <motion.div
                      variants={fadeUp}
                      className="mt-7 flex items-center gap-3"
                    >
                      <Image
                        src="/images/mgro/icon/icon-mosquito.svg"
                        alt=""
                        width={56}
                        height={56}
                        className="h-12 w-12 shrink-0"
                      />

                      <div className="text-left">
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
            </div>
          </section>
        );
      })}
    </>
  );
}
