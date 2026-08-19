import Image from "next/image";

const DARK_GREEN = "#259539";
const LIGHT_GREEN = "#8bc34a";

const ROOFTOP_PHOTO = "/images/mgro/rooftop-garden.webp";
const PLANTER_BOX_3D = "/images/mgro/planter-box.webp";

const LEAF_DECOR = "/images/mgro/leaf-decor-tall.svg";

const specs = [
  { label: "Size", value: "2 to 8mm" },
  { label: "Bulk Density", value: "150kg/m³" },
  { label: "Crushing Value", value: "0.6 MPa" },
  { label: "Water Abs by Volume", value: "30kg/m³" },
];

const benefits = [
  {
    iconSrc: "/images/mgro/icon/icon-weightgreen.svg",
    text: "Lightest amongst all lightweight aggregates",
  },
  {
    iconSrc: "/images/mgro/icon/icon-watergreen.svg",
    text: "Water absorption of 30kg/m³ does not increase roof loading significantly",
  },
  {
    iconSrc: "/images/mgro/icon/icon-deffance.svg",
    text: "Solid particulate with high crushing strength does not cause settlement",
  },
  {
    iconSrc: "/images/mgro/icon/icon-aint.svg",
    text: "Create inhospitable environment for pests such as cockroaches and termites.",
  },
];

export default function GrowHigherSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Dekorasi daun — 1 gambar utuh, absolute, ditaruh nembus batas section 1 (hijau)
          ke section 2 (putih) di pojok kiri-bawah. z-20 supaya tampil DI ATAS background
          section (yang solid/opaque), soalnya kalau di-z-0 dia ketutup total. */}
      <div className="pointer-events-none absolute -left-6 top-[260px] z-20 w-[220px] opacity-70 sm:top-[320px] sm:w-[300px] lg:w-[360px]">
        <Image
          src={LEAF_DECOR}
          alt=""
          width={480}
          height={900}
          className="h-auto w-full"
        />
      </div>

      {/* SECTION 1 — hijau muda (kiri: heading+teks) / foto full-bleed (kanan), tinggi fix 624px */}
      <section className="relative z-10 grid h-[624px] w-full bg-[#FAFFF0] lg:grid-cols-2">
        <div
          className="flex h-full flex-col justify-center pr-8 py-16 sm:pr-14 sm:py-20 lg:pr-16 lg:py-0"
          style={{ paddingLeft: "max(24px, calc((100vw - 1400px) / 2 + 24px))" }}
        >
          <Image
            src="/images/mgro/icon/icon-weightgreen.svg"
            alt=""
            width={36}
            height={36}
            className="h-16 w-16"
          />
          <h2 className="text-[28px] font-bold leading-tight sm:text-[40px]" style={{ color: DARK_GREEN }}>
            Grow Higher. Carry Lighter.
          </h2>
          <p
            className="mt-1 max-w-[260px] text-[19px] font-bold leading-snug sm:max-w-[420px] sm:text-[30px]"
            style={{ color: LIGHT_GREEN }}
          >
            Perfect for Rooftops,{" "}
            <span className="whitespace-nowrap">Balconies &amp; Urban Gardens</span>
          </p>
          <p className="mt-4 max-w-[1400px] text-[15px] leading-relaxed text-[#606060] sm:text-base">
            mGRO can be as low as 25% the weight of traditional soil, making it an ideal growing medium for weight-sensitive spaces. Create thriving gardens on rooftops, balconies, terraces, and elevated planters with less load and easier handling while supporting healthier plants.
          </p>
        </div>

        <div className="relative h-full w-full">
          <Image
            src={ROOFTOP_PHOTO}
            alt="Rooftop garden with lightweight mGRO planter boxes and lush plants"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* SECTION 2 — putih (kiri: ilustrasi 3D planter box + spec, kanan: heading + bullet benefit) */}
      <section className="relative z-10 w-full bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Ilustrasi 3D planter box */}
          <div>
            <Image
              src={PLANTER_BOX_3D}
              alt="Isometric illustration of a raised planter box with mGRO lightweight aggregate layers"
              width={700}
              height={560}
              className="h-auto w-full"
            />
            <p className="mt-3 text-center text-[9px] text-gray-500 sm:text-[11px]">
              {specs.map((spec, i) => (
                <span key={spec.label}>
                  {i !== 0 && <span className="mx-1 text-gray-300">|</span>}
                  {spec.label}: <span className="font-semibold text-gray-700">{spec.value}</span>
                </span>
              ))}
            </p>
          </div>

          {/* Heading + bullet benefit */}
          <div>
            <h3 className="text-[26px] font-bold leading-tight sm:text-[40px]">
              <span style={{ color: DARK_GREEN }}>Create larger planter box
              <br />with </span> 
              <span style={{ color: LIGHT_GREEN }}>less weight.</span>
            </h3>

            <ul className="mt-8 space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit.text} className="flex items-center gap-8">
                  <Image
                    src={benefit.iconSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="h-10 w-10 shrink-0"
                  />
                  <p className="text-base font-light leading-relaxed text-[#606060] sm:text-[20px]">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
