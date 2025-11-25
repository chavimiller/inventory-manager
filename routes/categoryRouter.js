const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.listCategories);

categoryRouter.get("/new", categoryController.createCategoryGet);

categoryRouter.post("/new", categoryController.createCategoryPost);

categoryRouter.get("/:categoryId", categoryController.getCategoryById);

categoryRouter.get("/:categoryId/edit", categoryController.updateCategoryGet);

categoryRouter.post("/:categoryId/edit", categoryController.updateCategoryPost);

categoryRouter.post(
  "/:categoryId/delete",
  categoryController.deleteCategoryPost
);

module.exports = categoryRouter;
