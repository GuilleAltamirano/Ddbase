import { sessionsValidators } from "../validators/sessions/sessions.validators.js"

export const sessionsControllers = async (req, res, next) => {
    try {
        //var
        const session = req.session
        const validation = await sessionsValidators(session)
        //return
        res.status(200).json({
            status: true,
            payloads: validation
        })
    } catch (err) {next(err)}
}
