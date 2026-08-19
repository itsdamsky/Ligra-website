import Image from "next/image";

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

export default function ComparisonSection() {
  return (
    <section className="relative flex h-[620px] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F6] to-[#f2f1ea]">
      {/* Decorative corner images */}
      <div className="pointer-events-none absolute left-0 bottom-0 w-[220px] sm:w-[300px] lg:w-[360px]">
        <Image
          src="/images/mgro/bibit.webp"
          alt="Seedlings sprouting from lightweight aggregate soil"
          width={520}
          height={640}
          className="h-auto w-full"
        />
      </div>

      <div className="pointer-events-none absolute right-0 top-0 w-[140px] sm:w-[200px] lg:w-[260px]">
        <Image
          src="/images/mgro/grow-right.webp"
          alt="LiGrA lightweight aggregate pebbles with leaves"
          width={380}
          height={467}
          className="h-auto w-full"
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2
          className="text-[40px] font-extrabold leading-tight"
          style={{ color: DARK_GREEN }}
        >
          Better Drainage. Better Roots. Better Growth.
        </h2>
        <p
          className="mt-1 text-[30px] font-bold"
          style={{ color: LIGHT_GREEN }}
        >
          mGRO provides something very few substrates offer
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-[1000px] items-stretch px-6 sm:mt-8 sm:px-10">
        {/* Kartu Property */}
        <div className="flex-[1.3] overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white">
          <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
            PROPERTY
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-center px-3 py-4 ${
                i !== rows.length - 1 ? "border-b border-[#eef2e6]" : ""
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
                <span className="text-[20px] font-semibold text-[#606060]">
                  {row.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Kartu Soil */}
        <div className="flex-1 overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white">
          <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
            SOIL
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`px-3 py-4 text-center text-[20px] font-light italic ${
                i !== rows.length - 1 ? "border-b border-[#eef2e6]" : ""
              }`}
              style={{ color: "#606060" }}
            >
              {row.soil}
            </div>
          ))}
        </div>

        {/* Kartu Cocopeat */}
        <div className="flex-1 overflow-hidden rounded-[14px] border border-[#dcecc8] bg-white">
          <div className="border-b border-[#dcecc8] bg-[#eef7e4] px-3 py-4 text-center text-sm font-semibold text-[#259539] sm:text-lg">
            COCOPEAT
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`px-3 py-4 text-center text-[20px] font-light italic ${
                i !== rows.length - 1 ? "border-b border-[#eef2e6]" : ""
              }`}
              style={{ color: "#606060" }}
            >
              {row.cocopeat}
            </div>
          ))}
        </div>

        {/* Kartu mGRO */}
        <div
          className="flex flex-[1.4] flex-col overflow-hidden rounded-[14px] border-1 bg-white shadow-lg sm:flex-1"
          style={{
            borderColor: MGRO_GREEN,
            boxShadow: "0 16px 32px -18px rgba(63,161,74,0.35)",
          }}
        >
          <div
            className="flex items-center justify-center px-3 py-4 text-sm font-semibold text-white sm:text-lg"
            style={{ backgroundColor: MGRO_GREEN }}
          >
            mGRO
          </div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-center px-3 py-4 ${
                i !== rows.length - 1 ? "border-b border-[#e2f0d4]" : ""
              }`}
              style={{ backgroundColor: "#FAFFF0" }}
            >
              <div className="mx-auto flex w-[150px] items-center justify-start gap-5">
                <Image
                  src={CHECK_ICON_SRC}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 shrink-0"
                />
                <span
                  className="whitespace-nowrap text-[20px] font-light italic"
                  style={{ color: "#606060" }}
                >
                  {row.mgro}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
