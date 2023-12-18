import dotenv from "dotenv"
import connectDb from './db/connectDb.js'
import app from "./app.js"

dotenv.config({
    path: "./env"
})

connectDb()
    .then(() => {8
        app.on("error", (err) => {
            console.log("error", err);
            throw err
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log('port is listening on 8000')

        })
    })
    .catch((err) => {
        console.log("Mango db connection failed", err);
    })