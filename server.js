const mongoose = require('mongoose')
const express = require("express");
const path = require("path");
const router = require('./routes/api-routes')
const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Books", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(router)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
