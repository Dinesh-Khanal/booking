import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./hotel.css";
import { MdLocationPin } from "react-icons/md";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaTimesCircle,
} from "react-icons/fa";
import FooterEmail from "../../components/FooterEmail";
import BottomFooter from "../../components/BottomFooter";
import images from "../../images";
const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [openImageId, setOpenImageId] = useState(0);

  const handleClick = (i: number) => {
    setOpenImageId(i);
    setOpen(true);
  };

  const handleArrow = (arrow: string) => {
    if (arrow === "l") {
      openImageId > 0
        ? setOpenImageId(openImageId - 1)
        : setOpenImageId(images.length - 4);
    } else if (arrow === "r") {
      openImageId < images.length - 4
        ? setOpenImageId(openImageId + 1)
        : setOpenImageId(0);
    }
  };

  return (
    <div className="Hotel">
      <Header type="list" />
      <div className="HotelContainer">
        <div className="HotelWraper">
          {open && (
            <div className="hotelSlider">
              <FaArrowCircleLeft onClick={() => handleArrow("l")} />
              <span className="hotelCloseBtn" onClick={() => setOpen(false)}>
                <FaTimesCircle onClick={() => handleArrow("r")} />
              </span>
              <img src={images[openImageId]} alt="" />
              <FaArrowCircleRight onClick={() => handleArrow("r")} />
            </div>
          )}
          <div className="hotelHeader">
            <a href="/#">Info and prices</a>
            <a href="/#facilities">Facilities</a>
            <a href="/#">House rules</a>
            <a href="/#">Guest reviews</a>
          </div>
          <h1 className="hotelTitle">Kathmandu Aagantuk Hotel</h1>
          <div className="hotelAddress">
            <MdLocationPin />
            <span>
              Lekhnath Marg, Thamel, Thamel, 44600 Kathmandu , best location{" "}
              <a href="https://goo.gl/maps/4QxTT61ACCnRq72h6">View in map</a>
            </span>
          </div>
          <div className="hotelImages">
            <div className="hotelImagesTop">
              <div className="hotelSideImage">
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
              </div>
              <div className="hotelMainImage">
                <img src={images[0]} alt="" />
              </div>
            </div>
            <div className="hotelImagesBottom">
              {images.slice(3, 8).map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt=""
                  onClick={() => handleClick(i)}
                />
              ))}
            </div>
          </div>
          <FooterEmail />
          <BottomFooter />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
