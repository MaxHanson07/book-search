// const router = require("express").Router();
// const bookRoutes = require("./books");

// // Book routes
// // router.use("/books", bookRoutes);
// router.use("/books", logIt);

// function logIt () {
//     console.log("fired")
// }

// module.exports = router;

const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;