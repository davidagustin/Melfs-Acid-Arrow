let array = [1, 1, 2, 3, 5, 5, 1]
let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // result: [1, 2, 3, 5]

array = [7 ,1 ,9 ,6 ,4 ,7 ,9 ,4 ,2 ,4 ,8 ,0 ,9 ,2 ,1 ,0 ,4 ,2 ,1 ,7 ,8 ,9];
uniqueArray = [...new Set(array)].sort(); // sorted example

console.log(uniqueArray) // result: [0, 1, 2, 4, 6, 7, 8, 9]
