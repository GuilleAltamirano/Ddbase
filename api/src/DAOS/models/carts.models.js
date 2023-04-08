import mongoose from "mongoose"

const cartsCollection = 'Carts'

const cartsSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    products: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true},
        quantity: {type: Number, required: true, min: 1},
    }],
    total: {type: Number, required: true, min: 0, index: true},
    createdAt: {type: Date, default: Date.now},
})

export const cartsModel = mongoose.model(cartsCollection, cartsSchema)