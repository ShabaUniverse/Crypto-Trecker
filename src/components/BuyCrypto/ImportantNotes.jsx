import React from "react";
import { Link } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { MdGetApp } from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";

const ImportantNotes = () => {
  return (
    <div className="main">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper">
          <div className="rootInfo flex flex-col px-2 py-5">
            <h4 className=" text-4xl font-semibold">Buy Crypto</h4>
            <p className=" text-xl text-gray-400 mt-12">Home / Buy Crypto</p>
          </div>

          <div className="settingBox flex flex-col justify-center items-center px-2 py-5 bg-white rounded-xl">
            <div className="heading flex items-center">
              <Link className=" font-semibold hover:text-purple-600">
                Overview
              </Link>
              <h4 className=" bg-purple-600 px-4 py-2 mx-5 text-lg font-semibold rounded-2xl text-white">
                Buy Crypto
              </h4>
              <Link className=" font-semibold hover:text-purple-600">
                Sell Crypto
              </Link>
            </div>

            <div className="steps w-full flex flex-col my-5">
              <p className=" font-semibold">Select Currency</p>
              <p className=" font-semibold">Important Notes</p>
              <p className=" font-semibold text-gray-400">Payment Details</p>
            </div>

            <div className="confirming bg-gray-100 px-4 py-12 rounded-xl w-[90%]">
              <div className="title">
                <h5 className=" text-2xl font-semibold">Confirm Information</h5>
                <p className=" text-base text-gray-400 my-3">
                  You Are About To Receive 1.356 BTC For Bitcloud Bank
                </p>
              </div>

              <div className="details flex flex-col justify-center items-start">
                <div className="pay flex items-center mt-5">
                  <GiWallet
                    size={40}
                    className=" fill-white bg-purple-600 rounded-full p-1"
                  />
                  <div className="detail ml-3">
                    <p className=" text-sm font-semibold text-gray-600">Pay</p>
                    <span className=" text-sm font-semibold">100 $</span>
                  </div>
                </div>

                <div className="get flex items-center mt-5">
                  <MdGetApp
                    size={40}
                    className=" fill-white bg-purple-600 rounded-full p-1"
                  />
                  <div className="detail ml-3">
                    <p className=" text-sm font-semibold text-gray-600">Get</p>
                    <span className=" text-sm font-semibold">30000 BTC</span>
                  </div>
                </div>

                <div className="for flex items-center mt-5">
                  <AiFillCloud
                    size={40}
                    className=" fill-white bg-purple-600 rounded-full p-1"
                  />
                  <div className="detail ml-3">
                    <p className=" text-sm font-semibold text-gray-600">For</p>
                    <span className=" text-sm font-semibold">CrypTonight</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="payment-details bg-gray-100 px-4 py-12 mt-10 rounded-xl w-[90%]">
              <h3 className=" text-2xl font-semibold">Payment Details</h3>
              <p className=" font-semibold my-5">Bank Account</p>

              <form className="flex flex-col">
                <label className="font-semibold text-sm">Account name</label>
                <input
                  type="text"
                  placeholder="Shabdan Kozhonaliev"
                  className="w-[80%] p-2 mt-2 rounded-xl"
                />
                <label className="font-semibold text-sm mt-5">
                  Account number
                </label>
                <input
                  type="text"
                  placeholder="YLN8102DNLN6102"
                  className="w-[80%] p-2 mt-2 rounded-xl"
                />
                <label className="font-semibold text-sm mt-5">Address</label>
                <input
                  type="text"
                  placeholder="Bishkek, KGZ"
                  className="w-[80%] p-2 mt-2 rounded-xl"
                />
                <label className="font-semibold text-sm mt-5">SWIFT Code</label>
                <input
                  type="text"
                  placeholder="YOLO312"
                  className="w-[80%] p-2 mt-2 rounded-xl"
                />
                <label className="font-semibold text-sm mt-5">
                  Bank Address
                </label>
                <input
                  type="text"
                  placeholder="Warsaw, PL"
                  className="w-[80%] p-2 mt-2 rounded-xl"
                />
              </form>

              <h5 className=" font-bold mt-4">Reference code</h5>
              <span className=" font-semibold text-sm">
                You MUST include the Reference Code in your deposit in order to
                credit your account!
              </span>

              <p className="text-center mt-2 bg-white text-lg border border-gray-200 rounded-sm">
                TIWOB1166IG
              </p>

              <div className="buttons flex flex-col">
                <button className=" w-[50%] md:w-[25%] py-2 px-4 mt-3 bg-white border border-purple-600 rounded-2xl font-semibold">
                  Cancel
                </button>
                <Link
                  to="/buycrypto/buyPaymentDetails"
                  className=" w-[50%] md:w-[25%] py-2 px-4 mt-3 border bg-purple-600 rounded-2xl text-center text-white font-semibold">
                  Let's Move On
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotes;
