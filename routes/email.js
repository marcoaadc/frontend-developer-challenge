var express = require('express');
var router = express.Router();
const emailController = require("../controllers/emailController")

router.get('/email', emailController.email);

module.exports = router;
