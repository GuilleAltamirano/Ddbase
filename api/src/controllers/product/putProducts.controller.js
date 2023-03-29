import { productsServices } from "../../DAOS/services/products.services.js"
import { putProductsValidator } from "../validators/product/putProducts.validators.js"

export const putProductsController = async (req, res, next) => {
    try {
        //var
        const pid = req.params.pid
        const update = req.body
        const validation = await putProductsValidator(update, pid)
        //ok
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)} //next middleware
}