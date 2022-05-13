const express = require("express");

const port = process.env.PORT || 5000;

const app = express()
app.get("/",(req,res)=>{
    res.send("server created")
})
app.listen(port, () => {
    console.log(`Listening to port : ${port}`);
  });