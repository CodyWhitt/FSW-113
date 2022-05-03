// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.
//(DONE)
export function getDaylight(data){
    if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset){
        document.querySelectorAll('.weatherWrapper')[0].style.backgroundColor = 'blue'
    } else {
        document.querySelectorAll('.weatherWrapper')[0].style.backgroundColor = 'black'
    }
}