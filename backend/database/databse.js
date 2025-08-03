require("dotenv").config();
const mongose = require("mongoose");

const connection = async (cb) => {
  try {
    mongose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
    cb();
  } catch (error) {
    console.log(error);
  }
};
exports.connection = connection;
