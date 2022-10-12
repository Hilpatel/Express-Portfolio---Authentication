// Name: Hil Patel
// id: 301215094
// fileName: error.ejs
// Date: October 08, 2022



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
