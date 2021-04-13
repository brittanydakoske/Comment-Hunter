const express = require('express');
const controllers = require("../controllers");
const router = express.Router();

/* GET test data */
router.get('/1h', controllers.get1h );
router.get('/1d', controllers.get1d );
router.get('/1w', controllers.get1w );

module.exports = router;

