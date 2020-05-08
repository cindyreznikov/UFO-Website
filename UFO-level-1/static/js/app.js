var tableData = data;
var tbody = d3.select("tbody");
var tableBody = document.querySelector("tbody");
var button = d3.select("#filter-btn");
var inputValue = ""

// Funtion to empty and load the desired data
function displayData(dd) {

    tableBody.innerHTML = "";

    dd.forEach((ufoSightings) => {
        console.log(ufoSightings);
        var row = tbody.insert("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            row.insert("td").text(value);
        });
    });
};

button.on("click", function() {
    console.log('button was clicked')

    var inputElementDate = d3.select("#datetime");
    var inputDateValue = inputElementDate.property("value");
    var filteredData = tableData.filter(date => date.datetime === inputDateValue);

    if (filteredData > "") {
        displayData(filteredData); 
    }
    else {
        console.log('filtered data not found - please try again.')
        displayData(filteredData);
    }     
});

// Call the table load function with all the data

displayData(tableData);
