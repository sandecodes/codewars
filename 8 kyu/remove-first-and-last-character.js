/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

removeChar = (str) => str.slice(1, -1);
// removeChar = (str) => str.substring(1, str.length - 1);

// function removeChar(str) {
//   const arrStr = str.split('');
//   arrStr.shift();
//   arrStr.pop();
//   // ubah
//   return arrStr.join('');
// }

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
console.log(removeChar('ooopsss'), 'oopss');
