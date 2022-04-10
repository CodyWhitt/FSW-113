// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    queryType = document.getElementById("queryType")
    queryType = queryType.value
    itemID = document.getElementById("itemID")
    itemID = itemID.value
    getFromSWAPI()
}

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

const updateInfo = responseJSON => {

    console.log(responseJSON)

    let keys = Object.keys(responseJSON)

    console.log(keys)

    dataLabel1 = document.getElementById("dataLabel1")
    dataLabel1.innerHTML = (`${keys[0].replace('_', ' ')}`)
    dataValue1 = document.getElementById("dataValue1")
    dataValue1.innerHTML = (`${responseJSON[keys[0]]}`)
    dataLabel1 = document.getElementById("dataLabel2")
    dataLabel1.innerHTML = (`${keys[3].replace('_', ' ')}`)
    dataValue1 = document.getElementById("dataValue2")
    dataValue1.innerHTML = (`${responseJSON[keys[3]]}`)
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
// labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.