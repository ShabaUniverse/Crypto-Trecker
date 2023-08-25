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

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => {
  //       console.log(res.data);
  //       setCoinList(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="market-small py-10 bg-slate-100">
      <div className="wrapper mx-4 lg:mx-0 rounded-xl shadow-lg bg-white p-3">
        <div className="categories pb-2 flex justify-around items-center border-b border-b-slate-200">
          {categories.map((item) => (
            <div key={item.id}>
              <p
                className={
                  item.id === activeItem
                    ? "bg-purple-600 px-2 py-1 rounded-xl text-white font-semibold text-sm cursor-pointer duration-150"
                    : "text-sm px-2 py-1 font-semibold cursor-pointer duration-150"
                }
                key={item.id}
                onClick={() => setActiveItem(item.id)}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
        {coinList &&
          coinList.map((item, index) => (
            <div className="datas">
              <p>{item.id}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SmallMarket;
