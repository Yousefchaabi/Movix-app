import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";
import Popular from "../../components/popular/Popular";
import TopRated from "../../components/topRated/TopRated";

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
