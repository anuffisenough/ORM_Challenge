const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreign_key: 'category_id',
});

Category.hasMany(Product);

Product.belongsToMany(Tag, { through: 'ProductTag', 
foreign_key: 'tag_id' });

Tag.belongsToMany(Product, { through: 'ProductTag'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
