const express = require("express");
const getBasePath = require("../middleware/getBasePath");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("User list");
  res.status(200).json({ users: [{ id: 1, name: "bog" }] });
});

router.get("/new", getBasePath, (req, res) => {
  res.render("users/new", {
    firstName: "post",
    basePath: req.basePath + "/home/users",
  });
});

router
  .route("/:id")
  .get(getBasePath, (req, res) => {
    const id = req.params.id;
    console.log("GET user" + id);
    res.status(200).json({ user: { id } });
  })
  .put(getBasePath, (req, res) => {
    const id = req.params.id;
    console.log("Edit user" + id);
    res.status(200).json({ user: { id } });
  })
  .delete(getBasePath, (req, res) => {
    const id = req.params.id;
    console.log("Delete user" + id);
    res.status(200).json({ user: { id } });
  });

router.post("/", getBasePath, (req, res) => {
  console.log("Create user " + req.body.firstName);
  res.status(200).json({ users: [{ id: 1, name: req.body.firstName }] });
});

module.exports = router;
