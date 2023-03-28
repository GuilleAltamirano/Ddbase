import { ApiError } from "../../errors/ApiError.js"

export const putProductsValidator = (obj, pid,products) => {   
    //validate values
    for (const i in obj) {
        //keys correct?
        if (i !== 'title' && i !== 'description' && i !== 'code' && i !== 'price' && i !== 'price' && i !== 'stock' && i !== 'category' && i !== 'thumbnail'){throw new ApiError(`Key ${i} not valid`, 400)}
        //title
        if ((i === 'title') && (typeof obj[i] !== 'string' || obj[i].length < 4)){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //description
        if ((i === 'description') && (typeof obj[i] !== 'string' || obj[i].length < 10)){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //code
        if ((i === 'code') && (typeof obj[i] !== 'string' || obj[i].length < 6)){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //price
        if ((i === 'price') && (typeof obj[i] !== 'number' || obj[i] <= 0)){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //stock
        if ((i === 'stock') && (typeof obj[i] !== 'number')){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //category
        if ((i === 'category') && (typeof obj[i] !== 'string')){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
        //thumbnail
        if ((i === 'thumbnail') && (typeof obj[i] !== 'object')){throw new ApiError(`${i} ${obj[i]} not valid`, 400)}
    }
    //product exist?
    const prod = products.filter(product => product.id == pid);
    console.log(prod.length)
    if (prod.length === 0) {throw new ApiError(`product id: ${pid} does't exist`, 404)}
    //return
}