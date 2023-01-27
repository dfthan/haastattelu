const { MONGODB_URI } = require("../lib/config")
const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

function connectDB() {
    try {
        mongoose.connect(MONGODB_URI)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;
