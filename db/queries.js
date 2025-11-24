const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertCategory(category) {
  await pool.query("INSERT INTO categories (category_name) VALUES ($1)", [
    category,
  ]);
}

async function updateCategory(id, newName) {
  await pool.query("UPDATE categories SET category_name = $1 WHERE id = $2", [
    newName,
    id,
  ]);
}
async function deleteCategory(id) {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

async function getAllProducts() {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
}

async function getProductById(id) {
  const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertProduct(productName, categoryId) {
  await pool.query(
    "INSERT INTO products (product_name, category_id) VALUES ($1, $2)",
    [productName, categoryId]
  );
}

async function updateProduct(id, newName, newCategoryId) {
  await pool.query(
    "UPDATE products SET product_name = $1, category_id = $2 WHERE id = $3",
    [newName, newCategoryId, id]
  );
}

async function deleteProduct(id) {
  await pool.query("DELETE FROM products WHERE id = $1", [id]);
}

module.exports = {
  getAllCategories,
  getCategoryById,
  insertCategory,
  updateCategory,
  deleteCategory,
};
