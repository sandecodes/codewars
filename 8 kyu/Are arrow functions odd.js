/*

Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/

/* Optional - 1 */
function odds(values) {
  const odd = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 1) {
      odd.push(values[i]);
    }
  }

  return odd;
}

/* Optional - 2 */
const odds = (values) => values.filter((i) => i % 2 == 1);
