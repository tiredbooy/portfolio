"use client";
import { HiOutlinePrinter, HiOutlineDownload } from "react-icons/hi";

function ResumeActions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }

          body {
            background: white !important;
          }

          * {
            color: #000 !important;
            background: white !important;
            border-color: #ddd !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          /* Make text readable */
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #000 !important;
            font-weight: bold !important;
          }

          /* Preserve some colors for important elements */
          [class*="text-primary"],
          [class*="bg-primary"] {
            color: #2563eb !important;
            border-color: #2563eb !important;
          }

          [class*="text-success"],
          [class*="bg-success"] {
            color: #059669 !important;
            border-color: #059669 !important;
          }

          /* Reduce spacing for compact layout */
          .px-6,
          .px-8 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .py-8,
          .py-12 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }

          .mb-6,
          .mb-8 {
            margin-bottom: 0.5rem !important;
          }

          .space-y-6 > * + *,
          .space-y-8 > * + * {
            margin-top: 0.5rem !important;
          }

          /* Keep page breaks nice */
          h3 {
            page-break-after: avoid;
          }

          /* Smaller fonts for compact layout */
          .text-5xl,
          .text-4xl {
            font-size: 1.5rem !important;
          }

          .text-3xl {
            font-size: 1.25rem !important;
          }

          .text-2xl,
          .text-xl {
            font-size: 1rem !important;
          }

          .text-lg {
            font-size: 0.9rem !important;
          }

          .text-base {
            font-size: 0.85rem !important;
          }

          .text-sm {
            font-size: 0.75rem !important;
          }

          .text-xs {
            font-size: 0.7rem !important;
          }

          /* Smaller profile image */
          img {
            max-width: 10rem !important;
            max-height: 10rem !important;
          }
        }
      `}</style>

      <div className="w-full px-6 sm:px-8 py-4 print:hidden" dir="rtl">
        <div className="max-w-5xl mx-auto flex justify-end gap-3">
          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg hover:border-primary hover:bg-surface-elevated transition-all hover:shadow-glow group"
            aria-label="Print Resume"
          >
            <span className="text-sm text-muted group-hover:text-foreground transition-colors">
              چاپ
            </span>
            <HiOutlinePrinter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </button>

          {/* Download as PDF Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary transition-all hover:shadow-glow group"
            aria-label="Download Resume as PDF"
          >
            <span className="text-sm text-primary group-hover:text-foreground transition-colors font-medium">
              دانلود PDF
            </span>
            <HiOutlineDownload className="w-5 h-5 text-primary group-hover:text-foreground group-hover:scale-110 transition-all" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ResumeActions;
