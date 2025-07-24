const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eppalapallysharath:XfFJjR1YGh3uP3HK@cluster0.oxumile.mongodb.net/";
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
