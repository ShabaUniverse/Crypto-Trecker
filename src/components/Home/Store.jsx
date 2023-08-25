import React from "react";

import { GoVerified } from "react-icons/go";


const Store = () => {
  return (
    <div className="store py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper lg:grid lg:grid-cols-2">
          <div className="first px-5">
            <h2 className="text-4xl font-bold">
              Free Your Money & Invest With Confident
            </h2>
            <p className="text-lg font-normal text-gray-400 mt-3">
              With Cryptor Trade, you can be sure your trading skills are
              matched
            </p>

            <div className="text flex justify-start items-center mt-5">
              <GoVerified fill="#9333ea" size={25} />
              <h3 className="font-semibold ml-3 text-xl">
                Buy, Sell, And Trade On The Go
              </h3>
            </div>

            <span className=" text-gray-400 mt-5">
              Managa Your Holdings From Your Mobile Decive
            </span>

            <div className="text flex justify-start items-center mt-5">
              <GoVerified fill="#9333ea" size={25} />
              <h3 className="font-semibold ml-3 text-xl">
                Take Control Of Your Wealth
              </h3>
            </div>

            <span className=" text-gray-400 mt-5">
              Rest Assured You (And Only You) Have Access To Your Funds
            </span>

            <div className="links mt-10 flex">
                <img src="images/googleplay.png" alt=""  className="mr-5 cursor-pointer"/>
                <img src="images/appstore.png" alt="" className="cursor-pointer"/>
            </div>
          </div>

          <div className="second px-5">
            <img src="images/download.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
