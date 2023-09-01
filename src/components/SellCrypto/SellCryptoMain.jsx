import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SellCryptoMain = () => {
  const [coinList, setCoinList] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=9&page=1&sparkline=false",
      )
      .then((res) => {
        setCoinList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="sellCryptoMain">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper flex flex-col justify-center items-center px-2 md:px-0">
          <div className="rootInfo flex flex-col items-start py-5 w-full">
            <h4 className=" text-4xl font-semibold">Sell Crypto</h4>
            <p className=" text-xl text-gray-400 mt-8">Home / Sell Crypto</p>
          </div>

          <div className="remotes flex items-center">
            <h4 className=" bg-purple-600 px-4 py-2 mx-5 text-lg font-semibold rounded-2xl text-white">
              Sell Crypto
            </h4>
            <Link className=" font-semibold hover:text-purple-600">
              Buy Crypto
            </Link>
          </div>

          <div className="steps w-full flex flex-col my-5">
            <p className=" font-semibold">Select Crypto</p>
            <p className=" font-semibold text-gray-400">Sell Value</p>
            <p className=" font-semibold text-gray-400">Payment Fills</p>
            <p className=" font-semibold text-gray-400">Details</p>

          </div>

          <div className=" w-[90%] md:w-[50%] bg-white rounded-2xl p-3 flex flex-col justify-center items-start">
            <h4 className=" text-2xl font-semibold">Select Crypto</h4>
            <p className=" font-medium">Which Crypto Do You Want To Search?</p>

            <div className="selection flex justify-center items-center my-10">
              <input
                className="bg-gray-100 outline-none px-3 py-2 rounded-xl"
                type="text"
                placeholder="Search"
              />
              <select
                name=""
                id=""
                className=" px-3 py-2 bg-purple-600 ml-10 rounded-xl text-white outline-none">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SOM">SOM</option>
              </select>
            </div>
            <button className=" rounded-2xl px-10 py-2 bg-purple-600 text-white">
              Search
            </button>
          </div>

          <div className="displayer border bg-white rounded-2xl p-3 w-[90%] md:w-[60%] mt-16">
            <h4 className=" font-semibold text-xl my-10">Select Crypto</h4>

            {coinList &&
              coinList.map((item, index) => (
                <div className="gen grid grid-cols-4 items-center justify-items-start mt-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-9 h-9 rounded-full"
                  />

                  <h5 className=" font-medium ">{item.name}</h5>
                  <h5 className=" font-medium ">{item.current_price}</h5>
                  <h5 className=" font-medium text-green-400">{item.price_change_percentage_24h}</h5>
                </div>
              ))}
          </div>

          <Link to="/sellcrypto/sellchoose" className=" mt-10 font-semibold bg-purple-600 py-2 px-10 rounded-2xl text-white">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default SellCryptoMain;
