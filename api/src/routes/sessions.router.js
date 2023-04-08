import { Router } from "express"
import { sessionsControllers } from "../controllers/sessions/sessions.controllers.js"
import { logoutController } from "../controllers/sessions/logout.controllers.js"
import { loginControllers } from "../controllers/sessions/login.controllers.js"

//var
const sessionsRouter = Router()

//rest
sessionsRouter.get('/sessions', sessionsControllers)
sessionsRouter.get('/logout', logoutController)  
sessionsRouter.get('/login', loginControllers)

//export
export default sessionsRouter