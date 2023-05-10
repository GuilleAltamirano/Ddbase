import { Router } from "express"
import { logoutController } from '../controllers/sessions.controller.js'
import passport from "passport"
import { generateToken } from "../utils/jwt.js"

const router = new Router()

// router.get('/github', passport.authenticate('github', {failureRedirect: '/login'}), async (req, res, next) => {
//     req.session.login = true
//     res.redirect(302, '/')
// })

router.post('/login', async (req, res, next) => {
    try {
        const { emailAddress, password } = req.body
        let token = await generateToken({emailAddress, password})
        res.cookie('cookieToken', token, {
            maxAge: 1800*1000,
            httpOnly: true, signed: true
        }).json({
            status: 'success',
            payload: token
        })
    } catch (err) {next(err)}
})

router.get('/current', passport.authenticate('jwt'), (req, res) => {
    res.send(req.user)
})
// router.post('/register', passport.authenticate('register'), async (req, res, next) => {
//     try {
//         res.redirect(302, '/login')
//     } catch (err) {next(err)}
// })
// router.get('/github2', passport.authenticate('github'))
// router.post('/logout', logoutController)

export default router