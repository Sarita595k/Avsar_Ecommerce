import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"
const routes = express.Router()

// route for registring user 
routes.post("/register", registerUser)

// route for login user
routes.get("/login", loginUser)


export default routes