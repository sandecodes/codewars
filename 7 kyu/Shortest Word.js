/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  return Math.min(...s.split(' ').map((string) => string.length));
}

function findShort(s) {
  const string = [];
  const str = s.split(' ');

  for (let i = 0; i < str.length; i++) {
    string.push(str[i].length);
  }

  return Math.min(...string);
}

findShort = (s) => Math.min(...s.split(' ').map((string) => string.length));
