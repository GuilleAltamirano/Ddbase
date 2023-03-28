import mongoose from "mongoose"

//mongo Atlas
export const mongoConnect = async (req, res, next) => {
    try {
        mongoose.connect('mongodb+srv://lguille2000:VZ3jPYvVndnLkfpA@cluster0.hcxd8la.mongodb.net/?retryWrites=true&w=majority')
        console.log('MongoDb connected... 🔋')
    } catch (err) {next(err)}
}