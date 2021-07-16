// backend/routes/api/index.js
const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const wineRouter = require("./wine");
const reviewRouter = require("./review");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/wine", wineRouter);

router.use("/review", reviewRouter);

module.exports = router;
