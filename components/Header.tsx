import React from "react";

const Header = () => {
  return (
    <header className="w-full min-h-28 bg-[#111214] rounded-t-[1rem] flex justify-between items-center px-16 py-0 ">
      <h1 className="font-bebas text-[5rem] text-[#ddd] tracking-[0.2rem]">
        News & Blogs
      </h1>
      <div className="relative">
        <form action="">
          <input
            type="text"
            className="w-[25rem] h-16 bg-[#060709] border-none rounded-[5rem] pt-0 pr-[4rem] pb-0 pl-[2rem] text-[#ddd] text-2xl focus:w-[35rem] focus:placeholder-transparent"
            placeholder="Search News..."
          />
          <button
            type="submit"
            className="bg-transparent border-none absolute top-1/2 right-4 transform -translate-y-1/2 text-[#bbb] text-[1.8rem]"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
