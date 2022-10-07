console.log(Boolean(-1)); // true
console.log(Boolean("false")); // true
console.log(Boolean("true")); // true
console.log(Boolean(1)); // true
console.log(Boolean(!"")); // true
console.log(Boolean("0")); // true
console.log(Boolean("1")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true

//5 Falsy values
0, "", undefined, null, NaN;

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN)); // false

let myVar;
console.log(Boolean(myVar)); // false (undefined)

console.log(String(123), 123);

let year = "2020";

console.log(year);
console.log(Number(year));
console.log(parseFloat(year));
console.log(year.length);
console.log([year].length);

console.log(typeof NaN); // 'Not a Number' is a number
console.log(typeof null); // Null is an object

let n = "1" + 1; // "11"
n = n - 1; // 10
console.log(n); // 10
