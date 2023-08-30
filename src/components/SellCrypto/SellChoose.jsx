import React from "react";

import { AiOutlineSwap } from "react-icons/ai";
import { Link } from "react-router-dom";

const SellChoose = () => {
  return (
    <div className="sell">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper flex flex-col justify-center items-center px-2">
          <div className="rootInfo flex flex-col items-start py-5 w-full">
            <h4 className=" text-4xl font-semibold">Sell Crypto</h4>
            <p className=" text-xl text-gray-400 mt-8">Home / Sell Crypto</p>
          </div>

          <div className="remotes flex items-center">
            <Link className=" font-semibold hover:text-purple-600">
              Overview
            </Link>
            <h4 className=" bg-purple-600 px-4 py-2 mx-5 text-lg font-semibold rounded-2xl text-white">
              Sell Crypto
            </h4>
            <Link className=" font-semibold hover:text-purple-600">
              Buy Crypto
            </Link>
          </div>

          <div className="steps w-full flex flex-col my-5">
            <p className=" font-semibold">Select Crypto</p>
            <p className=" font-semibold">Sell Value</p>
            <p className=" font-semibold text-gray-400">Payment Fills</p>
            <p className=" font-semibold text-gray-400">Details</p>
            
          </div>

          <div className="inputs flex  justify-center border-2 border-white rounded-2xl w-[90%] md:w-[40%] py-10">
            <div className="pay flex flex-col items-center justify-center">
              <span className=" font-bold mb-2">Pay</span>
              <input
                type="number"
                placeholder="USD$"
                className=" w-2/3  px-3 py-3 rounded-xl"
              />
            </div>

            <div className="swap flex items-center">
              <AiOutlineSwap
                size={40}
                className=" fill-white bg-purple-600 rounded-full"
              />
            </div>

            <div className="receive flex flex-col justify-center items-center">
              <span className=" font-bold mb-2">Receive</span>
              <input
                type="number"
                placeholder="BTC"
                className=" w-2/3 px-3 py-3 rounded-xl"
              />
            </div>
          </div>

          <Link
            to="/sellcrypto/sellfill"
            className=" mt-10 font-semibold bg-purple-600 py-2 px-10 rounded-2xl text-white">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellChoose;
