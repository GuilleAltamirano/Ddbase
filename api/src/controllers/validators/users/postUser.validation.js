import { usersServices } from "../../../daos/services/Users.services.js"
import { ApiError } from "../../../errors/ApiError.errors.js"

export const postUserValidation = async (data) => {
    //destructuring object
    const {name, surname, emailAddress, phone, job, permissions, thumbnail} = data
    const emailRegex = /\S+@\S+\.\S+/
    //Type of key's
    if ((typeof name !== 'string') || (!name) || (name.length < 4)) {throw new ApiError(`Name ${name} type is not valid`, 400)}
    if ((typeof surname !== 'string') || (!surname) || (surname.length < 3)) {throw new ApiError(`Surname ${surname} type is not valid`)}
    if (!emailRegex.test(emailAddress)) {throw new ApiError(`Email ${emailAddress} type is not valid`, 400)}
    if ((typeof phone !== 'number') || (!phone)) {throw new ApiError(`Phone ${phone} type is not valid`, 400)}
    if ((typeof job !== 'string') || (!job)) {throw new ApiError(`Job ${job} type is not valid`, 400)}
    if ((typeof permissions !== 'string') || (!permissions)) {throw new ApiError(`Permissions ${permissions} type is not valid`, 400)}
    //Exist user
    const user = await usersServices.getUsers({$and: [{name}, {surname}]})
    if (user.length !== 0) {throw new ApiError(`The user ${name} ${surname} existing`, 406)}
    //return
    const newProduct = await usersServices.addUser(data)
    return newProduct
}