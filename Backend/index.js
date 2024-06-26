const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");
const authRoute = require("./Routes/auth");
const contactRoute = require("./Routes/contact");
// Database Connect
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DatabaseUrl);
    console.log("Databse is connected succesfully !");
  } catch (error) {
    console.log(error);
  }
};

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`App is running on port :${process.env.PORT}`);
});
