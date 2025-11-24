const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.listCategories);

categoryRouter.get("/newCategory", categoryController.createCategoryGet);

categoryRouter.post("/newCategory", categoryController.createCategoryPost);

// Get by ID
categoryRouter.get("/:id", categoryController.getCategoryById);

// Need to make udpateCategoryGet and updateCategoryPost
categoryRouter.get("/:id/edit", categoryController.updateCategoryGet);

categoryRouter.post("/:id/edit", categoryController.updateCategoryPost);

// Need to make deleteCategoryGet and deleteCategoryPost
categoryRouter.post("/:id/delete", categoryController.deleteCategoryPost);
