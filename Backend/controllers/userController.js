import { User } from "../models/user.js";
import { ErrorHandler } from "../utils/errorHandler.js";

// register user /api/user/register
export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const user = await User.create({
            name, email, password, avatar: {
                public_id: "785785",
                url: "uiwiww.jpg"
            }
        })

        res.status(201).json({
            success: true,
            user
        })
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
}