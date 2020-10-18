let frequencyCounter = {};
let string = "gsueioghbzuispgbzsubgzsebgusiez"

for (let i = 0; i < string.length; i += 1) {
    // create frequency counter
    frequencyCounter[string[i]] = frequencyCounter[string[i]] + 1 || 1;
}

console.log(frequencyCounter); //{ g: 5, s: 5, u: 4, e: 3, i: 3, o: 1, h: 1, b: 4, z: 4, p: 1 }
