const {Product} = require('../models/product.model');

module.exports.index = (request,response) => {
    response.json({product:"jejejeje"});
}

module.exports.createProduct = (request,response) => {
    const {title,price,description} = request.body;
    Product.create({
        title,price,description
    })
        .then(producto=>response.json(producto))
        .catch(err=>response.json(err));
}