import React, { useEffect, useState } from "react";
import axios from "axios";

const SmallMarket = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [coinList, setCoinList] = useState(null);

  let categories = [
    { name: "Crypto", id: 0 },
    { name: "DeFi", id: 1 },
    { name: "BSC", id: 2 },
    { name: "NFT", id: 3 },
    { name: "Metaverse", id: 4 },
  ];

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
    <div className="market-small py-10">
      <div className="wrapper mx-4 lg:mx-0 rounded-xl shadow-lg bg-white px-3 py-7">
        <div className="categories pb-2 flex justify-around items-center border-b border-b-slate-200">
          {categories.map((item) => (
            <div key={item.id}>
              <p
                className={
                  item.id === activeItem
                    ? "bg-purple-600 px-2 py-1 rounded-2xl text-white font-semibold text-sm cursor-pointer duration-150"
                    : "text-sm px-2 py-1 font-semibold cursor-pointer duration-150"
                }
                key={item.id}
                onClick={() => setActiveItem(item.id)}>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="smallMarket md:grid md:grid-cols-3">
          {coinList &&
            coinList.map((item, index) => (
              <div
                className="shadow-lg p-2 md:py-8 md:px-4 md:mx-2 mt-10 rounded-2xl"
                key={index}>
                <div className="top flex justify-start items-center rounded-2xl">
                  <img src={item.image} alt="" className=" w-6 mr-2" />
                  <p className=" font-medium mr-2">{item.name}</p>
                  <span className="font-semibold text-gray-500">
                    {item.symbol.toUpperCase()}/USD
                  </span>
                </div>
                <div className="middle">
                  <p className=" text-2xl font-bold">
                    USD {item.current_price}
                  </p>
                </div>
                <div className="bottom">
                  <p
                    className={
                      item.price_change_percentage_24h > 0
                        ? "text-white bg-green-400 p-1 text-center w-[25%] md:w-2/5 rounded-2xl"
                        : "text-white bg-red-400 p-1 text-center w-[25%] md:w-2/5 rounded-2xl"
                    }>
                    {item.price_change_percentage_24h}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SmallMarket;
