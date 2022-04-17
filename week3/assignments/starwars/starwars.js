// declare any necessary variables

//**You mentioned i didn't declare any variables up here in the grading assignment, but didn't deduct for it. 
//Is everything thing done correctly in this part. the only thing i think i need to declare is my querytype and itemid **

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    queryType = document.getElementById("queryType").value
    itemID = document.getElementById("itemID").value
    getFromSWAPI(queryType, itemID)
}

function getFromSWAPI(queryType, itemID) {
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

    let keys = Object.keys(responseJSON)

    document.getElementById("dataLabel1").innerHTML = `${keys[0].replace('_', ' ')}`
    document.getElementById("dataValue1").innerHTML = `${responseJSON[keys[0]]}`
    document.getElementById("dataLabel2").innerHTML = `${keys[3].replace('_', ' ')}`
    document.getElementById("dataValue2").innerHTML = `${responseJSON[keys[3]]}`
}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
// labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.