import { productsServices } from "../../DAOS/services/products.services.js"

export const getProductsController = async (req, res, next) => {
    try {
        res.status(200).json({
            status: true,
            payload: await productsServices.getProducts()
        })
    } catch (err) {next(err)}
}