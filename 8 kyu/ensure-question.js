/*

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

*/

// Optional 1
ensureQuestion = (s) => (s.endsWith('?') ? s : s + '?');

// Optional 2
ensureQuestion = (s) => s.split('?').join('').concat('?');

// Optional 3
ensureQuestion = (s) => (s.includes('?') ? s : s + '?');
