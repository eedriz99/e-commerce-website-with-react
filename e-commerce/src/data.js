
const productList = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

  const productCategory = fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((json) => console.log(json));

const getProductList = () => {
  return productList;
};

const getProductCategory = () => productCategory;

// export getProductList;

// getProductCategory;
