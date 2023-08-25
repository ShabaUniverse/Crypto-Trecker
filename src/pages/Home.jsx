import React from "react";
import { Link } from "react-router-dom";
import UpTop from "../components/Home/UpTop";
import SmallMarket from "../components/Home/SmallMarket";

const Home = () => {
  return (
    <div className="home">
      <div className="container max-w-6xl mx-auto">
        <UpTop />
        <SmallMarket />
      </div>
    </div>
  );
};

export default Home;
