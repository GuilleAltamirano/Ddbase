import mongoose from "mongoose"

const pricesCollection = 'Prices'

const pricesSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: String,
    prices: [{
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        price: {type: Number, required: true, min: 0},
        index: true
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export const pricesModel = mongoose.model(pricesCollection, pricesSchema)