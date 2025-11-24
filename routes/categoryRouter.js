const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.listCategories);

categoryRouter.get("/newCategory", categoryController.createCategoryGet);

categoryRouter.post("/newCategory", categoryController.createCategoryPost);

categoryRouter.get("/:id", categoryController.getCategoryById);

categoryRouter.get("/:id/edit", categoryController.updateCategoryGet);

categoryRouter.post("/:id/edit", categoryController.updateCategoryPost);

categoryRouter.post("/:id/delete", categoryController.deleteCategoryPost);
