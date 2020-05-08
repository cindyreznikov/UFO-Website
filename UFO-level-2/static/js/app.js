var tableData = data;
var filteredData = tableData;
var tbody = d3.select("tbody");
var tableBody = document.querySelector("tbody");
var button = d3.select("#filter-btn");
var inputDateValue = "";
var inputCityValue = "";
var inputStateValue = "";
var inputCountryValue = "";
var inputShapeValue = "";

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
    filteredData = tableData;

    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    var inputDateValue = inputElementDate.property("value").trim();
    var inputCityValue = inputElementCity.property("value").trim().toLowerCase();
    var inputStateValue = inputElementState.property("value").trim().toLowerCase();
    var inputCountryValue = inputElementCountry.property("value").trim().toLowerCase();
    var inputShapeValue = inputElementShape.property("value").trim().toLowerCase();

    if (inputDateValue > "") {
        filteredData = filteredData.filter(date => date.datetime === inputDateValue);
    } 
    if (inputCityValue > "") {
        filteredData = filteredData.filter(city => city.city === inputCityValue);
    }     
    if (inputStateValue > "") {
        filteredData = filteredData.filter(state => state.state === inputStateValue);
    }
    if (inputCountryValue > "") {
        filteredData = filteredData.filter(country => country.country === inputCountryValue);
    }
    if (inputShapeValue > "") {
        filteredData = filteredData.filter(shape => shape.shape === inputShapeValue);
    }           
    if (filteredData > "") {
        displayData(filteredData); 
    }
    else {
        console.log('filtered data not found- please try again')
        // var e = new Error('Requested data not found.  Please try again.');
        // throw e;
        displayData(filteredData);
    }     
});

displayData(tableData);