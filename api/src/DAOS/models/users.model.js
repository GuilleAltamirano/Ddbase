import { Schema, model } from "mongoose"

const userSchema = new Schema({
    firstname: {type: String, require: true, min: 3},
    lastname: {type: String, require: true, min: 3},
    emailAddress: { type: String, required: true},
    password: {type: String}
})

export const usersModel = model('Users', userSchema)