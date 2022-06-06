const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//import routes
const postRoutes = require("./routes/posts");

// middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://gihan123:gihan123@cluster0.sjz4c.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connecteed");
  })
  .catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
