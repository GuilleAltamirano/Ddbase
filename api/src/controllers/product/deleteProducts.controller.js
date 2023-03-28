import { productsServices } from "../../DAOS/services/products.services.js"
import { deleteProductsValidators } from "../validators/product/deleteProducts.validators.js"

export const deleteProductsController = async (req, res, next) => {
    try {
        await deleteProductsValidators(await productsServices.getProductById(req.params.id))
        res.status(200).json({
            status: true,
            payload: await productsServices.deleteProduct({_id: req.params.id})
        })
    } catch (err) {next(err)}
}
//