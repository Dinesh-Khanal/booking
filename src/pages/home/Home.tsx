import React from "react";
import BottomFooter from "../../components/BottomFooter";
import Explore from "../../components/Explore";
import Feature from "../../components/Feature";
import FooterEmail from "../../components/FooterEmail";
import Header from "../../components/header/Header";
import Slider from "../../components/Slide";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header type="" />
      <div className="featureContainer">
        <Feature />
        <div className="placeHeading">
          <h2>Browse by Place</h2>
          <br />
          <Slider />
          <br />
          <h2>Explore Nepal</h2>
          <p>These popular destinations have a lot to offer</p>
        </div>
        <Explore />
        <FooterEmail />
        <BottomFooter />
        <div className="cright">
          Copyright © 1996–2022 KTM-Booking.com™. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Home;
