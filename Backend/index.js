import express from "express"
import path from "path"
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve('config/config.env') })
const app = express()

// import error middleware 
import { handleError } from "./middlewares/errors.js"

// import db 
import connectToDb from "./config/database.js"


app.use(express.json())
//import all routes 
import router from "./routes/product.js"

// route for products 
app.use("/api/", router)

// middleware to use handle errors 
app.use(handleError)
app.listen(process.env.PORT, () => {
    // connecting to db
    connectToDb()
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})