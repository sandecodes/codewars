/*

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

/* Optional - 1 */
function include(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

/* Optional - 2 */
function include(arr, item) {
  return arr.includes(item);
}

/* Optional - 3 */
const include = (arr, item) => arr.some((i) => i === item);
