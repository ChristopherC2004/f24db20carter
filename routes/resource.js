var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var journal_controller = require('../controllers/journal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/journals', journal_controller.journal_create_post);
// DELETE request to delete Costume.
router.delete('/journals/:id', journal_controller.journal_delete);
// PUT request to update Costume.
router.put('/journals/:id', journal_controller.journal_update_put);
// GET request for one Costume.
router.get('/journals/:id', journal_controller.journal_detail);
// GET request for list of all Costume items.
router.get('/journals', journal_controller.journal_list);
module.exports = router;
