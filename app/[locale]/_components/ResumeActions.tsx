"use client";
import { HiOutlinePrinter, HiOutlineDownload } from "react-icons/hi";

function ResumeActions() {
  // Replace this with your actual Netlify URL after uploading
  const resumePdfUrl = "https://tiredboy.netlify.app/en/resume.pdf";

  const handlePrint = () => {
    // Open PDF in new window and trigger print
    const printWindow = window.open(resumePdfUrl, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(resumePdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: direct link
      window.open(resumePdfUrl, "_blank");
    }
  };

  return (
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
          onClick={handleDownload}
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
  );
}

export default ResumeActions;
