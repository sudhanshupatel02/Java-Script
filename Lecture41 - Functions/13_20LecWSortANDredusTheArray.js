
let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr)
//     total = total + value;

// console.log(total);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log("PRINTING TOTAL SUM:");
console.log(totalSum);

