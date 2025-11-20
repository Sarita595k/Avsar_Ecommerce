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

// forgot password /api/user/password/forgot
export const forgotPassword = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorHandler("User not found fot this email", 404))
    }

    // get reste token
    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })

    // create reset passsword url 
    const resetUrl = `${req.protocol}://${req.get('host')}/api/password/reset/${resetToken}`
    const message = `Your password reset is as follow:\n\n ${resetUrl}\n\n if you have not requested this , then ignore it.`
    try {
        await sendEmail({
            email: user.email,
            subject: `Avsar Ecommerce password recovery`,
            message
        })

        res.status(200).json({
            success: true,
            message: `email sent to ${user.email}`
        })
    } catch (error) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHandler(error.message, 500))
    }
}

// logout user /api/user/logout
export const logoutUser = async (req, res, next) => {
    res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
    res.status(200).json({
        success: true,
        message: "logged out successfully"
    })
}