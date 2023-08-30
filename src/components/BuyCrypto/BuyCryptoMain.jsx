import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { Link } from "react-router-dom";

const BuyCryptoMain = () => {
  return (
    <div className="main">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper">
          <div className="rootInfo flex flex-col px-2 py-5">
            <h4 className=" text-4xl font-semibold">Buy Crypto</h4>
            <p className=" text-xl text-gray-400 mt-12">Home / Buy Crypto</p>
          </div>

          <div className="settingBox flex flex-col justify-center items-center px-2 py-5 bg-white rounded-xl">
            <div className="flex items-center">
              <Link className=" font-semibold hover:text-purple-600">Overview</Link>
              <h4 className=" bg-purple-600 px-4 py-2 mx-5 text-lg font-semibold rounded-2xl text-white">
                Buy Crypto
              </h4>
              <Link className=" font-semibold hover:text-purple-600">Sell Crypto</Link>
            </div>

            <div className="steps w-full flex flex-col my-5">
              <p className=" font-semibold">Select Currency</p>
              <p className=" font-semibold text-gray-400">Important Notes</p>
              <p className=" font-semibold text-gray-400">Payment Details</p>
            </div>

            <div className="selection bg-gray-100 px-4 py-12 rounded-xl">
              <div className="title">
                <h5 className=" text-xl font-semibold">Select Currency</h5>
                <p className=" text-base text-gray-400 my-3">
                  Reference Price: 1,450,939,280.43 VND/BTC
                </p>
              </div>

              <div className="inputs flex  justify-center">
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
              
              <div className="continue flex justify-center mt-10">
                <Link to="/buycrypto/importantNotes" className=" text-white bg-purple-600 px-7 py-2 text-lg font-semibold rounded-2xl">Continue</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCryptoMain;
