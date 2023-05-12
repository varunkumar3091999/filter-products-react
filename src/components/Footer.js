import { useState } from "react";
import Filter from "./Filter";

const Footer = () => {
  const [showFilter, setShowFilter] = useState(false);
  const displayFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleFilterVisibility = (vai) => {
    setShowFilter(vai);
  };

  return (
    <div className="footer">
      <div className="footer-buttons">
        <div onClick={displayFilter} className="filter-button">
          Filters
        </div>
      </div>
      <Filter show={showFilter} showHide={toggleFilterVisibility} />
    </div>
  );
};

export default Footer;
