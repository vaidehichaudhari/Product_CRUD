const { categories, categoryId } = require("../data/categories");
const { products, productId } = require("../data/products");

let currentProductId = productId;

// Create a new product
exports.createProducts = (req, res) => {
    const { name, price, description, categoryId } = req.body;

    if (!name || !price || !description || !categoryId) {
        return res.status(400).json({ message: "All values are required" });
    }

    const category = categories.find(cat => cat.id === categoryId);

    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }

    const newProduct = {
        id: currentProductId++,
        name,
        price: parseFloat(price),
        description,
        categoryId,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

// Get all products
exports.getProducts = (req, res) => {
    res.json(products);
};

// Get single product by ID
exports.getProductsById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

// Update a product
exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, price, description, categoryId } = req.body;

    if (name) product.name = name;
    if (price) product.price = parseFloat(price);
    if (description) product.description = description;
    if (categoryId) product.categoryId = categoryId;

    res.json(product);
};

// Delete a product
exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    products.splice(productIndex, 1);
    res.json({ message: "Product deleted successfully" });
};

// Search products by name

// GET http://localhost:5000/api/products/search?name=bat


exports.searchProducts = (req, res) => {
    const { name } = req.query;

    const result = products.filter(product =>
        product.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);
};

// Filter products by price range

// GET http://localhost:5000/api/products/filter/price?minPrice=1000&maxPrice=5000

exports.filterByPriceRange = (req, res) => {
    const min = parseFloat(req.query.minPrice);
    const max = parseFloat(req.query.maxPrice);

    const result = products.filter(product =>
        product.price >= min && product.price <= max
    );

    res.json(result);
};

// filter products by category id
exports.filterByCategory = (req, res) => {
    const { categoryId } = req.params;

    const result = products.filter(product => product.categoryId == categoryId);

    res.json(result);
};