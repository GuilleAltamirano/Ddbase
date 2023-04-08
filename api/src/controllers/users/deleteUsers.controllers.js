import { deleteUserValidation } from "../validators/users/deleteUser.validation.js"

export const deleteUserController = async (req, res, next) => {
    try {
        const uid = req.params.uid
        const validation = await deleteUserValidation(uid)
        //return
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)}
}