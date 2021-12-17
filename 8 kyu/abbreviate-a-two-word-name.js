abbrevName = (name) =>
  name
    .split(' ')
    .map((s) => s[0].toUpperCase())
    .join('.');
