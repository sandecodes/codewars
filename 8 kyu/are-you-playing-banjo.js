/*

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

/* Optional - 1 */
function areYouPlayingBanjo(name) {
  if (/^[rR]/.test(name)) {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

/* Optional - 2 */
areYouPlayingBanjo = (name) => (/^[rR]/.test(name) ? name + ' plays banjo' : name + ' does not play banjo');

/* Optional - 3 */
areYouPlayingBanjo = (name) => name + (name[0].toLowerCase() === 'r' ? ' plays' : ' does not play') + ' banjo';
