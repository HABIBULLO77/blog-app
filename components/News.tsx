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
          <div className="w-full h-[20%] bg-[#111214] rounded-[1rem] flex flex-col justify-center items-center gap-4 cursor-pointer">
            <img
              src="/images/user.jpg"
              alt=""
              className="w-[7rem] aspect-square object-cover rounded-[50%]"
            />
            <p className="font-comfortaa text-[1.5rem] text-[#ddd]">
              Mary's blog
            </p>
          </div>
          <nav className="w-full h-[calc(80%-2rem)] bg-[#111214] rounded-[1rem] flex flex-col gap-8 p-8">
            <h1 className="font-bebas text-[clamp(1.5rem,2.5cqi,3rem)] text-[#ddd] tracking-[0.2rem] mb-8">
              Categories
            </h1>
            <div className="flex flex-col gap-8">
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                General
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                World
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Business
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Entertainment
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Sports
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Science
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Health
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Nation
              </a>
              <a
                href="#"
                className="text-[1.5rem] font-light text-[#ddd] uppercase tracking-widest flex items-center"
              >
                Bookmarks{" "}
                <i className="fa-regular fa-bookmark text-[1.7rem] ml-4"></i>
              </a>
            </div>
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
