const db = require("../db/queries");
const pool = require("../db/pool");

// R of CRUD (READ)
async function listCategories(req, res) {
  // Create db query to getAllCategories
  const categories = await db.getAllCategories();
  console.log("Categories: " + categories);
  res.send(
    "Categories: " + categories.map((category) => category.name).join(", ")
  );
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

async function deleteCategory(req, res) {
  try {
    // Edit to only delete selected category
    await pool.query(`DELETE FROM categories`);
    res.send("All categories deleted");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
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
