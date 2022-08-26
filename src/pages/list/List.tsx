import React from "react";
import Header from "../../components/header/Header";
import "./list.css";
//import { useLocation } from "react-router-dom";

const List = () => {
  //const location = useLocation();
  //const { destination, option, date } = location.state;
  return (
    <div>
      <Header type="list" />
      <h2>List of Hotels</h2>
    </div>
  );
};

export default List;
