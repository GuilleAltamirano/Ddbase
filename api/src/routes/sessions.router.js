import { Router } from "express"

//var
const sessionsRouter = Router()

//rest
sessionsRouter.get('/session', (req, res) => {
    if (!req.session.counter && req.session.counter != 0) {
        req.session.counter = 0
        return res.send(`Bienvenido ${req.sessionID}`)
    }
    req.session.counter += 1
    res.send(`Se ha visitado el sitio ${req.session.counter} veces`);
})
sessionsRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send({ status: 'logout Error', body: err });
        } 
        res.send('Logout ok!')
    })
})  
sessionsRouter.get('/login', (req, res) => {
    const { username, password } = req.body
    if (username !== 'Guille' && password !== 'Carbonero'){return res.send('Error Login')}
    req.session.user = username
    req.session.admin = true
    res.send('Login success')
})

//export
export default sessionsRouter