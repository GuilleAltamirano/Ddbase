import { productsServices } from "../DAOS/services/products.services.js"
import { putProductsValidator } from "./validators/putProducts.validators.js"

export const putProductsController = async (req, res, next) => {
    try {
        putProductsValidator(req.body, req.params.id, await productsServices.getProducts())
        res.status(200).json({
            status: true,
            payload: await productsServices.putProduct({_id:req.params.id}, req.body)
        })
    } catch (err) {next(err)}
}