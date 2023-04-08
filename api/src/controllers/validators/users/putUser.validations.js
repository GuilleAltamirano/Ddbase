import { ApiError } from "../../../errors/ApiError.errors.js"
import { usersServices } from "../../../daos/services/Users.services.js"

export const putUserValidation = async (updated, uid) => {
    //validate values
    for (const i in updated) {
        //keys correct?
        if (i !== 'name' && i !== 'surname' && i !== 'emailAddress' && i !== 'phone' && i !== 'job' && i !== 'permissions' && i !== 'thumbnail'){throw new ApiError(`Key ${i} not valid`, 400)}
        //title
        if ((i === 'name') && (typeof updated[i] !== 'string' || updated[i].length < 4)){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //description
        if ((i === 'surname') && (typeof updated[i] !== 'string' || updated[i].length < 3)){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //code
        if ((i === 'emailAddress') && (typeof updated[i] !== 'string' || updated[i].length < 6)){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //price
        if ((i === 'phone') && (typeof updated[i] !== 'number' || updated[i] <= 0)){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //stock
        if ((i === 'job') && (typeof updated[i] !== 'string')){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //category
        if ((i === 'permissions') && (typeof updated[i] !== 'string')){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
        //thumbnail
        if ((i === 'thumbnail') && (typeof updated[i] !== 'object')){throw new ApiError(`${i} ${updated[i]} not valid`, 400)}
    }
    //user exist?
    const existUser = await usersServices.getUserById(uid)
    if (!existUser){throw new ApiError(`User does't exist`, 406)}
    //update
    const userUpdated = await usersServices.putUser({"_id" : uid}, updated)
    //return
    return userUpdated
}