/*

Description:

Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

*/

/* Optional - 1 */
remove = (s) => s.replace(/!*$/g, '');

/* Optional - 2 */
remove = (s) => {
  for (let i = 0; s.endsWith('!'); i++) {
    s.endsWith('!') ? (s = s.slice(0, -1)) : s;
  }
  return s;
};
