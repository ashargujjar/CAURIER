const express = require("express");
require("dotenv").config();

const mongooseConnection = require("./database/databse").connection;
const user = require("./routes/user");
const admin = require("./routes/admin");
const cors = require("cors");
const rider = require("./routes/rider");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/rider", rider);
app.use(user);
app.use(admin);
mongooseConnection(() => {
  console.log("server running on port 3000");
  app.listen(process.env.PORT);
});
