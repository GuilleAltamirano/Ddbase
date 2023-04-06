import mongoose from "mongoose"

const prodsCollection = 'Products'

const prodsSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true, min: 0, index: true },
    stock: { type: Number, require: true, min: 1, index: true },
    category: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Category' },
    brand: {type: mongoose.Schema.Types.ObjectId, ref: 'brand', require: true},
    thumbnail: [{ type: String, default: 'https://www.dieteticalatolva.com/images/default.png' }],
    status: {type: Boolean, default: true, index: true},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

export const productsModel = mongoose.model(prodsCollection, prodsSchema)