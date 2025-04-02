const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Database is connected successfully")
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

module.exports = connectToDB
