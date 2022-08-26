import React, { useState } from "react";
import "./header.css";
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendarDay } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export type SelectDate = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};
type IProps = {
  type: string;
};
export type Option = {
  adult: number;
  Child: number;
  room: number;
};
const Header = ({ type }: IProps) => {
  const [showDate, setShowDate] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [date, setDate] = useState<SelectDate>({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [option, setOption] = useState<Option>({
    adult: 1,
    Child: 0,
    room: 1,
  });
  const [destination, setDestination] = useState("");
  const selectionRange = {
    startDate: date.startDate,
    endDate: date.endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setDate({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
  };

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
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, option, date } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free KTM-booking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <div className="headeSearchText">
                  <FaBed />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="headerSearchItem">
                <div className="headeSearchText">
                  <FaCalendarDay />
                  <span onClick={() => setShowDate(!showDate)}>
                    {`${format(date.startDate!, "MM/dd/yyyy")} to ${format(
                      date.endDate!,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {showDate && (
                    <DateRangePicker
                      editableDateInputs={true}
                      onChange={handleSelect}
                      ranges={[selectionRange]}
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
                        <span className="optionCounterNumber">
                          {option.adult}
                        </span>
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
                        <span className="optionCounterNumber">
                          {option.Child}
                        </span>
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
                        <span className="optionCounterNumber">
                          {option.room}
                        </span>
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
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
