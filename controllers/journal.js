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
        if(req.body.size) toUpdate.pages = req.body.pages;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};
