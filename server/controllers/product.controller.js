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

module.exports.editProduct = (request,response) => {
    Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
        .then(producto=>response.json(producto))
        .catch(err=>response.json(err));
}

module.exports.deleteProduct = (request,response) => {
    Product.findOneAndDelete({_id:request.params.id}) 
        .then(confirmation=>response.json(confirmation))
        .catch(err=>response.json(err));
}