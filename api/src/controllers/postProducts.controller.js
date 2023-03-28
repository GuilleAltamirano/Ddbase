import { productsServices } from "../DAOS/services/products.services.js"
import { postProductsValidations } from "./validators/postProducts.validators.js"

export const postProductsController = async (req, res, next) => {
    try {
        //validate
        postProductsValidations(req.body, await productsServices.getProducts())
        //send
        res.status(200).json({
            status: true,
            payload: await productsServices.addProduct(req.body)
        })
    } catch (err) {next(err)}
}