import { User } from "../models/user.js";
import { ErrorHandler } from "../utils/errorHandler.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { sendToken } from "../utils/jwtTokens.js";

// register user /api/user/register
export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        // encrypting the password 
        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name, email, password: hashPassword, avatar: {
                public_id: "785785",
                url: "uiwiww.jpg"
            }
        })

        // return json web token 
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
        sendToken(user, 200, res)
        // res.status(201).json({
        //     success: true,
        //     user,
        //     token
        // })
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
}


// login user method /api/user/login

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    // check if email and password 
    if (!email || !password) {
        return next(new ErrorHandler("please enter email and password", 400))
    }

    // finding user in db
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandler("Invalid email", 401))
    }

    // checks if password is correct or not 
    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid password", 401))
    }

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
    // res.status(200).json({
    //     success: true,
    //     user,
    //     token
    // })

    sendToken(user, 200, res)
}