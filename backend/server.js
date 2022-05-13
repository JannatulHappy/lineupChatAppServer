const express = require("express");
const { chats } = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use("/api/user", userRoutes);
app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
