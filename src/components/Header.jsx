import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <div className="header bg-white py-3 px-2">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper flex justify-between items-center">
          <div className="left">
            <h1 className=" font-bold">CrypTonight</h1>
          </div>

          <div className="right flex justify-center items-center">
            <div className="menu mr-3 md:hidden">
              <FiMenu
                size="25px"
                className={navShow ? "hidden" : "flex"}
                onClick={() => setNavShow(!navShow)}
              />

              <AiOutlineClose
                size="25px"
                className={!navShow ? "hidden" : "flex"}
                onClick={() => setNavShow(!navShow)}
              />
            </div>

            <div className="hidden md:flex mr-10">
              <Link className=" font-semibold text-sm mx-2 hover:text-purple-600">
                Homepage
              </Link>
              <Link className=" font-semibold text-sm mx-2 hover:text-purple-600">
                Buy Crypto
              </Link>
              <Link className=" font-semibold text-sm mx-2 hover:text-purple-600">
                Sell Crypto
              </Link>
              <Link className=" font-semibold text-sm mx-2 hover:text-purple-600">
                Markets
              </Link>
            </div>

            <div
              className={
                !navShow
                  ? "hidden"
                  : "navbar py-4 px-2 absolute top-0 left-0 h-screen w-2/4 bg-white"
              }>
              <h1 className=" font-bold">CrypTonight</h1>
              <div className="links flex flex-col">
                <Link className=" font-semibold text-sm my-4 hover:text-purple-600">
                  Homepage
                </Link>
                <Link className=" font-semibold text-sm my-4 hover:text-purple-600">
                  Buy Crypto
                </Link>
                <Link className=" font-semibold text-sm my-4 hover:text-purple-600">
                  Sell Crypto
                </Link>
                <Link className=" font-semibold text-sm my-4 hover:text-purple-600">
                  Markets
                </Link>
              </div>
            </div>

            <div className="wallet flex justify-center items-center">
              <Link className=" border py-1 px-2 rounded-2xl border-black text-sm font-semibold hover:text-purple-600">
                Wallet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
