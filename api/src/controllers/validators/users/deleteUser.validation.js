import { usersServices } from "../../../daos/services/Users.services.js"
import { ApiError } from "../../../errors/ApiError.errors.js"

export const deleteUserValidation = async (uid) => {
    //user exist?
    const existUser = await usersServices.getUserById(uid)
    if (!existUser){throw new ApiError(`User does't exist`, 406)}
    //delete
    const userDelete = await usersServices.deleteUser({"_id" : uid})
    //return
    return userDelete
}