import { Router } from "express"
import { getUsersControllers } from "../controllers/users/getUsers.controllers.js"
import { postUsersControllers } from "../controllers/users/postUsers.controllers.js"
import { putUsersController } from "../controllers/users/putUsers.controllers.js"
import { deleteUserController } from "../controllers/users/deleteUsers.controllers.js"

//var
const usersRoute = Router()

//rest
usersRoute.get('/users', getUsersControllers)
usersRoute.post('/users', postUsersControllers)
usersRoute.put('/users/:uid', putUsersController)
usersRoute.delete('/users/:uid', deleteUserController)


//export
export default usersRoute