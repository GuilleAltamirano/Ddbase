import { productsServices } from "../../DAOS/services/products.services.js"
import { postProductsValidations } from "../validators/product/postProducts.validators.js"

export const postProductsController = async (req, res, next) => {
    try {
        //validate
        await postProductsValidations(req.body)
        //send
        res.status(200).json({
            status: true,
            payload: await productsServices.addProduct(req.body)
        })
    } catch (err) {next(err)}
}