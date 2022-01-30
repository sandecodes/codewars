/*

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]

*/

/* Optional - 1 */
function doubleEveryOther(a) {
  const array = [];

  for (let i = 0; i < a.length; i++) {
    i % 2 === 1 ? array.push(a[i] * 2) : array.push(a[i]);
  }

  return array;
}

/* Optional - 2 */
const doubleEveryOther = (a) => a.map((acc, cur) => (cur % 2 === 1 ? acc * 2 : acc));

console.log(doubleEveryOther([1, 2, 3, 4]), [1, 4, 3, 8]);
