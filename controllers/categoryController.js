const db = require("../db/queries");

async function getCategoryById(req, res) {
  const { categoryId } = req.params;

  const category = await db.getCategoryById(categoryId);
  const products = await db.getProductsByCategoryId(categoryId);

  if (!category) {
    return res.status(404).send("Category not found.");
  }

  res.render("categoryDetail", { category, products });
}

// C of CRUD (CREATE)
async function createCategoryGet(req, res) {
  res.render("newCategory", { category: null });
}

async function createCategoryPost(req, res) {
  const { category } = req.body;
  await db.insertCategory(category);
  res.redirect("/categories");
}

// R of CRUD (READ)
async function listCategories(req, res) {
  const categories = await db.getAllCategories();
  console.log("Categories: " + categories);

  res.render("categoryList", { categories });
}

// U of CRUD (UPDATE)
async function updateCategoryGet(req, res) {
  const id = req.params.categoryId;
  const category = await db.getCategoryById(id);

  res.render("newCategory", { category });
}

async function updateCategoryPost(req, res) {
  const { categoryId } = req.params;
  const { category } = req.body;

  await db.updateCategory(categoryId, category);
  res.redirect(`/categories/${categoryId}`);
}

// D of CRUD (DELETE)
async function deleteCategoryPost(req, res) {
  const id = req.params.categoryId;
  await db.deleteCategory(id);
  res.redirect("/categories");
}

module.exports = {
  getCategoryById,
  listCategories,
  createCategoryGet,
  createCategoryPost,
  deleteCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
};
