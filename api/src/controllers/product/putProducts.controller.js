import { productsServices } from "../../DAOS/services/products.services.js"
import { putProductsValidator } from "../validators/product/putProducts.validators.js"

export const putProductsController = async (req, res, next) => {
    try {
        //is valid?
        await putProductsValidator(req.body, await productsServices.getProductById(req.params.id))
        //ok
        res.status(200).json({
            status: true,
            payload: await productsServices.putProduct({_id:req.params.id}, req.body)
        })
    } catch (err) {next(err)} //next middleware
}