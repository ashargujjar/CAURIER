const express = require("express");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const mongooseConnection = require("./database/databse").connection;
const user = require("./routes/user");
const admin = require("./routes/admin");
const cors = require("cors");
const rider = require("./routes/rider");

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP
});
app.use(limiter);
app.use(express.json());
app.use(helmet());
// Serve static files from React build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return next();
  }
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/rider", rider);
app.use(user);
app.use(admin);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.disable("x-powered-by");
mongooseConnection(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
