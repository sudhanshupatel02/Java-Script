console.log("Lecture2 Start of JS");

//! object create :-object ke pass kuchh (property and behaviour) hota h [ {}= object litral kahte h],
//! Ex: let a ={}; a = object  (yaha object 1 empty onbje h)

// const rectangle = {
//     "length" : 1, //property
//     "breadth" : 2, //Property

//     draw : function(){
//         console.log("Rectangle Drawing");  //!draw:is method
//     }
// }

// // Access - 
// console.log(rectangle.length); // 1
// rectangle.draw(); //Rectangle Drawing

//! Object Creation -How:- Two type Object Creation
//! 1. Factory Function
// ! 2. Constructor Function

 // // 1. Factory Function
 // // function createRectangle()
 // // {
 // //     const rectangle = {
 // //         "length" : 1, //property
 // //         "breadth" : 2, //Property
    
 // //         draw : function(){
 // //             console.log("Rectangle Drawing");
 // //         }
 // //     }
 // //     return rectangle;
 // // }

// let newRectangle = createRectangle();    //!createRectangle() output me 1 obj de raha h{obj ke ander lengh,breadth,drow} h (us obj ko store kara diya 1 newRectangle function me Or(variabe))
// newRectangle.draw();


// // #Custom Value 
// function createRectangle(len,bre)
// {
//     const rectangle = {
        
//         length:len,
//         breadth:bre,
    
//         draw : function(){
//             console.log(`Rectangle Of Breadth: ${len} ,length: ${bre}`);
//         }
//     }
//     return rectangle;
// }

// let rect1 = createRectangle(5,10);
// rect1.draw();

// let rect2 = createRectangle(2,1);
// rect2.draw();

// let rect3 = createRectangle(4,11);
// rect2.draw();

//! Constructor Function ->Pascal Natation ->first letter of every word is capital
// Constructor Function ->prop/methods -> intialise/Define
// //2. Constructor Function 
// function Car(color,weight)
// {
//     this.color = color;         //! this -> current obj refer
//     this.weight = weight;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }
//object creation using constructor function
// const bmw = new Car("red",400);  //!new 1 empty obj creat krta h

// console.log(bmw.color);

// bmw.model = "BMW3";
// console.log(bmw);

// delete bmw.model;
// console.log(bmw);

//! type of js the are tow type. Note
//! Primitive or Value types:- Primitive are copied by their value -> number,string,boolean,null,undefined 
//! Referene or Objects Types:-Primitive are copied by their addresh/refrence-> function ,object ,arrey

// // Primitive types ->
// let a = 10;
// let b = a;
// a++;
// console.log(a, b);

// // Referene Types 
// let aa = {value : 10};
// let bb = aa;
// aa.value++;
// console.log(aa, bb);


// let a = {value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

//! Iterating through Objects: tow type -> 
//! 1. For-of ->siko sirf {iterables} per apply kar h,iterables=areey, Maps
//! 2. For-in ->siko sirf {object} per apply kar h

let rectangle = {
    length:2,
    breadth:4
};
// // for-in loop 
// for(let key in rectangle)
// {
//     // key: are reflected through key variable
//     // values: are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }

// // for-of loop 
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// for(let i of Object.keys(rectangle))
// {
//     console.log(i, rectangle[i]);
// }

// let arr = [10,20,30,40]
// for(let i in arr)
// {
//     console.log(arr[i]);
// }

// if('length' in rectangle)
// {
//     console.log("Present")
// }
// else{
//     console.log("Absent");
// }

//! Object Cloning:- three type
//! 1. Iteration ->
//! 2. Assign ->
//! 3. Spread ->

//! 1. Object-colone -> Iteration
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

//! 2. Object-colone -> Assign
// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let dest = Object.assign({}, src);
// console.log(dest);
// src.a++;
// console.log(dest);



// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let src2 = {value: 25};

// let dest = Object.assign({}, src,src2);
// console.log(dest);

// src.a++;
// console.log(dest);


//3. Object-colone -> Spread
let src = {
    a:10,
    b:20,
    c:30
};
let dest = {...src};
console.log(dest);

src.a++;
console.log(dest);
