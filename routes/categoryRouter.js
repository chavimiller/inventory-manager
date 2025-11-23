const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.listCategories);

categoryRouter.get("/new", categoryController.createCategoryGet);

categoryRouter.post("/new", categoryController.createCategoryPost);
