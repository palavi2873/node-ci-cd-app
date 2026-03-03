const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.json({
    message: "Node CI/CD App is Running 🚀",
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});