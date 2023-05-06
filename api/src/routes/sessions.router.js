import { Router } from "express"
import { logoutController } from '../controllers/sessions.controller.js'
import passport from "passport"

const router = new Router()

router.get('/github', passport.authenticate('github', {failureRedirect: '/login'}), async (req, res, next) => {
    req.session.login = true
    res.redirect(302, '/')
})

router.post('/login', passport.authenticate('login'), async (req, res, next) => {
    try {
        req.session.login = true
        res.redirect(302, '/')
    } catch (err) {next(err)}
})
router.post('/register', passport.authenticate('register'), async (req, res, next) => {
    try {
        res.redirect(302, '/login')
    } catch (err) {next(err)}
})
router.get('/github2', passport.authenticate('github'))
router.post('/logout', logoutController)

export default router