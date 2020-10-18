let twoDimensionalArray = [[1, 2, 3], [4, 6, 7], [8, 9, 10]];

for (let i = 0; i < twoDimensionalArray[0].length; i++) {
    twoDimensionalArray.map(singleArray => console.log(singleArray[i])); // 1, 4, 8, 2, 6, 9, 3, 7, 10
}

twoDimensionalArray = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]; // can work on a non-square 2D array

for (let i = 0; i < twoDimensionalArray[0].length; i++) {
    twoDimensionalArray.map(singleArray => console.log(singleArray[i])); // 1, 5, 9, 2, 6, 10, 3, 7, 11, 4, 8, 12
}
