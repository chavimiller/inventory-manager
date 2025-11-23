const express = require("express");
const app = express();
const path = require("node:path");

const categoryRouter = require("./routes/categoryRouter");

const { body, validationResult } = require("express-validator");
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", categoryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
