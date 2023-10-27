// #1 - Arithemetic Operator 
// + - / * % ++ -- 

console.log("Arithemetic Operator");
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Pre Increment and Decrement  :- first(Increment the value) ,second(use the value) ,Ex;_ let a=10; console.log(++a)
// Post Increment and Decrement :- first(use the value) ,second(Increment the value) ,Ex;_ let a=10; console.log(a++)
console.log("Post and Pre Increment and Decrement");
console.log(num1++ + ++num2); // 11 21 31
console.log(++num1 + num2--); // 12 20 33 
console.log(num1-- - num2--); // 11 19 -8
console.log(num1-- - --num2); // 10 18 -7
console.log(++num1 - --num2); // 11 17 -6  
console.log(++num1 + --num2); // 12 16 28

// #2 - Assignment Operator 
// = += -= *= /= %=

console.log("Assignment Operator");
let a = 5;
console.log(a); //5
a+=a;
console.log(a); //10
a-=4;
console.log(a); //6
a*=5;
console.log(a); //30
a/=2;
console.log(a); //15
a%=7
console.log(a); //1

// #3 - Comparison Operator 
console.log("Comparison Operator")
// == === != !== > < >= <= 
let n1 = 5;
let n2 = '5';

console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 != n2);
console.log(n1 !== n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 > n2);
console.log(n1 < n2);

// #4 - Bitwise Operators
// & | ^ ~ << >> >>> 

console.log("Bitwise Operators");
let bo = 10;

console.log(bo & 3); //2
console.log(bo | 3); //11 
console.log(bo ^ 3); //9
console.log(~bo); //
console.log(bo >> 1); //5
console.log(bo << 1); //20
// console.log(bo >>> 1); //

// #5 - Logical Operator 
// && || ! 
let lo1 = true; 
let lo2 = false;

console.log(lo1 && lo2); //False
console.log(lo1 || lo2); //True
console.log(!lo1) // False
console.log(!lo2) // True

// with Non-Booleans :-  Concept of False and Truth

//1. falscy :- undefined, null, 0, false, '' ,NaN
//2. Truthy :- anythink taht is not falsy
let lo4 = false;
let lo5 = 'sudhanshu'; 
let lo6 = 'pinkoo';
let lo7;
let lo8 = null; 
let lo9 =  NaN;
let lo =  '';
let num = 3;
let nums = 5;
console.log(lo1 || lo2); //True

// OR :- Short circeting mean first Truthy called
console.log(lo4 || lo5 || lo6 ); //Sudhanshu
console.log(lo4 || lo6 || lo5 );  //pinkoo
console.log(lo7 || lo1 || lo6 );  // true
console.log(lo8 || num || nums );  // 3
console.log(lo9 || nums || lo6 );  //5
console.log(lo || lo6 || lo5 );  //pinkoo
console.log(lo4 && lo6 && lo5 );  //pinkoo

// #6 - Turnary Operator 
let age = 18;
age > 18 ? console.log("You can Vote"): console.log("You can not vote");