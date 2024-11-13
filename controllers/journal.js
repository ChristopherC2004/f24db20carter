var Journal = require('../models/journal');
// List of all Journals
exports.journal_list = async function(req, res) {
    console.log("listing journals");
    try{
        theJournals = await Journal.find();
        console.log(theJournals);
        res.send(theJournals);
        }
    catch(err){
        console.log("error with listing")
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};
// VIEWS
// Handle a show all view
exports.journal_view_all_Page = async function(req, res) {
    console.log("journal views generating");
    try {
        const theJournals = await Journal.find();
        console.log( theJournals);  // Should log fetched journals to console
        res.render('journal', { title: 'Journals Search Results', results: theJournals });
        console.log("rendered journals");
    } catch (err) {
        console.error("Error in journal_view_all_Page:", err);
        res.status(500).send(`Error: ${err.message}`);
    }
};

// for a specific Journal.
exports.journal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Journal detail: ' + req.params.id);
};
// Handle Journal create on POST.
exports.journal_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Journal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"coverMaterial":"Leather", "cost":12.99, "pages":240}
    document.coverMaterial = req.body.coverMaterial;
    document.cost = req.body.cost;
    document.pages = req.body.pages;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Journal delete from on DELETE.
exports.journal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Journal delete DELETE ' + req.params.id);
};
// Handle Journal update form on PUT.
exports.journal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Journal update PUT' + req.params.id);
};
