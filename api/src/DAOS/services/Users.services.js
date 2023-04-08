import { isValidObjectId } from "mongoose"
import { usersModel } from "../models/users.models.js"

class UserServices {
    constructor(users){
        this.users = users
    }

    async getUsers (filter) {
        //filter?
        if (filter) {return this.users.find(filter)}
        //no filter
        return this.users.find()
    }

    async getUserFindOne (filter) {
        return this.users.findOne(filter)
    }

    async getUserById (id) {
        //is valid?
        if (!isValidObjectId(id)){return undefined}
        //ok
        return this.users.findById(id)
    }

    async addUser (user) {
        return this.users.create(user)
    }

    async putUser (id, update) {
        return this.users.updateOne(id, update)
    }

    async deleteUser (id) {
        return this.users.deleteOne(id)
    }

}

//export 
export const usersServices = new UserServices(usersModel)
