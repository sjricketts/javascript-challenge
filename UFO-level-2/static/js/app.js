// from data.js
var tableData = data;

// Select the form usig its element
var form = d3.select("form");

// Event handler function to sort by date
function runEnter(data) {
  // select the tbody element from idex.html
  var tbody = d3.select("tbody");

  // Clear the table
  tbody.html("");

  // Prevent the page from refreshing
  // d3.event.preventDefault();

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

function filterTable() {
  var filteredData = tableData;
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  runEnter(filteredData);
}
// Event Listener for Filter
d3.selectAll(".filter").on("change", updateFilter);

// Select the button using its id
var button = d3.select("#filter-btn");

// Event handler for Reset button
button.on("click", runEnter(data));