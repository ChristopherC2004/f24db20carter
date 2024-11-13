var express = require('express');
const journal_controller = require('../controllers/journal');
var router = express.Router();

/* GET home page. */
router.get('/', journal_controller.journal_view_all_Page);


module.exports = router;
