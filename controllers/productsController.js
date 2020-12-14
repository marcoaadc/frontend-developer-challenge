const products = require("../data/products")

module.exports = {
    index (req, res, next) {
    res.render('index', { products });
  }
}