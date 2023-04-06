import { app } from "./src/app.js"
//var
const PORT = process.env.PORT || 8080
//run server
const httpServer = app.listen(PORT, () => {
    console.log(`Server HTTP run in PORT ${PORT}`)
})
