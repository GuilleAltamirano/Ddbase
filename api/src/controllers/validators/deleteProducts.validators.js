import { ApiError } from "../../errors/ApiError.js";


export const deleteProductsValidators = (pid, products) => {
    //product exist?
    const prod = products.filter(product => product.id == pid);
    if (prod.length === 0) {throw new ApiError(`product id: ${pid} does't exist`, 406)}
    //ok
}