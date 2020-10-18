const firstColumn = 0;
const secondColumn = 1;
const twoDimensionalArray = [[1, 2], [3, 4]];
let maxOfColumn =  Math.max(...twoDimensionalArray.map(row => row[secondColumn]));

console.log(maxOfColumn); // 4

maxOfColumn =  Math.max(...twoDimensionalArray.map(row => row[firstColumn]));

console.log(maxOfColumn); // 3

