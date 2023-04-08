import session from "express-session"
import MongoStore from "connect-mongo"

//config
export const configSession = async (app) => {
    try {
        //var
        const uri = process.env.MONGODB_ATLAS_URI
        const secret = "L#k2]G7OzgEpTk;%ga%HoUWLL%4yShm&-tLtsKKNo(Tt3S9LVA"
        app.use(session({
            store: MongoStore.create({
                mongoUrl: uri,
                mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
                ttl: 15
            }),
            secret: secret,
            resave: false,
            saveUninitialized: false
        }))
    } catch (err) { console.error(err) }
}