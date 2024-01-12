// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
//
// function getGrade(s1, s2, s3) {
//   if ((s1 + s2 + s3) / 3 >= 90) return "A";
//   else if ((s1 + s2 + s3) / 3 >= 80) return "B";
//   else if ((s1 + s2 + s3) / 3 >= 70) return "C";
//   else if ((s1 + s2 + s3) / 3 >= 60) return "D";
//   else return "F";
// }

// Task 2
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  // Проверка на пустой массив

  if (!Array.isArray(arr) || arr.length <= 1) {
    return 0;
  }

  // Find the minimum and maximum values in the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Sum all elements excluding the minimum and maximum
  const sum = arr.reduce((acc, num) => {
    if (num !== min && num !== max) {
      acc += num;
    }
    return acc;
  }, 0);

  return sum;
}
