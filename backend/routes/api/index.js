// backend/routes/api/index.js
const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const wineRouter = require("./wine");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/wine", wineRouter);

module.exports = router;
