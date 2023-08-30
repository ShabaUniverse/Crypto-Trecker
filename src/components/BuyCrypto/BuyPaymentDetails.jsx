import React from "react";
import { IoIosDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";

const BuyPaymentDetails = () => {
  return (
    <div className="">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper px-2 flex flex-col justify-center items-center">
          <div className="rootInfo flex flex-col items-start w-full py-5 ">
            <h4 className=" text-4xl font-semibold">Buy Crypto</h4>
            <p className=" text-xl text-gray-400 mt-12">Home / Buy Crypto</p>
          </div>

          <div className="steps w-full flex flex-col my-5">
            <p className=" font-semibold">Select Currency</p>
            <p className=" font-semibold">Important Notes</p>
            <p className=" font-semibold">Payment Details</p>
          </div>

          <div className="heading flex items-center my-7">
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

          <div className=" py-10 flex flex-col items-center bg-white rounded-xl w-[90%] md:w-[70%]">
            <div className="title flex items-center">
              <h4 className=" font-bold mr-5 text-2xl">Success</h4>
              <IoIosDoneAll
                size={35}
                className=" bg-green-400 rounded-full fill-white"
              />
            </div>

            <p className=" font-medium my-7">
              You successfully bought 1.312 BTC for Rockie!
            </p>

            <div className="status-box bg-gray-100 w-[80%] px-6 py-3 rounded-xl">
              <div className="top flex justify-between">
                <p className=" font-semibold">Status</p>
                <span className=" text-green-400 font-semibold">Completed</span>
              </div>

              <div className="line h-[1px] bg-white my-3"></div>

              <div className="bottom flex justify-between">
                <p className=" font-semibold">Transaction ID</p>
                <span className=" text-green-400 font-semibold">
                  0msx83693087r398
                </span>
              </div>
            </div>

            <div className="hplink my-10 font-semibold text-purple-600">
              <Link to="/">Go to Home Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPaymentDetails;
