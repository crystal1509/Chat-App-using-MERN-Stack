const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get();
app.listen(5000, console.log("Server started on PORT 5000"));
