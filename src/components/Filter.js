import { useContext } from "react";
import { CategContext } from "../Containers/Products";
import { Checkbox } from "antd";

const Filter = ({ show, showHide }) => {
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    filteredProds,
  } = useContext(CategContext);

  const selectCategory = (e, cat) => {
    const cats = [...selectedCategories];
    if (e.target.checked) {
      setSelectedCategories([...cats, cat]);
    } else {
      const index = cats.indexOf(cat);
      if (index > -1) {
        cats.splice(index, 1);
        setSelectedCategories(cats);
      }
    }
  };

  const handleReset = () => {
    setSelectedCategories([]);
  };

  return (
    <div className={`filter-container ${show ? "filter-show" : "filter-hide"}`}>
      <p className="categories-heading">
        Categories
        <span className="category-count">
          {selectedCategories.length > 0
            ? `(${filteredProds.length} Products Available)`
            : null}
        </span>
      </p>
      <div className="categories-list">
        {categories.map((elem) => (
          <div className="category-item">
            <Checkbox
              onChange={(e) => selectCategory(e, elem)}
              name="category"
              checked={selectedCategories.includes(elem)}
            >
              {elem}
            </Checkbox>
          </div>
        ))}
      </div>
      <div className="button-group">
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
        <button className="close-btn" onClick={() => showHide(!show)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Filter;
