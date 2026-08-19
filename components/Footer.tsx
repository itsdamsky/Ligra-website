"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";

const LIGRA_GREEN = "#259539";
const LIGRA_BLUE = "#048099";

const LEAF_DECOR_LEFT = "/images/footer/leaf-decor-left.svg";
const LEAF_DECOR_RIGHT = "/images/footer/leaf-decor-right.svg";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.74h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.21v4.25H10V9.75h2.56v1.17h.04c.36-.68 1.23-1.39 2.53-1.39 2.71 0 3.21 1.78 3.21 4.1v4.71Z" />
    </svg>
  );
}

// ============================================================
// 1. DAFTAR PRODUK DI SINI
//    Tinggal tambah/edit object di bawah kalau ada produk baru
//    (misalnya "KUL Plaster"). "match" dipakai untuk cocokin
//    path URL saat ini -> produk mana yang lagi aktif.
// ============================================================
type ProductConfig = {
  name: string;
  logoSrc: string;
  match: (pathname: string) => boolean;
};

const PRODUCTS: ProductConfig[] = [
  {
    name: "mGRO",
    logoSrc: "/images/products/logo-mgro.svg",
    match: (pathname) => pathname.startsWith("/growing-media"),
  },
  {
    name: "KUL Plaster",
    logoSrc: "/images/products/kul-plaster-logo.svg",
    match: (pathname) => pathname.startsWith("/kul-plaster"),
  },
  // Tambah produk baru di sini, contoh:
  // {
  //   name: "Produk Baru",
  //   logoSrc: "/images/products/produk-baru-logo.svg",
  //   match: (pathname) => pathname.startsWith("/produk-baru"),
  // },
];

const footerLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
];

const socials = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  const pathname = usePathname();

  const activeProduct = PRODUCTS.find((p) => p.match(pathname)) ?? null;

  return (
    <footer className="relative overflow-hidden bg-[#FAF8F6] pt-12 pb-8">
      {/* Dekorasi daun kiri — dibalik sedikit biar variatif, pointer-events-none
          supaya gak ganggu klik, opacity rendah biar jadi aksen background aja */}
      <div className="pointer-events-none absolute -left-10 top-0 z-0 w-[180px] opacity-70 sm:w-[240px] lg:w-[300px]">
        <Image
          src={LEAF_DECOR_LEFT}
          alt=""
          width={480}
          height={900}
          className="h-auto w-full"
        />
      </div>

      {/* Dekorasi daun kanan — di-mirror horizontal (scale-x-[-1]) */}
      <div className="pointer-events-none absolute -right-10 top-0 z-0 w-[180px] opacity-70 sm:w-[240px] lg:w-[300px]">
        <Image
          src={LEAF_DECOR_RIGHT}
          alt=""
          width={480}
          height={900}
          className="h-auto w-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8">
          {/* Kiri: Logo + Newsletter */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.svg"
                alt="LiGrA - Lightweight Green Aggregates"
                width={195}
                height={56}
                className="h-auto w-[195px]"
              />

              {/* Logo produk aktif — cuma muncul kalau ada match */}
              {activeProduct && (
                <>
                  <span className="h-26 w-px bg-gray-300" aria-hidden="true" />
                  <Image
                    src={activeProduct.logoSrc}
                    alt={activeProduct.name}
                    width={192}
                    height={70}
                    className="h-auto w-[192px]"
                  />
                </>
              )}
            </div>

            <h3 className="mt-6 text-[32px] font-bold" style={{ color: LIGRA_GREEN }}>
              Grow with Us
            </h3>
            <p className="mt-1 text-sm text-[#606060]">
              Get the latest product updates, growing tips, and sustainability news delivered to your inbox.
            </p>

            <form className="mt-4 flex max-w-md items-center overflow-hidden rounded-full border border-gray-300 bg-transparent">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-5 py-2.5 text-sm italic text-gray-500 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="m-1 shrink-0 rounded-full px-6 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: LIGRA_GREEN }}
              >
                Subscribe
              </button>
            </form>

            <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-[#606060]">
              {footerLinks.map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  {i !== 0 && <span className="text-gray-300">|</span>}
                  <Link href={link.href} className="hover:text-gray-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider vertikal, cuma tampil di desktop */}
          <span className="hidden h-full w-px bg-gray-300 lg:block" aria-hidden="true" />

          {/* Kanan: Contact + Social */}
          <div>
            <h4 className="text-sm font-bold" style={{ color: LIGRA_GREEN }}>
              Contact Us
            </h4>
            <ul className="mt-3 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: LIGRA_GREEN }} />
                <span>Amazana Building #02-01 50, MacPherson Road, 348471, Singapore</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" style={{ color: LIGRA_GREEN }} />
                <span>+65 xxx xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" style={{ color: LIGRA_GREEN }} />
                <span>xxxx@mgro.com</span>
              </li>
            </ul>

            <h4 className="mt-6 text-sm font-bold" style={{ color: LIGRA_GREEN }}>
              Find Us
            </h4>
            <div className="mt-3 flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: LIGRA_GREEN }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs italic text-gray-500">
          © {new Date().getFullYear()} {activeProduct ? activeProduct.name : "LiGrA"}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
