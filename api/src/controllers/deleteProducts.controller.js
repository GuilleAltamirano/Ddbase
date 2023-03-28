import { productsServices } from "../DAOS/services/products.services.js"
import { deleteProductsValidators } from "./validators/deleteProducts.validators.js"

export const deleteProductsController = async (req, res, next) => {
    try {
        deleteProductsValidators(req.params.id, await productsServices.getProducts())
        res.status(200).json({
            status: true,
            payload: await productsServices.getProducts()
        })
    } catch (err) {next(err)}
}
