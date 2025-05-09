const { categories, categoryId } = require("../data/categories");

let currentCategoryId = categoryId;

exports.createCategory = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Category name is required!" });

  const newCategory = {
    id: currentCategoryId++,
    name,
  };

  categories.push(newCategory);
  res.status(201).json(newCategory);
};

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.getCategoryById = (req, res) => {
  const category = categories.find(cat => cat.id == parseInt(req.params.id));
  if (!category) return res.status(404).json({ message: "Category not found!" });
  res.json(category);
};

exports.updateCategory = (req, res) => {
  const category = categories.find(cat => cat.id == parseInt(req.params.id));
  if (!category) return res.status(404).json({ message: "Category not found!" });

  const { name } = req.body;
  if (name) category.name = name;

  res.json(category);
};

exports.deleteCategory = (req, res) => {
  const index = categories.findIndex(cat => cat.id == parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Category not found!" });

  categories.splice(index, 1);
  res.json({ message: "Category deleted successfully" });
};