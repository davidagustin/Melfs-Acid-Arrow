let frequencyCounter = {};
let string = "gsueioghbzuispgbzsubgzsebgusiez"

for (let i = 0; i < string.length; i += 1) {
    // create frequency counter
    frequencyCounter[string[i]] = frequencyCounter[string[i]] + 1 || 1;
}

console.log(frequencyCounter); // { g: 5, s: 5, u: 4, e: 3, i: 3, o: 1, h: 1, b: 4, z: 4, p: 1 }

frequencyCounter = {};
string = "v4126b7 8v62qrva w3vvybtn7  3wv04a3 r9wvty9 avrw3t" // alphanumeric with spaces

for (let i = 0; i < string.length; i += 1) {
    // create frequency counter
    frequencyCounter[string[i]] = frequencyCounter[string[i]] + 1 || 1;
}

console.log(frequencyCounter);
// { '0': 1, '1': 1, '2': 2, '3': 4, '4': 2, '6': 2, '7': 2, '8': 1, '9': 2, v: 8, b: 2, ' ': 6, q: 1, r: 3, a: 3, w: 4, y: 2, t: 3, n: 1 }
