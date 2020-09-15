// from data.js
var tableData = data;

// Add Table Data to html Page

// select the tbody element from idex.html
var tbody = d3.select("tbody");

// appends tbody with table rows and table data using data arrays from data.js
tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Event Listeners for Date Filter

// Select the button using its id
var button = d3.select("#filter-btn");

// Select the form usig its id
// QUESTION: is this the corect id???
var form = d3.select("#form-group");

// Create event handlers for both clicking the button or hitting enter on the keyboard
button.on("click", runEnter);
form.on("submit", runEnter);

// Event handler function to sort by date
function runEnter() {
  // Clear the table
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by date
  var filteredData = tableData.filter((data) => data.datetime === inputValue);

  // Table of filtered data appears after event
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  console.log(filteredData);
}
