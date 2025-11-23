const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.listCategories);

categoryRouter.get("/newCategory", categoryController.createCategoryGet);

categoryRouter.post("/newCategory", categoryController.createCategoryPost);

// Get by ID
categoryRouter.get("/:id", categoryController.get);

// Need to make udpateCategoryGet and updateCategoryPost
categoryRouter.get("/:id/edit", categoryController.updateCategory);

// Need to make deleteCategoryGet and deleteCategoryPost
categoryRouter.get("/:id/delete", categoryController.deleteCategory);
