const pool = require("./pool");

const SQL = `
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
category_name VARCHAR (255)
);

CREATE TABLE products (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_name VARCHAR (255) NOT NULL,
category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);

INSERT INTO categories (category_name)
VALUES
  ('Produce'),
  ('Dairy'),
  ('Meat & Poultry'),
  ('Fish & Seafood'),
  ('Bakery'),
  ('Frozen Foods'),
  ('Pantry Staples'),
  ('Snacks'),
  ('Beverages'),
  ('Spices & Herbs');

INSERT INTO products (product_name, category_id)
VALUES 
  ('Apples', 1),
  ('Bananas', 1),
  ('Carrots', 1),
  ('Lettuce', 1),
  ('Tomatoes', 1),
  ('Onions', 1),
  ('Garlic', 1),
  ('Potatoes', 1),
  ('Sweet Potatoes', 1),
  ('Bell Peppers', 1),
  ('Cucumbers', 1),
  ('Zucchini', 1),
  ('Spinach', 1),
  ('Broccoli', 1),
  ('Cauliflower', 1),
  ('Oranges', 1),
  ('Grapes', 1),
  ('Strawberries', 1),
  ('Blueberries', 1),
  ('Milk', 2),
  ('Whole Milk', 2),
  ('Yogurt', 2),
  ('Greek Yogurt', 2),
  ('Cheddar Cheese', 2),
  ('Mozzarella Cheese', 2),
  ('Cottage Cheese', 2),
  ('Butter', 2),
  ('Cream Cheese', 2),
  ('Chicken Breast', 3),
  ('Chicken Thighs', 3),
  ('Ground Beef', 3),
  ('Stew Meat', 3),
  ('Turkey Breast', 3),
  ('Lamb Chops', 3),
  ('Hot Dogs', 3),
  ('Salmon Fillet', 4),
  ('Tuna Steaks', 4),
  ('Tilapia Fillets', 4),
  ('Shrimp (Raw)', 4),
  ('Cod Fillets', 4),
  ('Sourdough Bread', 5),
  ('Pita', 5),
  ('Whole Wheat Bread', 5),
  ('Bagels', 5),
  ('Hamburger Buns', 5),
  ('Challah', 5),
  ('Tortillas', 5),
  ('Frozen Peas', 6),
  ('Frozen Corn', 6),
  ('Frozen Mixed Vegetables', 6),
  ('Frozen Pizza', 6),
  ('Frozen Berries', 6),
  ('Ice Cream', 6),
  ('Rice', 7),
  ('Brown Rice', 7),
  ('Pasta', 7),
  ('Couscous', 7),
  ('Quinoa', 7),
  ('Flour', 7),
  ('Sugar', 7),
  ('Olive Oil', 7),
  ('Canned Chickpeas', 7),
  ('Canned Black Beans', 7),
  ('Canned Tomatoes', 7),
  ('Potato Chips', 8),
  ('Pretzels', 8),
  ('Popcorn', 8),
  ('Granola Bars', 8),
  ('Crackers', 8),
  ('Chocolate Bar', 8),
  ('Dried Fruit Mix', 8),
  ('Orange Juice', 9),
  ('Apple Juice', 9),
  ('Coffee', 9),
  ('Tea Bags', 9),
  ('Sparkling Water', 9),
  ('Cola', 9),
  ('Cumin', 10),
  ('Basil', 10),
  ('Oregano', 10),
  ('Paprika', 10),
  ('Cinnamon', 10),
  ('Garlic Powder', 10),
  ('Onion Powder', 10),
  ('Black Pepper', 10),
  ('Turmeric', 10);
`;

async function main() {
  console.log("Seeding...");
  await pool.query(SQL);

  console.log("Done");
  pool.end();
}

main();
