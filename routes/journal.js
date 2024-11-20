var express = require('express');
const journal_controller = require('../controllers/journal');
var router = express.Router();

/* GET home page. */
router.get('/', journal_controller.journal_view_all_Page);

/* GET detail costume page */
router.get('/detail', journal_controller.journal_view_one_Page);



module.exports = router;
