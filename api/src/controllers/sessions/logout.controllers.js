import { logoutValidators } from "../validators/sessions/logout.validators.js"

export const logoutController = async (req, res, next) => {
    try {
        const session = req.session
        const validation = await logoutValidators(session)
        //return
        res.status(200).json({
            status: true,
            payloads: validation
        })
    } catch (err) {next(err)}
}