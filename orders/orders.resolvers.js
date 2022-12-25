const orderModels = require("./orders.model");

module.exports = {
  Query: {
    Orders: () => {
      return orderModels.getAllOrders();
    },
  },
};
