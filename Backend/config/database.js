import mongoose from "mongoose"

// connecting db
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("db connected successfully!")
    } catch (err) {
        console.log("mongoDb error")
    }

}

export default connectToDb;