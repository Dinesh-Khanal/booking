import React, { useState } from "react";
import "./header.css";
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendarDay } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const Header = () => {
  const [showDate, setShowDate] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: 1,
    Child: 0,
    room: 1,
  });
  const handleOption = (optName: keyof typeof option, opt: string) => {
    setOption({
      ...option,
      [optName]:
        opt === "d" && option[optName] > 0
          ? option[optName] - 1
          : opt === "i"
          ? option[optName] + 1
          : option[optName],
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FaTaxi />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free KTM-booking account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <div className="headeSearchText">
              <FaBed />
              <span>Where are you going?</span>
            </div>
          </div>
          <div className="headerSearchItem">
            <div className="headeSearchText">
              <FaCalendarDay />
              <span onClick={() => setShowDate(!showDate)}>
                Check-in - Check-out
              </span>
              {showDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
          </div>
          <div className="headerSearchItem">
            <div
              className="headeSearchText"
              onClick={() => setShowOption(!showOption)}
            >
              <MdPerson />
              <span>{`${option.adult} adult . ${option.Child} chile . ${option.room} room`}</span>
            </div>
            {showOption && (
              <div className="optionContainer">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("Child", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.Child}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("Child", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
