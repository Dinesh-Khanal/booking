import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";
import { Option, SelectDate } from "../../components/header/Header";
import { format } from "date-fns";
import Checkbox from "../../components/checkbox/Checkbox";
import SearchResult from "./SearchResult";
import { BsSearch } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";

type IState = {
  destination: string;
  option: Option;
  date: SelectDate;
};
const List = () => {
  const state = useLocation().state as IState;
  const { destination, option, date } = state;
  const [dest, setDest] = useState(destination);

  return (
    <div className="List">
      <Header type="list" />
      <div className="ListWrapper">
        <div className="ListContainer">
          <div className="breadCrum">{`Home > Nepal > Search Result`}</div>
          <div className="ListSearchContainer">
            <div className="ListSearch">
              <h2>Search</h2>
              <p>Destination/property name:</p>
              <div className="ListSearchInput">
                <input type="text" placeholder="" value={dest} />
                <BsSearch />
              </div>
              <p>Check-in date:</p>
              <div className="ListDt">
                {`${format(date.startDate!, "MM/dd/yyyy")}`}
                <FaCalendarDay />
              </div>
              <p>Check-out date:</p>
              <div className="ListDt">
                {`${format(date.startDate!, "MM/dd/yyyy")}`}
                <FaCalendarDay />
              </div>
              <div className="ListOption">
                {`${option.adult} adult . ${option.Child} chile . ${option.room} room`}
              </div>
              <Checkbox label="I am travelling" isChecked={false} />
              <button className="ListSearchBtn">Search</button>
            </div>
            <div className="ListSearchResult">
              <SearchResult destination={destination} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
