// // Function 
//function call or invoke
// run();     //!run() ko fuction declaration ke upper ya nche bhi likha skate h.(run() upper shirf fuction declaration me hi hoga any kishi me nhi)

// //fuction declaration
// function run()
// {
//     console.log("Function running");
// }

//! Function Assignment:two type
// //1. Named Function Assignment 
// let stand = function walk(){
//     console.log("Walking");
// }

// stand();

// //2. Anonymous Function Assignment 
// let sit = function()
// {
//     console.log("Sitting");
// }

// sit();



//! *********
// let x = 0;
// x='a';
// console.log(x);

//!
// function sum(a,b){   
//     // console.log(arguments);
//     return a+b;
// }

// // console.log(add(1,2)); // 1 + 2 = 3
// // console.log(add(1)); // 1 + Undefined = NaN
// // console.log(add()); // Undefined + Undefined = NaN
// console.log(add(1,2,3,4,5,6,7,8)) // 1 + 2 = 3 [Rest 3 5 8] in Argunment 


// function sum(){   //!jitne chaho (parameter) pass koro aap apna sum nikal pavge Ex.parameter:- 0,1,2,3....
//     let total =0;
//     for(let value of arguments)
//          total = total + value;
//     return total;
// }

// let ans = sum(1,2,3,4);  //! jitna chaho utna sum kara sakte ho (ans aaye ga)
// let ans = sum(1,2);  
// let ans = sum();  
// console.log(ans);

//! **********



// // Rest Operator 

// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6)


// function sum(...args){
//     let sum = 0;
//     for(let i of args)
//     sum += i;   
//     return sum;
// }
// console.log(sum(1,2,3,4,5,6,7,8));


// // Default Parameter

// function mulitplication(a,b,c=1){   //! c=1:- Default Parameter hai
//     return a * b * c;   
// }
// console.log(mulitplication(2,3,4));//24
// console.log(mulitplication(2,3));//6


// function mulitplication(a,b=1,c=2){   
//     return a * b * c;     //! b=1 Default Parameter hai to uske bad jitne charecter honge wah sare ke sare Default Parameter banana padhega.EX:-c=2 
// }

// console.log(mulitplication(2,3));//12
// // console.log(mulitplication(2,undefined,4));//8 //! Nat a Good Prectic

// // GETTER SETTER
//! getter -> access properties
//! setter -> change or mutate properties (our ise object ke ander likhana hota hai.Ex:- object mean person )

// let person = {
//     firstName : "Sudhanshu",
//     lastName : "Patel",
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) 
//     {
//         if(typeof value !== "string")
//         {
//             throw `You have to give a string value but you give ${typeof value}`;
//         }
//         let path = value.split(" ");
//         this.firstName = path[0];
//         this.lastName = path[1];
//     }
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// person.fullName = "Pinkoo Patel";
// console.log(person.fullName);

// Try Catch 
// try{
//     person.fullName = true;
// }
// catch(err){
//     alert(err);
// }
// console.log(person.fullName);


// // Three wAys to create variable
// Scope

console.log("start with Scope")

// #1

// {
//     let a = 5;
//     console.log(a);  // 5
// }


// {
//     let a = 5;  //! let keyword scope uspe lagta hai jo uske (nearest block scope) per lagta h
// }
// console.log(a); // let block level scope


// {
//     var a = 5;
// }
// console.log(a); // global scope hai 


// function walk()   //! var keyword scope function ke ander defined hota hai (yah function ke ander defined nhi hai)
// {
//     var a = 5;
// }
// console.log(a); // error


// for(let i=0; i<=10; i++)
// {
// }
// console.log(i); //error

// for(var i=0; i<=10; i++)
// {
// }
// console.log(i); //11 

// if(true){
//     let a=5;
// }
// console.log(a); //error

// if(true){
//     var a=5;
// }
// console.log(a); //5

