const express = require("express");
const cors = require("cors");
const getBasePath = require("./middleware/getBasePath");
const userRouter = require("./routes/users");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.get("/", getBasePath, (req, res) => {
  res.render("index", { title: "test", page: req.basePath });
});

app.use("/home/users", userRouter);

module.exports = app;
