iceBrickVolume = (radius, bottleLength, rimLength) => (bottleLength - rimLength) * 2 * Math.pow(radius, 2);

console.log(iceBrickVolume(1, 10, 2));
console.log(iceBrickVolume(5, 30, 7));
