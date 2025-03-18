import React, { useState } from "react";
import Header from "../header/header";
import "./dashboard.css";
import SearchBar from "../searchbar/searchbar";
import AllComponents from "../allcomponents/allcomponents";

const Dashboard = () => {
  const [savedComponents, setSavedComponents] = useState([]);
  const [filteredSavedComponents, setFilteredSavedComponents] = useState([]);
  return (
    <>
      <Header />
      <SearchBar
        savedComponents={savedComponents}
        setSavedComponents={setSavedComponents}
        filteredSavedComponents={filteredSavedComponents}
        setFilteredSavedComponents={setFilteredSavedComponents}
      />
      <AllComponents
        savedComponents={savedComponents}
        setSavedComponents={setSavedComponents}
        filteredSavedComponents={filteredSavedComponents}
        setFilteredSavedComponents={setFilteredSavedComponents}
      />
    </>
  );
};

export default Dashboard;
