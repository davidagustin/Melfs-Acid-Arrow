let nestedArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];
let flatArray = nestedArray.flat(Infinity);

console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]



nestedArray = [[1, 2],[3, [4], 5], [[6, 7], [8, [9]]]]; // deeply nested example
flatArray = nestedArray.flat(Infinity);

console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
