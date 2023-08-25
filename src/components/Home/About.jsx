import React from "react";

import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about py-20 bg-white rounded-xl">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper lg:grid lg:grid-cols-2">
          <div className="first flex items-center">
            <img src="images/about-h1.png" alt="" />
          </div>

          <div className="second px-5">
            <h2 className="text-4xl font-bold">What is CrypTonight</h2>
            <p className="text-lg font-normal text-gray-400 mt-3">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>

            <div className="text flex justify-start items-center mt-5">
              <GoVerified fill="#9333ea" size={25} />
              <h3 className="font-semibold ml-3 text-xl">
                View real-time cryptocurrency prices
              </h3>
            </div>

            <span className=" text-gray-400 mt-5">
              Experience A Variety Of Trading On Bitcost. You Can Use Various
              Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P,
              Staking, Mining, And Margin.
            </span>

            <div className="text flex justify-start items-center mt-5">
              <GoVerified fill="#9333ea" size={25} />
              <h3 className="font-semibold ml-3 text-xl">
                Buy and sell BTC, ETH, XRP, OKB, Etc...
              </h3>
            </div>

            <span className=" text-gray-400 mt-5">
              Experience A Variety Of Trading On Bitcost. You Can Use Various
              Types Of Coin Transactions Such As Spot Trade, Futures Trade, P2P,
              Staking, Mining, And Margin.
            </span>

            <br />
            <br />
            <br />


            <Link className=" bg-purple-600 py-3 px-6 mt-5 rounded-2xl text-white font-semibold">Explore More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
