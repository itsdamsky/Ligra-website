"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DARK_GREEN = "#259539";

const PDF_FILE_HREF = "/documents/Project_Closing_Report_Gramoler_PCP2598.pdf";

export default function ViewFullReportButton() {
  const [open, setOpen] = useState(false);

  // Kunci scroll halaman di belakang selagi modal terbuka
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group inline-flex items-center rounded-full px-6 py-3 text-[14px] font-semibold text-white shadow ..."
        style={{ backgroundColor: DARK_GREEN }}
      >
        <span>View Full Report</span>

        <span
          className="hidden md:inline-flex w-0 group-hover:w-4 group-hover:ml-2 overflow-hidden transition-all duration-200 ease-out"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.4"
            className="shrink-0"
          >
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-[92vh] w-full max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              {/* HEADER — title + close button */}
              <div className="flex items-center justify-between gap-3 border-b border-[#eef2e6] px-4 py-3 sm:px-6">
                <p className="truncate text-[13.5px] font-semibold text-[#3d3d3d] sm:text-[15px]">
                  Project Closing Report — TPIH/PCP/25/98
                </p>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close report"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3d3d3d" strokeWidth="2.4">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* PDF PREVIEW — renders the actual file inline */}
              <div className="relative flex-1 bg-gray-100">
                <iframe
                  src={`${PDF_FILE_HREF}#view=FitH`}
                  title="Project Closing Report"
                  className="h-full w-full"
                />
              </div>

              {/* FALLBACK — some mobile browsers can't render PDFs in an iframe */}
              <div className="border-t border-[#eef2e6] px-4 py-2.5 text-center sm:hidden">
                <a
                  href={PDF_FILE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] font-medium underline"
                  style={{ color: DARK_GREEN }}
                >
                  Preview not showing? Tap here to open the PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
