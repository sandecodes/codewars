/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

find_average = (array) => (array.length === 0 ? 0 : array.reduce((acc, val) => acc + val) / array.length);
