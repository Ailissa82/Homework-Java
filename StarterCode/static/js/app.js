// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function updateTable(inputData) {

   // Clear the old table before loading the filter results
   d3.select("tbody").html("")


 // Loop through each UFO Sighting, append rows and cells with the values of the UFOSighting 
  inputData.forEach(function (ufoData) {
      console.log(ufoData);
      var row = tbody.append("tr")
      Object.entries(ufoData).forEach(function ([key, value]) {
          console.log(key, value);
          var cell = tbody.append("td");
      cell.text(value);
      
      });
  });
  
};


// Select the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(data => data.datetime === inputValue);


    console.log(filteredData);

    // Update table with filtered ddata
    updateTable(filteredData);
});

// Build the table when the page loads
updateTable(tableData);


// // Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });
