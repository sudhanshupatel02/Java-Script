// // MAth
// console.log(Math.random());
// console.log(Math.round(1.6));
// console.log(Math.abs(3 - 7));
// console.log(Math.max(1, 6));
// console.log(Math.min(1, 6));

// // String
// console.log("String Object");
// let lastName = "Patel";          //! lastName is string {string ko objrct me conver karne ke liye . ka ude krate h} ,lastName. 
// console.log(typeof lastName);

// let firstName = new String("Priyansh");
// console.log(typeof firstName);

// let fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log(typeof fullName);

// console.log(firstName.length);
// console.log(firstName.includes("Pri"));
// console.log(firstName.startsWith("Pri"));
// console.log(firstName.endsWith("Pri"));
// console.log(firstName[0]);
// let anotherName = firstName.replace("Priyan", "khu") + "i";
// console.log(anotherName);

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// let string = "    this is   a  string  ";
// console.log(string);
// string = string.trim();
// console.log(string);


// let wordsInString = string.split(" ");
// console.log(wordsInString);

// // Template Literals

// let message = `This is a 
// message for 
// template literals`;

// console.log(message);

// // Date Objects
// let date = new Date();
// console.log(date);

// let date2 = new Date("apr 16 2003 11   :15:00");
// let date3 = new Date("2000 08 02 2:39");
// console.log(date2);
// console.log(date3);

// date.setFullYear(2000);
// date.setMonth(11);
// console.log(date);

// console.log(date.getFullYear());

// // Array
// let arr = [1, 4, 5, 7, 5, 6, 4];
// console.log(arr);
// console.log(arr[3]); //7  [index=3]; 

// // Insertion Element
// arr.push(10);    //end -> push
// arr.unshift(0);  //bedinning -> unshift
// arr.splice(4, 0, "Sudhanshu");  // middle -> splice   ,Ex:- arr.splice(index, DeleteOfNumber, inset item)

// console.log(arr);

// // Searching
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(14));

// console.log(arr.includes(7));

// console.log(arr.indexOf(1, 2));

// arr.includes(4) ? console.log("Present") : console.log("Absent");

// arr.includes(14) ? console.log("Present") : console.log("Absent");

// // // Array of Object
// let courses = [
//   {
//     No: 1,
//     NAme: "Sudhanshu",
//   },
//   {
//     No: 2,
//     NAme: "Pinkoo",
//   },
// ];
// console.log(courses);

// // Includes and indexOf not works with references // Includes and indexOf not works with references //!kyu ki yaha onj h {obj me references dekha jata h not value}
// // console.log(
// //   courses.includes({
// //     No: 1,
// //     NAme: "Priyansh",
// //   })
// // );

// // console.log(
// //   courses.indexOf({
// //     No: 1,
// //     NAme: "Priyansh",
// //   })
// // );


// let course = courses.find(function(course) {
//     return course.NAme === "Sudhanshu";
// });

// console.log(course);

// course = courses.find(function(course) {
//     return course.NAme === "Patel";
// });

// console.log(course);

// course = courses.find(course => course.NAme === "Sudhanshu");
// console.log(course);

// Removing Element 
// let num = [10,20,30,40,50,60,70,80];
// console.log(num);
// num.pop();    // remove 80      //end -> pop 
// num.shift();  // remove 10      //bedinning -> shift
// num.splice(3,2);//remove 50,60  //middle -> splice
// console.log(num);

// Emptying an Array
// let num = [10,20,30,40,50,60,70,80];

// // #1 - Bad Practce
// arr = num;
// num = [];
// console.log(num);
// console.log(arr);

// #2 - 
// num.length = 0;
// arr = num;
// console.log(num);
// console.log(arr);

// #3 - 
// num.splice(0, num.length);
// arr = num;
// console.log(num);
// console.log(arr);

// /// Combining & Slicing Arrays:

// // Combining
// let first = [2,4,6];
// let second = [1,3,5];

// let combined = first.concat(second);
// console.log(combined);

// // Slicing 
// let marks =[10,20,30,40,50,60,70,80];
// let sliced = marks.slice(); //! oreginal array copy     
// console.log(sliced);         

// sliced = marks.slice(2,6);    //!slice(first index, second index)
// console.log(sliced);      //! first & second index ke bich me late hai(first include & second exclude)

// sliced = marks.slice(2); //!2 index se leke sara array slice ho jata
// console.log(sliced);

// // Spread operator for combined operations 
// let first = [2,4,6];
// let second = [1,3,5];

// // combined = [...first,...second];
// combined = [...first,"a",...second,"abc"];
// console.log(combined);
// // capy kaise create karu
// let another = [...combined];

// // Iteration of Array
// let arr =[10,20,30,40,50];
// for(let value of arr)
// {
//     console.log(value);
// }

// arr.forEach(function(number) {
//     console.log(number);
// });

// combined.forEach(number => console.log(number));


// // Joined ARRAy 
// let numbers =[10,20,30,40,50]; 
// let joined = numbers.join(",");  //! joined karna hai to (join method) ka use karte h
// console.log(joined);

// let spilted = joined.split("_");  //! spilted karna hai to (split method) ka use karte h
// console.log(spilted);


// let message ='This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// // Sort 
// let numbers = [4, 30, 15, 1, 50]; 
// //! Sort the array (default behavior) //(pahale strings me conver karta hai bad ne sort krta h)
// numbers.sort();
// console.log(numbers); 

// Reverse the array
// numbers.reverse();
// console.log(numbers);

// so we have to sort by callback function /(using obj) 
// let sortedArray = numbers.sort((a,b) => a-b);  //! ascending order ke liye 'a' ko 'b' se  negative karenge
// console.log(sortedArray); 
 
// 1. Reverse the array
// let sorted = numbers.sort((a,b) => b-a);      //! descending order ke liye 'b' ko 'a' se  negative karenge
// console.log(sorted);  

// 2. Reverse the array
// numbers.reverse();
// console.log(numbers);

// // Filtering in Array 
// let numbers = [1,2,3,4,-5,-7,-4,-8];
// console.log(numbers);

// let positive = numbers.filter(value => value >= 0); //! positive:value>=0,negative:<0, only zero===0
// console.log(positive);

// // Mapping Arrays 
let item = [4,5,7,9,10,12,13];
// let itemSquare = item.map(value => value * value);
// console.log(itemSquare);

// let mapWithObject = item.map(value => {return{Number : value}});
// console.log(mapWithObject);

// let numbers = [4,5,7,9,10,12,13];
// let itemNum = numbers.map(value => 'student_no' + value);
// console.log(itemNum);

   //Mapping with Objects:

// let numbers =[1,2,-6,-9];
// let filtered = numbers.filter(value => value >=0);

// let items = filtered.map(num => {return{value: num}});
// console.log(items);

// // Chaining 

let numbers =[1,2,-6,-9];

let items = numbers.filter(value => value >=0).map(num => {return{value: num}});
console.log(items);

