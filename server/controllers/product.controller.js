const {Product} = require('../models/product.model');

module.exports.getAllProducts = (request,response) => {
    Product.find()
        .then(productos=>response.json(productos))
        .catch(err=>response.json(err));
}

module.exports.createProduct = (request,response) => {
    const {title,price,description} = request.body;
    Product.create({
        title,price,description
    })
        .then(producto=>response.json(producto))
        .catch(err=>response.json(err));
}

module.exports.findProductXid = (request,response) => {
    Product.findById({_id:request.params.id})
        .then(producto=>response.json({producto:producto}))
        .catch(err=>response.json(err));
}