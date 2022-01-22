/*

Write a function that rearranges an integer into its largest possible value.

Example (Input --> Output)

123456 --> 654321
105 --> 510
12 --> 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

*/

/* Optional - 1 */
function superSize(num) {
  return Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

/* Optional - 2 */
const superSize = (num) => +[...String(num)].sort().reverse().join('');
