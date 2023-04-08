import { postUserValidation } from "../validators/users/postUser.validation.js"

export const postUsersControllers = async (req, res, next) => {
    try {
        //var
        const newUser = req.body
        const validation = await postUserValidation(newUser)
        //return
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)}
}