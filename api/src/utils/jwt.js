import { config } from "dotenv"
config()
import jwt from "jsonwebtoken"
import { ApiError } from "../errors/Api.error.js"

const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = async user => {
    const token = jwt.sign({user}, JWT_SECRET, {expiresIn: '2h'})
    return token
}

export const authToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {throw new ApiError('Not authorization', 401)}
        
        const token = authHeader.split(' ')[1]
        jwt.verify(token, JWT_SECRET, (err, credentials) => {
            if (err) {throw new ApiError('Authentication token invalid', 403)}
            req.user = credentials.user
            next()
        })
    } catch (err) {next(err)}
}