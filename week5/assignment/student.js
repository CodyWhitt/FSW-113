// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and 
//   use the resulting decimal to determine grade)

class student {
    constructor(studentName, className, studentScores, possibleScores) {
    this.studentName = studentName
    this.className = className
    this.studentScores = studentScores
    this.possibleScores = possibleScores
    }

    getStName() {
        return this.studentName
    }

    getClName(){
        return this.className
    }

    stuScoreSum() {
        let result = this.studentScores.reduce((accumulator, current) => accumulator + current, 0);
        return result
    } 

    possScoreSum() {
        let result = this.possibleScores.reduce((accumulator, current) => accumulator + current, 0);
        return result
    }

    letterCalc(result) {
        result = this.stuScoreSum() / this.possScoreSum()
        if (result >= .9){
            return 'A'
        } else if (result >= .8){
            return 'B'
        } else if (result >= .7){
            return 'C'
        } else {
            return 'F'
        }
    }
}
