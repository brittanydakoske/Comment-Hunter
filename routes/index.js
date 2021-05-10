const express = require('express');
const controllers = require("../controllers");
const router = express.Router();

/* GET test data */
router.get( '/1h', controllers.get1h );
router.get( '/12h', controllers.get12h );
router.get( '/24h', controllers.get24h );

module.exports = router;

