let secondColumn = 1;
let maxOfSecondColumn =  Math.max.apply(null, [[1, 2], [3, 4]].map(singleArray => singleArray[secondColumn]));

console.log(maxOfSecondColumn); //4
