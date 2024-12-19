import React from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import Footer from "./Footer";
import Header from "./Header";

const News = () => {
  return (
    <div className="text-[2rem ] text-white w-full h-full flex flex-col justify-between gap-8">
      <Header />
      <div className="flex gap-8 h-[calc(100%-16rem)] px-[2rem]">
        <div className="w-72 h-full flex flex-col gap-8">
          <div className="w-full h-[20%] bg-[#111214] rounded-[1rem]">User</div>
          <nav className="w-full h-[calc(80%-2rem)] bg-[#111214] rounded-[1rem]">
            Categories
          </nav>
        </div>
        <div className=" w-[clamp(30rem,43cqi,40%)] h-full rounded-2xl">
          <div className="w-full h-[calc(50%-2rem)] bg-[#111214] rounded-2xl mb-8">
            Headlines
          </div>
          <div className="w-full h-1/2 bg-[#111214] rounded-2xl">News Grid</div>
        </div>
        <div className="w-[clamp(20rem,27cqi,28%)] h-full bg-[#111214] rounded-2xl">
          My Blogs
        </div>
        <div className="flex-1 flex flex-col gap-y-8">
          <Weather />
          <Calender />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
