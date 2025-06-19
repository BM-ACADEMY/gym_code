require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://bmtechx-projectgym.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json());

app.use("/", emailRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});