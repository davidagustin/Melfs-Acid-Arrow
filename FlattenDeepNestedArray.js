let deepNestedArray = [[1, 2],[3, 4, 5], [6, 7, [8, 9]]];
let flatArray = deepNestedArray.flat(Infinity);

console.log(flatArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
