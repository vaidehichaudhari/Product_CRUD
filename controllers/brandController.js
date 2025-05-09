const brands = require("../data/brand");
const categories = require("../data/categories");
const products = require("../data/products");

// Add a new brand
function addBrand(req, res) {
  const bname = req.body.brand_name;
  const brandIndex = brands.findIndex(b => b.brand_name === bname);

  if (brandIndex === -1) {
    const newBrand = { brand_ID: Date.now(), brand_name: bname };
    brands.push(newBrand);
    res.status(201).json({ message: "Brand added successfully", brand: newBrand });
  } else {
    res.status(409).json({ message: "Brand already exists" });
  }
}

// Retrieve all brands
function getAllBrand(req, res) {
  res.status(200).json({ brands });
}

// Get products by Brand ID
function getProductByBrandID(req, res) {
  const id = Number(req.params.ID);
  const filtered = products.filter(p => p.brand_ID === id);
  res.status(200).json({ products: filtered });
}

// Update an existing brand by ID
function updateBrand(req, res) {
  const id = Number(req.body.brand_ID || req.params.id);
  const bname = req.body.brand_name;
  const brandIndex = brands.findIndex(b => b.brand_ID === id);

  if (brandIndex !== -1) {
    brands[brandIndex].brand_name = bname;
    res.status(200).json({ message: "Brand updated successfully", brand: brands[brandIndex] });
  } else {
    res.status(404).json({ message: "Brand not found" });
  }
}

// Delete a brand by ID
function deleteBrand(req, res) {
  const id = Number(req.body.brand_ID || req.params.id);
  const brandIndex = brands.findIndex(b => b.brand_ID === id);

  if (brandIndex !== -1) {
    const removed = brands.splice(brandIndex, 1);
    res.status(200).json({ message: "Brand deleted successfully", brand: removed[0] });
  } else {
    res.status(404).json({ message: "Brand not found" });
  }
}

// Add a new category
function addCategory(req, res) {
  const cname = req.body.category_name;
  const catIndex = categories.findIndex(c => c.category_name === cname);

  if (catIndex === -1) {
    const newCategory = { category_ID: Date.now(), category_name: cname };
    categories.push(newCategory);
    res.status(201).json({ message: "Category added successfully", category: newCategory });
  } else {
    res.status(409).json({ message: "Category already exists" });
  }
}

module.exports = {
  addBrand,
  getAllBrand,
  getProductByBrandID,
  updateBrand,
  deleteBrand,
  addCategory
};
