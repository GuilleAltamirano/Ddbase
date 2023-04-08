import { ApiError } from "../../../errors/ApiError.errors.js"

export const logoutValidators = async (session) => {
    session.destroy( err => {
        return new ApiError(`Logout Error`, 401)
    })
    return 'Logout ok!'
}