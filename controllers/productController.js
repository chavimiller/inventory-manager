const db = require("../db/queries");

async function getProductById(req, res) {
  const id = req.params.id;
  const product = await db.getProductById(id);

  if (!product) {
    return res.status(404).send("Product not found.");
  }
  res.render("productDetail", { product });
}

// C
async function createProductGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("newProduct", { categories });
}

async function createProductPost(req, res) {
  const { categoryId } = req.params;
  const { product_name } = req.body;
  await db.insertProduct(product_name, categoryId);

  res.redirect(`/categories/${categoryId}`);
}

// R
async function listProducts(req, res) {
  const { categoryId } = req.params;

  const category = await db.getCategoryById(categoryId);
  const products = await db.getProductsByCategoryId(categoryId);

  res.render("categoryDetail", { category, products });
}

// U
async function updateProductGet(req, res) {
  const { categoryId, id } = req.params;
  const product = await db.getProductById(id);
  const category = await db.getCategoryById(categoryId);

  res.render("newProduct", { product, category });
}
async function updateProductPost(req, res) {
  const { categoryId, id } = req.params;
  const { product_name } = req.body;

  await db.updateProduct(id, product_name);
  res.redirect(`/categories/${categoryId}`);
}

// D
async function deleteProductPost(req, res) {
  const { categoryId, id } = req.params;
  await db.deleteProduct(id);

  res.redirect(`/categories/${categoryId}`);
}

module.exports = {
  getProductById,
  createProductGet,
  createProductPost,
  listProducts,
  updateProductGet,
  updateProductPost,
  deleteProductPost,
};
