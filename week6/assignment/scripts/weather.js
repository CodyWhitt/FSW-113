// import the convertTemp.js and getDaylight.js scripts with their default export
// (DONE)
import {getDaylight} from "./getDayight.js"
import {convertTemp, convertTempLetter} from "./convertTemp.js"

// declare any variables needed
const goBttn = document.getElementById('goBttn')

// (DONE) create an event listener for the click of the goBttn that calls a function to fetch the weather data
goBttn.addEventListener('click', displayWeather)

// (DONE) create a function that calls the function that queries the api 
//   and then creates promises that will call a function to write the weather data to the HTML page        

function displayWeather (data) {
    getWeather()
    .then((data) => {
        dataWrite(data)
    })
    .catch ((error) => console.warn(error))
} 

// (DONE) use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

async function getWeather(){
    try {
        let allData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('city').value}&appid=92b52cf461021048a3e2b7ab6b8bafb5`)
        let allDataJSON = await allData.json()
        let unit = convertTemp(allDataJSON)
        allData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('city').value}&appid=92b52cf461021048a3e2b7ab6b8bafb5&units=${unit}`)
        allDataJSON = await allData.json()
        return (allDataJSON)
    } catch(error) {
        console.log(error)
    }
}

// create a function that writes the temperature (using local units), humidity, and conditions
//   this function should also change the background color of the weather app to blue during the daylight
//   hours at the specified city
// (DONE)

function dataWrite(data){
    let tempLetter = convertTempLetter(data)
    document.getElementById('tempData').innerHTML = data.main.temp + ` ${tempLetter}`
    document.getElementById('humidData').innerHTML = data.main.humidity + "%"
    document.getElementById('conditionsData').innerHTML = data.weather[0].main
    getDaylight(data)
}