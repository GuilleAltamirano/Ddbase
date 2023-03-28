import { ApiError } from "../errors/ApiError.js"

export const errHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            status: false,
            error: err.message
        })
    }

    console.log({error: err.message, stack: err.stack})
    return res.status(500).json({
        status: false,
        error: 'Internal Server Error'
    })
}