let secondColumn = 1;
let twoDimensionalArray = [[1, 2], [3, 4]];
let maxOfSecondColumn =  Math.max(...twoDimensionalArray.map(row => row[secondColumn]));

console.log(maxOfSecondColumn); // 4
