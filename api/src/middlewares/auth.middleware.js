export const authMiddleware = (req, res, next) => {
    const isLoggedIn = req.session.login !== undefined
    const isLoggingIn = req.path === '/login' || req.path === '/api/sessions/login'
    const isRegistering = req.path === '/register' || req.path === '/api/sessions/register'
    const isGithub = req.path === '/api/sessions/github2' || req.path === '/api/sessions/github'

    if ((isLoggingIn || isRegistering || isGithub) && isLoggedIn) return res.redirect('/') 
    
    if (!isLoggedIn && !(isLoggingIn || isRegistering || isGithub)) return res.redirect('/login')

    next()
}