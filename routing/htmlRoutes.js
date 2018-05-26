// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const PATH = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(APP) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  APP.get("/friends", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  APP.get("*", function(req, res) {
    res.sendFile(PATH.join(__dirname, "../public/home.html"));
  });
};
