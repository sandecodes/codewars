/*

Description:

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
