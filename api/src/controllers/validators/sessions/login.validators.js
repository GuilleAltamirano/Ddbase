import { usersServices } from "../../../daos/services/Users.services.js"
import { ApiError } from "../../../errors/ApiError.errors.js"

export const loginValidators = async (session, user) => {
    //var
    const { email, password } = user
    const existUser = await usersServices.getUserFindOne({"emailAddress" : email})
    //exist
    if (!existUser) {throw new ApiError(`User doesn't exist`, 401)}
    //allowed
    if (!existUser.status){throw new ApiError(`User ${existUser} is not allowed`, 403)}
    //password correct?
    if (existUser.password !== password) {throw new ApiError(`Password ${password} doesn't valid`, 403)}
    //job?
    session.user = email
    session.job = existUser.job
    return (`Welcome ${email}`)
}