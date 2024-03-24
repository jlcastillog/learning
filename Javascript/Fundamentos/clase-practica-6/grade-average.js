/* 
Passing Grade Average

Create a program that takes an 
array of grades as input and 
calculates the average only for 
passing grades (greater than or
equal to 70)
*/

const grades = [100, 90, 100, 80, 90, 80, 65, 28, 60, 45, 72, 55, 88, 40, 68, 75, 58, 95, 62, 50, 82, 35]
const filterGrades = grades.filter(grade => grade >= 70)
const gradeAvarage = filterGrades.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / filterGrades.length

console.log(`Grade average: ${gradeAvarage}`)

