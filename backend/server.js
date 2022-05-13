const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("server created successfully");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id)
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});
app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
