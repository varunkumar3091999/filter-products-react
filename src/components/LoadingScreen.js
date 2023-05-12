const LoadingScreen = () => {
  const renderProductSkeleton = () => {
    const elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push(
        <div className="product-loader-container">
          <span class="skeleton-loader image-skeleton"></span>
          <span class="skeleton-loader price-skeleton"></span>
          <span class="skeleton-loader title-skeleton"></span>
        </div>
      );
    }
    return elements;
  };

  return (
    <div className="loading-container">
      <div className="categories-skeleton">
        <span class="skeleton-loader category-skeleton"></span>
      </div>
      <div className="">
        <div className="product-list-container-skeleton">
          <div className=" product-list-skeleton">
            {renderProductSkeleton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
