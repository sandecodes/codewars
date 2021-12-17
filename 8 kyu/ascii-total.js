function uniTotal(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += s.charCodeAt(i);
  }
  return count;
}
