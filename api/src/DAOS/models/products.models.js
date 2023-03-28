import mongoose from "mongoose"

const prodsCollection = 'products'

const prodsSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    code: { type: String, require: true },
    price: { type: Number, require: true, min: 1 },
    status: { type: Boolean, require: true },
    stock: { type: Number, require: true, min: 1 },
    category: { type: String, require: true },
    thumbnail: { type: Array, require: true }
})

export const productsModel = mongoose.model(prodsCollection, prodsSchema)