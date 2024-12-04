var express = require('express');
const journal_controller = require('../controllers/journal');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    console.log('Please Log in');
    res.redirect("/login");
    }

/* GET home page. */
router.get('/', journal_controller.journal_view_all_Page);

/* GET detail journal page */
router.get('/detail', journal_controller.journal_view_one_Page);

/* GET create journal page */
router.get('/create',secured, journal_controller.journal_create_Page);

/* GET create update page */
router.get('/update',secured, journal_controller.journal_update_Page);

/* GET delete journal page */
router.get('/delete',secured, journal_controller.journal_delete_Page);

module.exports = router;
