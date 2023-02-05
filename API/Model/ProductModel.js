const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: mongoose.SchemaTypes.String,
    price: mongoose.SchemaTypes.String,
    rating: mongoose.SchemaTypes.String,
    productURL: mongoose.SchemaTypes.String,
    description: mongoose.SchemaTypes.String
})
module.exports = mongoose.model('ProductModel', productSchema)
