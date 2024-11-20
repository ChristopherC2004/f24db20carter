var express = require('express');
const journal_controller = require('../controllers/journal');
var router = express.Router();

/* GET home page. */
router.get('/', journal_controller.journal_view_all_Page);

/* GET detail journal page */
router.get('/detail', journal_controller.journal_view_one_Page);

/* GET create journal page */
router.get('/create', journal_controller.journal_create_Page);


module.exports = router;
