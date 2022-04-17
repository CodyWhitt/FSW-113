const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.querySelector('#submit').addEventListener(
    'click', function() {
        let list = document.querySelectorAll('input')
        let langs = [...list]
        chkLang(langs)
})

function chkLang(thing) {
    let output = document.querySelector('#TestResult')
    const obj = thing.some(function(x) {
        return x.value.toLowerCase() ==='javascript'
    })
    if (obj) {
        output.innerText = `Congratulations!\nYou know ${lang}.`
    } else {
        output.innerText = `Sorry,\nyou don't know ${lang}.`
    }
}