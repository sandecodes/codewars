/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

/* Opitonal - 1 */
function highAndLow(numbers) {
  const num = numbers.split(' ');
  let min = parseInt(num[0]);
  let max = parseInt(num[0]);
  for (let i = 0; i < num.length; i++) {
    if (min > parseInt(num[i])) {
      min = parseInt(num[i]);
    }
    if (max < parseInt(num[i])) {
      max = parseInt(num[i]);
    }
  }
  return max + ' ' + min;
}

/* Opitonal - 2 */
function highAndLow(numbers) {
  const num = numbers
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  return num[0] + ' ' + num.slice(-1);
}

/* Opitonal - 3 */
function highAndLow(numbers) {
  const number = numbers.split(' ').map((num) => Number(num));
  return Math.max(...number) + ' ' + Math.min(...number);
}

/* Opitonal - 4 */
const highAndLow = (numbers) =>
  numbers
    .split(' ')
    .map((n) => Number(n))
    .sort((a, b) => b - a)[0] +
  ' ' +
  numbers
    .split(' ')
    .map((n) => Number(n))
    .sort((a, b) => a - b)[0];
