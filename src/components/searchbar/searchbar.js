import React, { useEffect, useState } from "react";
import "./searchbar.css";

const SearchBar = ({
  savedComponents,
  setSavedComponents,
  filteredSavedComponents,
  setFilteredSavedComponents,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [compType, setCompType] = useState("all");
  const [compCat, setCompCat] = useState("all");

  const runSearchFilter = () => {
    let tempComponents = null;
    if (searchQuery === "") tempComponents = savedComponents;
    else
      tempComponents = savedComponents.filter((item) => {
        return (
          item.componentName
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase().trim()) ||
          item.programmingLanguage
            .toLowerCase()
            .includes(searchQuery.toLocaleLowerCase().trim())
        );
      });

    if (compCat != "all") {
      tempComponents = tempComponents.filter((item) => {
        return item.componentCategory === compCat;
      });
    }

    if (compType != "all") {
      tempComponents = tempComponents.filter((item) => {
        return item.componentType === compType;
      });
    }

    setFilteredSavedComponents(tempComponents);
  };

  useEffect(() => {
    runSearchFilter();
  }, [searchQuery, compCat, compType]);

  return (
    <>
      <form className="searchbar">
        <input
          type="text"
          name="name"
          placeholder="Search Anything..."
          onChange={(e) => {
            let query = e.target.value;
            setSearchQuery(query);
          }}
          value={searchQuery}
        />
        <div className="row">
          <div className="col">
            <label>Component Type</label>
            <select
              onChange={(e) => {
                setCompType(e.target.value);
              }}
            >
              <option selected value="all">
                All
              </option>
              <option value="code">Code</option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="col">
            <label>Component Category</label>
            <select
              onChange={(e) => {
                setCompCat(e.target.value);
              }}
            >
              <option selected value="all">
                All
              </option>
              <option value="views">Views</option>
              <option value="model">Model</option>
              <option value="controller">Controllers</option>
              <option value="class">Class</option>
              <option value="object">Object</option>
              <option value="data">Data Access Object</option>
              <option value="services">Services</option>
              <option value="plugins">Plugins</option>
              <option value="api">APIs</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
