import { app } from "./src/app.js"

const PORT = process.env.PORT || 8080

const httpServer = app.listen(PORT, () => {
    console.info(`Server HTTP run in PORT ${PORT}`)
})

