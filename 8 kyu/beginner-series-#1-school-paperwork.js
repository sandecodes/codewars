paperwork = (n, m) => (n < 0 || m < 0 ? 0 : m * n);

console.log(paperwork(5, 5));
console.log(paperwork(5, -5));
console.log(paperwork(-5, -5));
console.log(paperwork(-5, 5));
console.log(paperwork(5, 0));
