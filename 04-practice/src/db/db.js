const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect("mongodb+srv://Backend:<db_password>@cluster_name.4uwpshu.mongodb.net/<input_name>")

    console.log("Connected to DB")
}

module.exports = connectDB