const mongose = require("mongoose");

const connection = async (cb) => {
  try {
    mongose.connect(
      "mongodb://127.0.0.1:27017/tcs?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("✅ MongoDB connected");
    cb();
  } catch (error) {
    console.log(error);
  }
};
exports.connection = connection;
