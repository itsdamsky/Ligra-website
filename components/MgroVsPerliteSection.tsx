import Image from "next/image";
import Link from "next/link";

const DARK_GREEN = "#259539";

const rows = [
  { iconSrc: "/images/mgro/icon/icon-tree.svg", label: "Strength", perlite: "Fragile", mgro: "Stronger" },
  { iconSrc: "/images/mgro/icon/icon-recycle.svg", label: "Reusability", perlite: "Low", mgro: "High" },
  { iconSrc: "/images/mgro/icon/icon-windgreen.svg", label: "Dust", perlite: "High", mgro: "Low" },
  { iconSrc: "/images/mgro/icon/icon-hand.svg", label: "Sustainability", perlite: "Moderate", mgro: "Very High" },
];

const CHECK_ICON_SRC = "/images/mgro/icon/ceklis.svg";

const bullets = [
  {
    title: "Stronger Structure",
    body: "Unlike perlite, mGRO resists breaking and maintains its shape over time.",
  },
  {
    title: "High Reusability",
    body: "Can be reused through multiple growing cycles.",
  },
  {
    title: "Low Dust",
    body: "Cleaner handling with significantly less airborne dust.",
  },
  {
    title: "More Sustainable",
    body: "Made from recycled mineral materials for a lower environmental footprint.",
  },
];

const GREENHOUSE_PHOTO = "/images/mgro/plant.webp";
const YIELD_BADGE = "/images/mgro/badge.svg";

