// from data.js
var tableData = data;

// Select the form usig its element
var form = d3.select("form");

// Display Main Table
function runEnter(data) {
  // select the tbody element from idex.html
  var tbody = d3.select("tbody");

  // Clear the table
  tbody.html("");

  // Full table data
  data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
runEnter(tableData);

// Function to set up filters
var filters = {};
function updateFilter() {
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  filterTable();
}

// Run filters based on input and dispaly filtered table
function filterTable() {
  var filteredData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  runEnter(filteredData);
}
// Event Listener for Filters
d3.selectAll(".filter").on("change", updateFilter);

// RESET BUTTON

// Select the button using its id
var button = d3.select("#filter-btn");

// select the tbody element from idex.html
var tbody2 = d3.select("tbody");

// Event handler for Reset button
button.on("click", function() {
  tbody2.html("");
  runEnter(tableData);
});