/* Average Score Calculator: Write a simple program that can take lots of scores and find their average.

This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall! */

function averageScore(...score: number[]){
    return score.reduce((prevVal, currVal) => (prevVal + currVal), 0) / score.length;
}
console.log(averageScore(50, 60, 70, 80, 90, 100));
