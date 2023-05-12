import { useContext } from "react";
import { CategContext, selectedCategContext } from "../Containers/Products";
import { Checkbox, Button } from "antd";

const Filter = ({ show, showHide }) => {
  const categories = useContext(CategContext);
  const { selectedCategories, setSelectedCategories } =
    useContext(selectedCategContext);

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
    console.log(selectedCategories);
  };

  const handleReset = () => {
    setSelectedCategories([]);
  };
  return (
    <div className={`filter-container ${show ? "filter-show" : "filter-hide"}`}>
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
