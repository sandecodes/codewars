/*

Description:

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

*/

// Optional 1

function findLongest(str) {
  let s = str.split(' ');
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].length > longest) {
      longest = s[i].length;
    }
  }
  return longest;
}

/*

Optional 2

const findLongest = (str) => Math.max(...str.split(' ').map((word) => word.length));

*/
