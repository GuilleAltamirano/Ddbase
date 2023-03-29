import { productsServices } from "../../DAOS/services/products.services.js"
import { postProductsValidations } from "../validators/product/postProducts.validators.js"

export const postProductsController = async (req, res, next) => {
    try {
        //validate
        const productAdd = req.body
        const validation = await postProductsValidations(productAdd)
        //return
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)}
}