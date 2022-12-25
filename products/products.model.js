const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Shoe",
    price: 42.12,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};
