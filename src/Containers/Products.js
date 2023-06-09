import { useEffect, useState, createContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";

export const CategContext = createContext();

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProds, setFilteredProds] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((cat) => {
        setCategories(cat);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const prods = products.filter((elem) =>
        selectedCategories.includes(elem.category)
      );
      setFilteredProds(prods);
    } else {
      fetchProducts();
    }
  }, [selectedCategories]);

  const fetchProducts = () => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
        setFilteredProds(json.products);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div>
        <Header />
        <LoadingScreen />
      </div>
    );
  }

  return (
    <CategContext.Provider
      value={{
        categories,
        selectedCategories,
        setSelectedCategories,
        filteredProds,
      }}
    >
      <div className="products-container">
        <Header prodCount={filteredProds.length} />
        <div className="products-sub-container">
          <div className="product-list-container">
            <div className="products-heading-container">
              <div className="heading">Products </div>
              <div className="prod-count">
                {`(${filteredProds.length} products available)`}
              </div>
            </div>
            <div className="products-list">
              {filteredProds.map((elem, i) => (
                <div key={elem.id}>
                  <img src={elem.images[0]} alt="prodduct " />
                  <p className="price">${elem.price}</p>
                  <p className="product-title">{elem.title}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </CategContext.Provider>
  );
};

export default Products;
