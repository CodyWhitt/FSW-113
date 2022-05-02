// import the convertTemp.js and getDaylight.js scripts with their default export
// import getDaylight from "./getDayight.js"
// import convertTemp from "./convertTemp.js"

// declare any variables needed
goBttn = document.getElementById('goBttn')
console.log(goBttn)

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
goBttn.addEventListener('click', getWeather())

// create a function that calls the function that queries the api 
// function queryAPI()

// and then creates promises that will call a function to write the weather data to the HTML page        
// function promiseCall()

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

const getWeather = async () => {
    try {
        const allData = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={9db3a7b5fba0e174f3f5a3e478df984a}")
        console.log(allData.data)
    } catch(error) {
        console.log(error)
    }
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

// function dataWrite()