import Image from "next/image";
import Link from "next/link";

const DARK_GREEN = "#259539";

const BANNER_IMAGE = "/images/mgro/grow.webp";

const CORNER_LEAVES = {
  left: "/images/mgro/leaf-left.svg",
  right: "/images/mgro/flower-right.svg",
};

const benefits = [
  { iconSrc: "/images/mgro/icon/icon-lightweight.svg", label: "Lightweight\n& Rich in Silica" },
  { iconSrc: "/images/mgro/icon/icon-porous.svg", label: "Highly\nPorous" },
  { iconSrc: "/images/mgro/icon/icon-water.svg", label: "Retains Water,\nNutrients & Microbes" },
  { iconSrc: "/images/mgro/icon/icon-airflow.svg", label: "Increases Air Flow\n& Drainage" },
  { iconSrc: "/images/mgro/icon/icon-healthy.svg", label: "Healthy\nRoot Growth" },
];

export default function GrowWithMgroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-20 pt-10 sm:pb-24 sm:pt-12">
      <div className="pointer-events-none absolute left-0 top-20 w-[160px] opacity-70 sm:w-[220px] lg:w-[280px]">
        <Image
          src={CORNER_LEAVES.left}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-0 w-[220px] opacity-70 sm:w-[320px] lg:w-[420px]">
        <Image
          src={CORNER_LEAVES.right}
          alt=""
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto mt-4 max-w-5xl px-6">
        <div className="relative">
          <div
            className="absolute inset-x-0 top-1/2 h-[110px] -translate-y-1/2 rounded-[40px] sm:inset-x-2 sm:h-[130px]"
            style={{ backgroundColor: "#88B532" }}
          />

          <Image
            src={BANNER_IMAGE}
            alt="mGRO product lineup: Hydroponic Growth Medium, Soil Aerator, Soilless Medium, and Top Dressing"
            width={1600}
            height={620}
            className="relative h-auto w-full translate-x-8"
            priority
          />

          {/* Heading — overlay absolute, persis di tengah-tengah gambar (bukan di atas gambar) */}
          <div className="absolute inset-0 z-20 flex items-start justify-center px-6 pt-22 text-center">
            <h2
              className="text-[32px] font-bold leading-tight sm:text-[40px]"
              style={{ color: DARK_GREEN }}
            >
              Grow with mGRO
            </h2>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-14 max-w-2xl px-6 text-center sm:-mt-16">
        <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">
          mGRO offers four specialised growing media solutions, each designed to
          support healthier roots and stronger plants. Whether you&apos;re
          aerating soil, creating a soilless mix, growing hydroponically, or
          adding a protective top dressing, our products help improve drainage,
          increase aeration, and make plant care easier all with lightweight,
          sustainable materials powered by LiGrA® technology.
        </p>

        <Link
            href="/growing-media/solutions"
            className="mt-6 inline-block rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: DARK_GREEN }}
            >
            EXPLORE MORE
        </Link>
      </div>

      {/* Why use mGRO */}
      <div className="relative z-10 mx-auto mt-14 max-w-5xl px-6 text-center sm:mt-16">
        <h3
          className="text-[26px] font-bold sm:text-[32px]"
          style={{ color: DARK_GREEN }}
        >
          Why use mGRO for your plants?
        </h3>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-5 sm:gap-x-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="group flex flex-col items-center gap-3"
            >
              <Image
                src={benefit.iconSrc}
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-md sm:h-20 sm:w-20 cursor-pointer"
              />
              <p className="whitespace-pre-line text-xs font-semibold leading-snug text-gray-700 transition-colors duration-300 group-hover:text-[#259539] sm:text-sm">
                {benefit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
