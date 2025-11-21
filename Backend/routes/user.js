import express from "express"
import { forgotPassword, loginUser, logoutUser, registerUser, resetPassword } from "../controllers/userController.js"
const routes = express.Router()

// route for registring user 
routes.post("/register", registerUser)

// route for login user
routes.get("/login", loginUser)

// for forgot password 
routes.post("/password/forgot", forgotPassword)

// for reset password 
routes.put('/password/reset/:token', resetPassword)

// route for logout
routes.get("/logout", logoutUser)

export default routes