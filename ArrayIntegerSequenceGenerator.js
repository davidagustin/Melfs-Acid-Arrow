let arrayIntegerSequence = Array.from({length: 10}, (undefined, i) => i + 1); // start on number 1

console.log(arrayIntegerSequence) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayIntegerSequence = Array.from({length: 10}, (undefined, i) => i + 2); // start on number 2

console.log(arrayIntegerSequence) // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
