import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./utils/db.js"

const app = express()
const PORT = process.env.PORT


app.get('/', (req, res)=> {
    res.json({message:"Hello Express"})
})

app.listen(PORT, ()=> {
    console.log(`The Server is running on port ${PORT}`)
    connectDB()
})