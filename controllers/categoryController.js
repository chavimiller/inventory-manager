const db = require("../db/queries");
const pool = require("../db/pool");

async function getCategoryById(req, res) {
  const id = req.params.id;
  const category = await db.getCategoryById(id);

  if (!category) {
    return res.status(404).send("Category not found.");
  }

  res.render("categoryDetail", { category });
}

// R of CRUD (READ)
async function listCategories(req, res) {
  // Create db query to getAllCategories
  const categories = await db.getAllCategories();
  console.log("Categories: " + categories);
  res.send(
    "Categories: " + categories.map((category) => category.name).join(", ")
  );
  res.render("categoryList", { categories });
}

// C of CRUD (CREATE)
async function createCategoryGet(req, res) {
  res.render("newCategory");
}

async function createCategoryPost(req, res) {
  const { category } = req.body;
  // Create db query to add a category
  await db.insertCategory(category);
  res.redirect("/");
}

// D of CRUD (DELETE)
// Should call db query from queries.js instead of directly calling a query here
async function deleteCategory(req, res) {
  const id = req.params.id;
  await db.deleteCategory(id);
  res.redirect("/");
}

// U of CRUD (UPDATE)

async function updateCategory() {}

module.exports = {
  listCategories,
  createCategoryGet,
  createCategoryPost,
  deleteCategory,
  updateCategory,
};
