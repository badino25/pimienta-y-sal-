var express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController.js");
/* GET home page. */
router.get('/', indexController.home);
router.get('/detalle/:id', indexController.detalle);

module.exports = router;
 