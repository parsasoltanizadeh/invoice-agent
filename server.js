const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("AI Invoice Agent is running 🚀");
});

// Test invoice route
app.get("/test-invoice", (req, res) => {
  res.send("Test invoice endpoint working ✅");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
