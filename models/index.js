// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
Category.hasMany(Product, { foreignKey: 'category_id' })
Product.belongsTo(Category, {foreignKey: 'category_id'})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag })

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
