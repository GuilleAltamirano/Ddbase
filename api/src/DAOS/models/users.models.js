import mongoose from "mongoose"

const usersCollection = 'Users'

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    password: {type: String, require: true, default: '1234'},
    emailAddress: { type: String, required: true, index: true , match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { type: Number, required: true },
    job: { type: String, required: true },
    thumbnail: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' },
    permissions: {type: String, index: true},
    start: {type: Date, default: Date.now},
    update: {type: Date, default: Date.now},
    status: {type: Boolean, default: true, index: true}
})

export const usersModel = mongoose.model(usersCollection, usersSchema)