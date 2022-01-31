/*

Examples
Odd_or_Even(1) should return Either, because the sum can be odd or even.
Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
Note
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";
is Preloaded.

*/

function oddOrEven(n) {
  let result = n / 2;

  if (result % 2 === 0) {
    return 'Even';
  } else if (result % 2 === 1) {
    return 'Odd';
  } else {
    return 'Either';
  }
}

console.log(oddOrEven(1));
console.log(oddOrEven(3));
console.log(oddOrEven(5));
console.log(oddOrEven(6));
console.log(oddOrEven(8));
