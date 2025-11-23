const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function insertCategory(category) {
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
}

async function deleteCategory() {}

module.exports = {
  getAllCategories,
  insertCategory,
};
