require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/dbconfig/db");
const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "hello from server",
  });
});

app.get("/api/v1/users", (req, res) => {
  res.send({
    message: "user route",
  });
});

// connectDB()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Failed to start server:", error.message);
//   });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
