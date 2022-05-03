// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export function convertTemp(data){
    if (data.sys.country == "US") {
        return "imperial"
    } else {
        return "metric"
    }
}