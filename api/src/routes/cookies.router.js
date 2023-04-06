import { Router } from "express"
//var
const cookiesRoute = Router()
//rest
cookiesRoute.get('/setCookie', (req, res) => {
    res.cookie('DdbaseCookie', 'myFirstCookie', { maxAge: 100000, signed: true }).send('Cookie set and signed')
})
cookiesRoute.get('/getCookies', (req, res) => {
    res.send(req.signedCookies)
})
cookiesRoute.get('/deleteCookie', (req, res) => {
    res.clearCookie('myFirstCookie').send('cookie removed')
})
//export
export default cookiesRoute