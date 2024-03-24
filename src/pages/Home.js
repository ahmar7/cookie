import React from "react";
import Header from "../layout/Header/Header";

import Footer from "../layout/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import Platforms from "../components/Platforms/Platforms";
import MarketingFi from "../components/MarketingFi/MarketingFi";

const Home = () => {
  return (
    <div>
      <Header />

      <div>
        <div className=" pt-5">
          <Banner />
          <Ecosystem />
          <Platforms />
          <MarketingFi />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
