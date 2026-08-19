import Image from "next/image";
import Link from "next/link";

const DARK_GREEN = "#259539";

// Ganti path di bawah ini sesuai foto kamu
const BANNER_BG = "/images/mgro/bg-growing.webp";

export default function QuoteBannerSection() {
  return (
    <section className="relative flex h-[280px] w-full items-center justify-center overflow-hidden sm:h-[360px] md:h-[440px] lg:h-[500px]">
      {/* Background foto full-bleed */}
      <Image
        src={BANNER_BG}
        alt="mGRO lightweight aggregate texture"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay gelap tipis biar teks putih tetap kebaca di atas foto yang terang/ramai */}
      <div className="absolute inset-0 bg-[#224124]/25" />

      {/* Konten */}
      <div className="relative z-10 flex max-w-[90%] flex-col items-center px-4 text-center sm:max-w-2xl sm:px-6 lg:max-w-3xl">
        <p className="text-[18px] font-bold leading-snug text-white sm:text-[26px] sm:leading-tight md:text-[32px] lg:text-[40px]">
          &ldquo;Growing a Sustainable Future
          <br />
          Through Green Innovation&rdquo;
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg sm:mt-8 sm:px-8 sm:py-3 sm:text-sm lg:text-base"
          style={{ backgroundColor: DARK_GREEN }}
        >
          Explore mGRO
        </Link>
      </div>
    </section>
  );
}
