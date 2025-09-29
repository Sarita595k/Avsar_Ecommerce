import { ErrorHandler } from "../utils/errorHandler.js";
export const handleError = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    // err.message = err.message || "internal server error"

    // to manage all the errors 
    if (process.env.NODE_ENV === "development") {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    if (process.env.NODE_ENV === "production") {
        let error = { ...err }

        error.message = err.message
        res.status(error.statusCode).json({
            success: false,
            message: err.message || "internal server error"
        })
    }
}