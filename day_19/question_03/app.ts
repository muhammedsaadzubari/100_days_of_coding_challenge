/* Find the Average Grade: Given a list of grades, calculate the average grade.

We can sum up all the grades and divide by the number of grades to find the average, giving us an idea of how well someone did overall.
*/

const grades = [96, 67, 83, 56, 97, 54, 73];
const averageGrade = (grades.reduce((preVal, currVal) => (preVal + currVal), 0) / grades.length);
console.log(averageGrade);