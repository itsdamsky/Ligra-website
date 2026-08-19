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

export default function GrowWithMgroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-10 sm:pb-24 sm:pt-12">

      {/* LEFT LEAVES */}
      <motion.div
        className="pointer-events-none absolute left-0 top-20 w-[160px] opacity-70 sm:w-[220px] lg:w-[280px]"
        initial={{
          opacity: 0,
          x: -40,
        }}
        whileInView={{
          opacity: 0.7,
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
          src={CORNER_LEAVES.left}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </motion.div>

      {/* RIGHT FLOWER */}
      <motion.div
        className="pointer-events-none absolute bottom-20 right-0 w-[220px] opacity-70 sm:w-[320px] lg:w-[420px]"
        initial={{
          opacity: 0,
          x: 40,
        }}
        whileInView={{
          opacity: 0.7,
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
          src={CORNER_LEAVES.right}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </motion.div>

      {/* PRODUCT BANNER */}
      <div className="relative z-10 mx-auto mt-4 max-w-5xl px-6">
        <div className="relative">

          {/* GREEN BAR */}
          <motion.div
            className="absolute inset-x-0 top-1/2 h-[110px] -translate-y-1/2 rounded-[40px] sm:inset-x-2 sm:h-[130px]"
            style={{ backgroundColor: "#88B532" }}
            initial={{
              opacity: 0,
              scaleX: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* PRODUCT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={BANNER_IMAGE}
              alt="mGRO product lineup: Hydroponic Growth Medium, Soil Aerator, Soilless Medium, and Top Dressing"
              width={1600}
              height={620}
              className="relative h-auto w-full translate-x-8"
              priority
            />
          </motion.div>

          {/* HEADING */}
          <motion.div
            className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-22 text-center"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="text-[32px] font-bold leading-tight sm:text-[40px]"
              style={{ color: DARK_GREEN }}
            >
              Grow with mGRO
            </h2>
          </motion.div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <motion.div
        className="relative z-20 mx-auto -mt-14 max-w-2xl px-6 text-center sm:-mt-16"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
          mGRO offers four specialised growing media solutions, each designed
          to support healthier roots and stronger plants. Whether you&apos;re
          aerating soil, creating a soilless mix, growing hydroponically, or
          adding a protective top dressing, our products help improve drainage,
          increase aeration, and make plant care easier all with lightweight,
          sustainable materials powered by LiGrA® technology.
        </p>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
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
      <div className="relative z-10 mx-auto mt-14 max-w-5xl px-6 text-center sm:mt-16">

        {/* TITLE */}
        <motion.h3
          className="text-[26px] font-bold sm:text-[32px]"
          style={{ color: DARK_GREEN }}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Why use mGRO for your plants?
        </motion.h3>

        {/* BENEFITS */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5 sm:gap-x-4"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.label}
              className="group flex cursor-pointer flex-col items-center gap-3"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={benefit.iconSrc}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
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