import React from "react";

const UpTop = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="texts w-full mr-10 pl-2 pt-28 md:h-screen lg:pt-0 flex flex-col justify-center items-start">
        <h1 className="text-4xl text-black font-semibold w-4/5">
          Buy & Sell Digital Assets In The Rockie
        </h1>
        <h3 className="text-xl text-slate-400 w-3/4 mt-10 font-medium">
          Coin rockie is the easiest, safest, and fastest way to buy & sell
          crypto asset exchange.
        </h3>
        <button className=" bg-purple-600 text-white rounded-3xl py-2 px-3 my-10 font-semibold">
          Get Started Now
        </button>
      </div>
      <div className="illustrator flex justify-center items-center">
        <img src="/images/dgtc.svg" alt="" />
      </div>
    </div>
  );
};

export default UpTop;
