const db = require("../db/queries");

async function getCategoryById(req, res) {
  const id = req.params.id;
  const category = await db.getCategoryById(id);

  if (!category) {
    return res.status(404).send("Category not found.");
  }

  res.render("categoryDetail", { category });
}

// C of CRUD (CREATE)
async function createCategoryGet(req, res) {
  res.render("newCategory");
}

async function createCategoryPost(req, res) {
  const { category } = req.body;
  await db.insertCategory(category);
  res.redirect("/");
}

// R of CRUD (READ)
async function listCategories(req, res) {
  const categories = await db.getAllCategories();
  console.log("Categories: " + categories);

  res.render("categoryList", { categories });
}

// U of CRUD (UPDATE)
async function updateCategoryGet(req, res) {
  const id = req.params.id;
  const category = await db.getCategoryById(id);

  res.render("newCategory", { category });
}

async function updateCategoryPost(req, res) {
  const id = req.params.id;
  const { category } = req.body;

  await db.updateCategory(id, category);
  res.redirect(`/${id}`);
}

// D of CRUD (DELETE)
async function deleteCategoryPost(req, res) {
  const id = req.params.id;
  await db.deleteCategory(id);
  res.redirect("/");
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
