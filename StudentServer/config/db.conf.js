const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/usersDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "usersDb"
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

module.exports = connectDB;
