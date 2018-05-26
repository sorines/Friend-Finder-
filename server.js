// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const EXPRESS = require("express");
const BODYPARSER = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const APP = EXPRESS();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(APP);
require("./routing/htmlRoutes")(APP);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

APP.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
