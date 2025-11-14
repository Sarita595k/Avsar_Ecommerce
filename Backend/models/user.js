import mongoose from "mongoose";
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Your name cann't exceed 30 characters"]
    }, email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email address"]
    }, password: {
        type: String,
        required: [true, "Please enter your password"],
        maxLength: [6, "Your password should be more than 6 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    }, role: {
        type: String,
        default: "user"
    }, createdAt: {
        type: Date.now,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

export const UserModel = mongoose.model("User", userSchema)