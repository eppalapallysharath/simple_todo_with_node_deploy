const express = require("express");
const app = express();
const todoRouter = require("./routes/todoRoute.js");
const { connectDB } = require("./config/db.js");
const cors = require("cors");

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded());

// cors middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// apis
app.get("/", (req, res) => {
  res.status(200).send("hi im good");
});
app.use("/api/todos/", todoRouter);

const port = 3000;
app.listen(port, () => {
  console.log("server started " + port);
});
