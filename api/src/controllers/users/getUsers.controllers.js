import { usersServices } from "../../daos/services/Users.services.js"

export const getUsersControllers = async (req, res, next) => {
    try {
        const users = await usersServices.getUsers()
        //return
        res.status(200).json({
            status: true,
            payload: users
        })
    } catch (err) {next(err)}
}