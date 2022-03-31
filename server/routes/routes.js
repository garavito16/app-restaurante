const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    //app.get('/index',ProductController.index);
    app.get('/product/getAll',ProductController.getAllProducts);
    app.post('/product/new',ProductController.createProduct);
    app.get('/product/:id',ProductController.findProductXid);
    app.put('/product/:id',ProductController.editProduct);
    app.delete('/product/:id',ProductController.deleteProduct);
}