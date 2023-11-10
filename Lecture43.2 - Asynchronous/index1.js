// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

//!
// setTimeout(function(){
//     console.log('third');
// },3000) 
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

//*************************/

//! Promise
// let meraPromise = new Promise(function(resolve, reject){
//     console.log('I am inside promise');
//     resolve(1998);
// })
// console.log('Pehla');

//!
// let meraPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise');
//     },5000)
//     // resolve(1998)
//     reject(new Error(' Error aaya hai'))
// });
// console.log('Pehla');

// !
// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },5000)
//     // resolve(1998)
//     // reject(new Error(' Error aaya hai'))
// });

// let meraPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise2');
//     },2000)
//     // resolve(1998)
//     // reject(new Error(' Error aaya hai'))
// });
// console.log('Pehla');

// !
// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside promise1');
//     },3000);
//     // resolve(1998456798)
//     reject(new Error(' Error aaya hai'))
// });

// meraPromise1.then((value) => {console.log(value)});

// meraPromise1.catch((error) => {console.log("Recieved an error")});

// than ke andher bhi use kar sakthe h
// meraPromise1.then((value) => {console.log(value)},(error) => {console.log("Recieved an error")});

// console.log('Pehla');

// !

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Timeout1");
//     },2000) 
//     resolve(true);
// });

// p1.then(() => {
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Timeout2");
//         },3000)
//         resolve("Promise2 Resolved Success");
//     });
//     return p2;  //p2 return kiya jo jakar p1.then(()=>{}) chala gya 
// }).then((value) => console.log(value));


//*************************/

// async function abcd(){
//         // return 7;
//         return "Pinkoo";
//     }
//     console.log(abcd());  

//*************************/
// 50 promise ke liye yaise use kar sakte ho

//  async function weather(){

//         let mpWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("MP Weather");
//             },5000);
//         });
    
//         let upWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("UP Weather");
//             },3000);
//         });
    
//         let mp = mpWeather;
//         let up = upWeather;
//         // let mp = await mpWeather;  // ager tum kisi promise ko wait karvana chahte ho to is turh wait kar karva sakte ho
//         // let up = await upWeather;
    
//         return [mp, up];
//     }
// // weather(); windo per yah likana padega

//*************************/
// ! fetch API

// let object = {
//     heading : "head"
// };

// async function utility(){
//         let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let output = await content.json();
//         console.log(content);
//     }
//     utility();

//*************************/

// async function helper(){
//     let options ={
//         method : "POST",
//         body : JSON.stringify({
//             title : "foo",
//             body : "bar",
//             userId : 1,
//             weight: 90,
//         }),
//         header : {
//             "Content-Type": "application/json; charset=utf-8",
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper;
//     console.log(ans);
// }
// utility();

//*************************/
// ! Closures

// function init() {
//      var name = "Mozilla";
//      function displayName(){
//         console.log(name);
//      }
//      displayName();
// }
// init();


// let name = "sher";
// function init() {
//      let name = "Mozilla";
//      function displayName(){
//         let name = "pinkoo"
//         console.log(name);
//      }
//      displayName();
// }
// init();


function init() {
     let name = "Mozilla";
     function displayName(){
        console.log(name);
     }
   return displayName;
}
let a = init();
a();






