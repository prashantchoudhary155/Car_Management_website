const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://choudharyprashant155:SupdqLi3VtN5FAdx@cluster0.2fq7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;
  connection.on("connected", () => {
    console.log("DB connection successfull");
  });
  connection.on("error", () => {
    console.log("DB connection Error");
  });
}

connectDB();
module.exports = mongoose;
