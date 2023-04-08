import { loginValidators } from "../validators/sessions/login.validators.js"

export const loginControllers = async (req, res, next) => {
    try {
        //var
        const session = req.session
        const user = req.body
        const verification = await loginValidators(session, user)
        //return
        res.status(200).json({
            status: true,
            payloads: verification
        })
    } catch (err) {next(err)}
}