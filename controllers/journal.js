var Journal = require('../models/journal');
// List of all Journals
exports.journal_list = async function(req, res) {
    try{
        theJournals = await Journal.find();
        res.send(theJournals);
        }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// for a specific Journal.
exports.journal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Journal detail: ' + req.params.id);
};
// Handle Journal create on POST.
exports.journal_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Journal create POST');
};
// Handle Journal delete from on DELETE.
exports.journal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Journal delete DELETE ' + req.params.id);
};
// Handle Journal update form on PUT.
exports.journal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Journal update PUT' + req.params.id);
};