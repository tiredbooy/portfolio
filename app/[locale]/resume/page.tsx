import { Vazirmatn } from "next/font/google";
import Resume from "../_components/Resume";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-vazirmatn",
});

function page() {
  return (
    <div dir="rtl" className={`w-screen h-fit ${vazirmatn.className}`}>
      <Resume />
    </div>
  );
}

export default page;