export default function MgroVsPerliteSection() {
  return (
    <>
      <section className="relative w-full bg-[#FAFFF0] px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pb-52 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* ============================================================
              VERSI MOBILE & TABLET (< lg) — card stack per baris.
              Dipisah dari versi desktop karena layout desktop pakai
              absolute-positioned overlay card yang bikin teks numpuk
              kalau dipaksa nyempit di layar kecil.
             ============================================================ */}
          <div className="space-y-3 lg:hidden">
            <div className="grid grid-cols-[1fr_auto] gap-3 px-1 text-center text-[13px] font-semibold uppercase text-[#259539] sm:text-sm">
              <span className="text-left">Property</span>
              <span className="grid grid-cols-2 gap-3">
                <span>Perlite</span>
                <span>mGRO</span>
              </span>
            </div>

            {rows.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl border border-[#dcecc8] bg-white p-3 sm:p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Image src={row.iconSrc} alt="" width={20} height={20} className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                  <span className="text-[14px] font-semibold text-[#606060] sm:text-[16px]">
                    {row.label}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 py-2.5 text-center">
                    <p className="text-[13px] italic text-gray-500 sm:text-[15px]">{row.perlite}</p>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1.5 rounded-xl py-2.5"
                    style={{ backgroundColor: "#FAFFF0", border: `1px solid ${DARK_GREEN}` }}
                  >
                    <Image src={CHECK_ICON_SRC} alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
                    <p className="text-[13px] italic text-[#606060] sm:text-[15px]">{row.mgro}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ============================================================
              VERSI DESKTOP (lg ke atas) — tabel + card mGRO "ngambang"
              yang sengaja overlap dikit ke kolom Perlite.
             ============================================================ */}
          <div className="relative hidden overflow-visible lg:flex">
            <div className="flex-1 overflow-hidden rounded-[16px] border border-[#dcecc8] bg-white">
              <div className="grid grid-cols-[1.3fr_1fr_1.05fr] divide-x divide-[#dcecc8]" style={{ backgroundColor: "#EEF4DF" }}>
                <div className="px-4 py-6 text-center text-[21.5px] font-semibold text-[#259539]">
                  PROPERTY
                </div>
                <div className="px-4 py-6 text-center text-[21.5px] font-semibold text-[#259539]">
                  PERLITE
                </div>
                <div />
              </div>

              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.3fr_1fr_1.05fr] items-center text-[20px] font-light divide-x divide-[#eef2e6] ${
                    i !== rows.length - 1 ? "border-b border-[#eef2e6]" : ""
                  }`}
                  style={{ color: "#606060" }}
                >
                  <div className="flex min-w-0 items-center justify-center px-4 py-6">
                    <div className="mx-auto flex w-full max-w-[220px] items-center justify-start gap-2 pl-6">
                      <Image src={row.iconSrc} alt="" width={20} height={20} className="h-7 w-7 shrink-0" />
                      <span className="text-[20px] font-semibold text-[#606060]">
                        {row.label}
                      </span>
                    </div>
                  </div>
                  <div className="px-2 py-6 text-center text-[20px] italic text-gray-500">{row.perlite}</div>
                  <div />
                </div>
              ))}
            </div>

            {/* mGRO — dikasih shadow biar keliatan agak "ngangkat" dari tabel utama.
                overflow-hidden DIHAPUS supaya shadow hover nggak kepotong; sebagai
                gantinya baris pertama & terakhir dikasih rounded manual biar sudutnya
                tetap ngikutin bentuk card meski nggak di-clip lagi. */}
            <div
              className="absolute inset-y-0 right-0 flex w-[34%] flex-col rounded-[16px] border bg-white shadow-xl"
              style={{
                borderColor: DARK_GREEN,
                boxShadow: "0 20px 35px -12px rgba(37,149,57,0.35)",
              }}
            >
              <div
                className="rounded-t-[15px] px-3 py-5 text-center text-[21.5px] font-semibold text-white"
                style={{ backgroundColor: DARK_GREEN }}
              >
                mGRO
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={`group relative flex flex-1 items-center justify-center gap-2 px-2 py-6 transition-all duration-300 ease-out hover:z-10 hover:translate-y-1 hover:scale-[1.03] hover:rounded-[12px] hover:bg-white ${
                    i === rows.length - 1 ? "rounded-b-[15px]" : "border-b border-[#e2f0d4] group-hover:border-transparent"
                  }`}
                  style={{ backgroundColor: "#FAFFF0" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 scale-95 rounded-[12px] opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
                    style={{ boxShadow: "0 10px 18px -6px rgba(37,149,57,0.35)" }}
                  />
                  <div className="relative mx-auto flex w-[150px] items-center justify-start gap-5">
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

          {/* Heading + bullet list */}
          <div>
            <h2 className="text-[22px] font-bold sm:text-[26px] lg:text-[32px]" style={{ color: DARK_GREEN }}>
              mGRO vs Perlite
            </h2>

            <ul className="mt-4 space-y-4 sm:space-y-5">
              {bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: DARK_GREEN }}
                  />
                  <p className="text-[14px] leading-relaxed text-[#606060] sm:text-[16px]">
                    <span className="font-bold text-[#606060]">{bullet.title}</span>
                    <br />
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-10 max-w-4xl px-4 sm:-mt-14 sm:px-6 lg:-mt-16">
        <div className="relative overflow-hidden rounded-[18px] shadow-xl sm:rounded-[24px]">
          <Image
            src={GREENHOUSE_PHOTO}
            alt="mGRO hydroponic greenhouse trial with healthy leafy greens"
            width={1200}
            height={720}
            className="h-auto w-full"
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-0 w-[130px] -translate-x-1/2 -translate-y-1/2 sm:w-[190px] lg:w-[240px]">
          <Image
            src={YIELD_BADGE}
            alt="Proven by Temasek Polytechnic: increase over 20% crop yields"
            width={380}
            height={380}
            className="h-auto w-full"
          />
        </div>
      </div>

      <section className="relative w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-[22px] font-bold sm:text-[26px] lg:text-[32px]" style={{ color: DARK_GREEN }}>
            Proven Performance
          </h3>
          <p className="mt-4 text-[14px] leading-relaxed text-gray-600 sm:text-[15px] lg:text-base">
            From institutional research, mGRO has demonstrated its ability to
            improve growing environments by increasing the crop yields up to
            37% when combined with microbes.
          </p>

          <Link
            href="/growing-media/proven-performance"
            className="mt-6 inline-block rounded-full px-6 py-2.5 text-xs font-semibold tracking-wide text-white transition-transform hover:scale-[1.03] cursor-pointer sm:px-8 sm:py-3 sm:text-sm"
            style={{ backgroundColor: DARK_GREEN }}
          >
            EXPLORE MORE
          </Link>
        </div>
      </section>
    </>
  );
}
