import mongoose from "mongoose"
//mongo Atlas
export const mongoConnect = async () => {
    try {
        const uri = process.env.MONGODB_ATLAS_URI
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDb connected... 🔋')
    } catch (err) {console.error(err);}
}