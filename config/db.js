const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.mongodDB_URI;
// const uri = "mongodb://localhost:27017/"
async function connectDB() {
  try {
    await mongoose.connect(uri, {
      dbName: "simple_todo_db",
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDB };
