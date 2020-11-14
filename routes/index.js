const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/API.js");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client1/public/index.html"));
//   console.log(__dirname)
// });

// All other routes respond with the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
   });

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });


module.exports = router;