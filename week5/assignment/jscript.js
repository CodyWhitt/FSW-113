// Declare any necessary variables.
//  inputs and cert outputs
const studentName = document.getElementById('studentName')
const className = document.getElementById('className')
const certStudentName = document.getElementById('certStudentName')
const certClassName = document.getElementById('certClassName')
const certGrade = document.getElementById('certGrade')
let certStudent;


// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.getElementById('print').addEventListener('click', function () {
    newStu()
    certFill()
})

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementById('reset').addEventListener('click', function clearFields(){
    studentName.value = ''
    className.value = ''
    document.getElementById('studentScores').value = ''
    document.getElementById('possibleScores').value = ''
    certStudentName.innerHTML = '&nbsp;'
    certClassName.innerHTML = '&nbsp;'
    certGrade.innerHTML = '&nbsp;'
})

// Create a function that instantiates a new student object with the input from the HTML form.
function newStu(){
    certStudent = new student (
        studentName.value, className.value, stringToAry(studentScores.value), stringToAry(possibleScores.value)
    )
}


// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function certFill(){
    certStudentName.innerHTML = certStudent.getStName()
    certClassName.innerHTML = certStudent.getClName()
    certGrade.innerHTML = certStudent.letterCalc()
}


// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function stringToAry(string){
    ary = string.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}