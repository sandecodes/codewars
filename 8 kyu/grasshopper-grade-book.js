/*

Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

/* Optional - 1 */
function getGrade(s1, s2, s3) {
  const scores = (s1 + s2 + s3) / 3;

  if (scores >= 90 && scores <= 100) {
    return 'A';
  } else if (scores >= 80 && scores < 90) {
    return 'B';
  } else if (scores >= 70 && scores < 80) {
    return 'C';
  } else if (scores >= 60 && scores < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

/* Optional - 2 */
getGrade = (s1, s2, s3) => {
  const s = (s1 + s2 + s3) / 3;

  return s >= 90 && s <= 100 ? 'A' : s >= 80 && s < 90 ? 'B' : s >= 70 && s < 80 ? 'C' : s >= 60 && s < 70 ? 'D' : 'F';
};
