var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var journal_controller = require('../controllers/journal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// JOURNAL ROUTES ///
// POST request for creating a Journal.
router.post('/journals', journal_controller.journal_create_post);
// DELETE request to delete Journal.
router.delete('/journals/:id', journal_controller.journal_delete);
// PUT request to update Journal.
router.put('/journals/:id', journal_controller.journal_update_put);
// GET request for one Journal.
router.get('/journals/:id', journal_controller.journal_detail);
// GET request for list of all Journal items.
router.get('/journals', journal_controller.journal_list);


module.exports = router;

