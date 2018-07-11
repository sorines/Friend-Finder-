
const FRIENDS = require("../app/data/friends");

// ROUTING


module.exports = function(APP) {
  // API GET Requests
 

  APP.get("/api/friends", function(req, res) {
    res.json(FRIENDS);
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  

  APP.post("/api/friends", function(req, res) {
    
    // req.body is available since we're using the body-parser middleware
    if (FRIENDS.length < 5) {
      FRIENDS.push(req.body);
      res.json(true);
    }
    else {
     "NO";
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  APP.post("/api/clear", function() {
    // Empty out the arrays of data
    FRIENDS = [];
  

    console.log(FRIENDS);
  });
};

// // //getting that api query to function
//     function apiQuery() {

//         $.ajax({ url: currentURL + "/api/friends", method: "GET" })
//           .then(function(FRIENDS) {
  
//           // Here we are logging the URL so we have access to it for troubleshooting
//             console.log("------------------------------------");
//             console.log("URL: " + currentURL + "/api/friends");
//             console.log("------------------------------------");
  
//             // Here we then log the NYTData to console, where it will show up as an object.
//             console.log(FRIENDS);
//             console.log("------------------------------------");
  
//             // Loop through and display each of the customers
//             for (var i = 0; i < FRIENDS.length; i++) {
  
//             // Create the HTML Well (Section) and Add the table content for each reserved table
//               var friendsSection = $("<div>");
//               friendsSection.addClass("well");
//               friendsSection.attr("id", "friends-" + i + 1);
//               $("#friends").append(friendsSection);
  
//               var friendsNumber = i + 1;
  
  
//               // Then display the remaining fields in the HTML (Section Name, Date, URL)
//               $("#friends-" + i + 1).append("<h2><span class='label label-primary'>" + friendsNumber + "</span> | " + friendsData[i].friendsDataID + "</h2>");
//             }
//           });
//         }    
  
      
  
//       // This function resets all of the data in our tables. This is intended to let you restart a demo.
//     //   function clearFriends() {
  
//     //     var currentURL = window.location.origin;
//     //     $.ajax({ url: currentURL + "/api/clear", method: "POST" });
  
//     //   }
  
//     //   $("#clear").on("click", function() {
//     //     alert("Clearing...");
//     //     clearFriends();
  
//     //     // Refresh the page after data is cleared
//     //     location.reload();
  
//     //   });
  
  
//     //   // Run Queries!
//     //   // ==========================================
//      apiQuery();
   
