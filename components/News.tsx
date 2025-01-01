import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url =
        "https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=f442841eede52ce6d845dff8a172b3ba";
      const response = await axios.get(url);
      const fetchedNews = response.data.articles;
      setHeadline(fetchedNews[0]);
    };
  }, []);
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
          <div className="w-full h-[calc(50%-2rem)] bg-[#111214] rounded-2xl mb-8 relative">
            <img
              src={headline.image}
              alt={headline.title}
              className="w-full h-full object-cover rounded-[1rem] opacity-40"
            />
            <h2 className="w-full absolute bottom-0 left-0 p-[1rem] pr-[4rem] pb-[1rem] pl-[1rem] font-bebas text-[clamp(1.5rem,1.8cqi,3rem)] tracking-[0.1rem] text-white bg-[rgba(0,0,0,0.7)] rounded-b-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              doloremque sapiente.
              <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
            </h2>
          </div>
          <div className="w-full h-1/2 bg-[#111214] rounded-2xl grid grid-cols-3 grid-rows-2 gap-4  p-[1.2rem] justify-center items-center">
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/tech.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/sports.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/science.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/world.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/health.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
            <div className="w-full h-full min-h-60 rounded-2xl relative">
              <img
                src="/images/nation.jpg"
                alt="News Image"
                className="w-full h-full block object-cover rounded-[1rem] opacity-50"
              />
              <h3 className="absolute bottom-0 left-0 py-4 px-12 text-[1.6rem] font-bebas font-light leading-[1.4rem] bg-[rgba(0,0,0,0.7)] w-full rounded-b-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <i className="fa-regular fa-bookmark absolute bottom-4 right-4 cursor-pointer"></i>
              </h3>
            </div>
          </div>
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
