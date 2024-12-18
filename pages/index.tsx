import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#b88efc] to-[#6877f4] grid place-items-center">
      <div className="w-[95vw] h-[95vmin] bg-[#060709] shadow-[0_2rem_3rem_rgba(0,0,0,0.5)] rounded-[1rem]">
        <News />
      </div>
    </div>
  );
}
