/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

/* Optional - 1 */
function XO(str) {
  let totalX = 0;
  let totalO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') totalX++;
    if (str[i].toLowerCase() === 'o') totalO++;
  }
  return totalX === totalO;
}

/* Optional - 2 */
const XO = (str) => str.split('').filter((s) => s.toLowerCase() === 'x').length === str.split('').filter((s) => s.toLowerCase() === 'o').length;

/* Optional - 3 */
const XO = (str) => [...str].filter((s) => s.toLowerCase() === 'x').length === [...str].filter((s) => s.toLowerCase() === 'o').length;
