import { putUserValidation } from "../validators/users/putUser.validations.js"

export const putUsersController = async (req, res, next) => {
    try {
        //var
        const uid = req.params.uid
        const update = req.body
        const validation = await putUserValidation(update, uid)
        //return
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)}
}