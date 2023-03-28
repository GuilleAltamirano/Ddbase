import { productsModel } from "../models/products.models.js"

class ProductsServices {
    constructor (products) {
        this.products = products
    }

    async getProducts () {
        return this.products.find()
    }

    async addProduct (product) {
        return this.products.create(product)
    }

    async putProduct (id, update) {
        return this.products.updateOne(id, update)
    }

    async deleteProduct (id) {
        return this.products.deleteOne(id)
    }
}

export const productsServices = new ProductsServices(productsModel)