import { userServices } from "../daos/services/Users.services.js"
import { ApiError } from "../errors/Api.error.js"
import { createHash, isValidPassword } from "../utils/bcrypt.js"

export const loginController = async (req, emailAddress, password, done) => {
    try {
        if (emailAddress === process.env.EMAIL && password === process.env.PASSWORD) {
            const dataUser = {
                name: 'ADMIN',
                emailAddress,
                role: 'admin'
            }
            return done(null, dataUser)
        }
        const existUser = await userServices.getUsers({emailAddress})
        if (existUser.length === 0) return done(new ApiError(`User or password invalid`, 400), null)
        if (!isValidPassword(existUser[0], password)) return done(new ApiError(`User or password invalid`, 400), null)

        const dataUser = {
            name: `${existUser[0].firstname} ${existUser[0].lastname}`,
            emailAddress,
            role: 'user'
        }

        return done(null, dataUser)
    } catch (err) {done(err, null)}
}

export const registerController = async (req, emailAddress, password, done) => {
    try {
        if (emailAddress === process.env.EMAIL) return done(new ApiError('user existing', 400), null)
        
        let {firstname, lastname} = req.body
        const existUser = await userServices.getUsers({emailAddress})
        
        if (existUser.length > 0) return done(new ApiError('user existing', 400), null)

        const addUser = {
            firstname, lastname, emailAddress,
            password: createHash(password)
        }
        const newUser = await userServices.postUser(addUser)
        const dataUser = {
            id: newUser._id, 
            name: `${newUser.firstname} ${newUser.lastname}`,
            emailAddress
        }
        
        done(null, dataUser)
    } catch (err) {done(err, null)}
}

export const githubController = async (accessToken, refreshToken, profile, done) => {
    try {
        const existUser = await userServices.getUsers({emailAddress: profile.emails[0].value})
        if (existUser.length === 0) {
            const parts = profile.displayName.split('Alt')
            const addUser = {
                firstname: parts[0],
                lastname: 'Alt' + parts[1],
                emailAddress: profile.emails[0].value
            }
            const newUser = await userServices.postUser(addUser)
            const dataUser = {
                id: newUser.id,
                name: profile.displayName,
                emailAddress: newUser.emailAddress,
                role: 'user'
            }

            return done(null, dataUser)
        }

        const dataUser ={
            id: existUser[0]._id,
            name: `${existUser[0].firstname} ${existUser[0].lastname}`,
            emailAddress: existUser[0].emailAddress,
            role: 'user'
        }

        done(null, dataUser)
    } catch (err) {done(err, null)}
}

export const logoutController = async (req, res, next) => {
    try {
        //var
        req.session.destroy( err => {
            if (!err) {
                return res.status(307).redirect('/login')
            }
            res.status(400).json({
                status: false,
                payload: 'Logout Error'
            })
        })
    } catch (err) {next(err)}
}