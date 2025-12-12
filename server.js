require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/dbconfig/db");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message: "hello from server",
  });
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error.message);
  });
