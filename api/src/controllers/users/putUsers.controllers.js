import { putUserValidation } from "../validators/users/putUser.validations.js"

export const putUsersController = async (req, res, next) => {
    try {
        //var
        const pid = req.params.pid
        const update = req.body
        const validation = await putUserValidation(update, pid)
        //return
        res.status(200).json({
            status: true,
            payload: validation
        })
    } catch (err) {next(err)}
}