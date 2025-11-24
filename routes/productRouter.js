const { Router } = require("express");
const productController = require("../controllers/productController");

const productRouter = Router();

// C
productRouter.get(
  "/:categoryId/products/new",
  productController.createProductGet
);

productRouter.post(
  "/:categoryId/products/new",
  productController.createProductPost
);

//U
productRouter.get(
  "/:categoryId/products/:id/edit",
  productController.updateProductGet
);

productRouter.post(
  "/:categoryId/products/:id/edit",
  productController.updateProductPost
);

// D
productRouter.post(
  "/:categoryId/products/:id/delete",
  productController.deleteProductPost
);

module.exports = productRouter;
