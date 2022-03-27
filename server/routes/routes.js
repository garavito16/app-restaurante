const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/index',ProductController.index);
    app.post('/product/new',ProductController.createProduct);
}