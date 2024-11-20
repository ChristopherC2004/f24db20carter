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
exports.journal_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Journal.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// Handle Journal delete on DELETE.
exports.journal_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Journal.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
    
// Handle Journal update form on PUT.
exports.journal_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Journal.findById( req.params.id);
        // Do updates of properties
        if(req.body.coverMaterial)
            toUpdate.coverMaterial = req.body.coverMaterial;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.pages) toUpdate.pages = req.body.pages;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

// Handle a show one view with id specified by query
exports.journal_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Journal.findById( req.query.id)
res.render('journaldetail',
{ title: 'Jounal Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a journal.
// No body, no in path parameter, no query.
// Does not need to be async
exports.journal_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('journalcreate', { title: 'Journal Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};
    
// Handle building the view for updating a journal.
// query provides the id
exports.journal_update_Page = async function(req, res) {
    console.log("update view for item "+ req.query.id)
    try{
    let result = await Journal.findById(req.query.id)
    res.render('journalupdate', { title: 'Journal Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.journal_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await Journal.findById(req.query.id)
res.render('journaldelete', { title: 'Journal Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

    