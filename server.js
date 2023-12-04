const express = require("express");
const app = express();
const cors = require("cors");

const port = 3010;

// Serve static files from the public directory
app.use(express.static("public"));
app.use(cors());

// Endpoint to send classes data
app.get("/classes", (req, res) => {
  res.json(require("./public/data/classes.json"));
});

// Endpoint to send names data
app.get("/names", (req, res) => {
  res.json(require("./public/data/names.json"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
