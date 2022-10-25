const express = require("express");
const colors = require("colors");
const {errorHandler} = require('./controller/errorHandler'); 
const connectDB = require('./config/db')
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;

//Connect to database
connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Support Desk API" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
