import React from "react";

const Customers = () => {
  return (
    <div className="customers rounded-xl bg-white py-10 mx-3">
      <div className="container max-w-6xl mx-auto">
        <div className="wrapper md:grid md:grid-cols-2">
          <div className="first px-5">
            <h2 className="text-4xl font-bold">
              Our Customers Love What We Do
            </h2>
            <p className="text-lg font-bold text-black mt-3">
              Transform Your idea into Reality With Finsweet
            </p>

            <span className=" text-gray-400 mt-5">
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout.
            </span>

            <div className="customers mt-10 flex flex-col">
              <div className="images flex">
                <div
                  alt=""
                  className=" w-11 h-11 rounded-full mr-2 bg-[url('/images/avt-02.png')] bg-cover bg-center"
                />
                <div
                  alt=""
                  className=" w-11 h-11 rounded-full mr-2 bg-[url('/images/avt-03.png')] bg-cover bg-center"
                />
                <div
                  alt=""
                  className=" w-11 h-11 rounded-full bg-[url('/images/avt-04.png')] bg-cover bg-center"
                />
              </div>

              <div className="count">
                <p className="font-semibold text-purple-600">
                  30+{" "}
                  <span className="text-black font-medium text-xs">
                    Customer Reviwes
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="second px-5">
            <div className="comment mt-10 border-l-[20px] border-purple-600 rounded-2xl px-7">
              <div className="text">
                <p className="text-lg font-semibold">
                  " Great course i really enjoyed it and the course was way easy
                  to learn with some nice explanations of the code, i could
                  easily understand and develop applications with the knowledge
                  gathered during the course "
                </p>
              </div>

              <div className="author flex mt-10">
                <div className=" w-11 h-11 rounded-full mr-2 bg-[url('/images/avt-03.png')] bg-cover bg-center"></div>
                <div className="titles">
                    <p className="font-bold">N'Golo Kante</p>
                    <span className="font-medium text-gray-400 text-sm">Director, Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
