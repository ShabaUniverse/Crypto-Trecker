import React from "react";
import { Link } from "react-router-dom";
import UpTop from "../components/Home/UpTop";
import SmallMarket from "../components/Home/SmallMarket";
import Guide from "../components/Home/Guide";
import About from "../components/Home/About";
import Store from "../components/Home/Store";
import Customers from "../components/Home/Customers";

const Home = () => {
  return (
    <div className="home">
      <div className="container max-w-6xl mx-auto">
        <UpTop />
        <SmallMarket />
        <Guide />
        <About />
        <Store />
        <Customers />
      </div>
    </div>
  );
};

export default Home;
