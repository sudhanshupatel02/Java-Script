//! Adding 100Para
// let t1 = performance.now();
// for(let i =1;i <= 100;i++) 
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     document.body.appendChild(newElement);
// }
// let t2 = performance.now();

// console.log("1st way take time " + (t2-t1) + "ms");

//! Optimising a bit 
// let t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = `This is Para ${i}`;
    
//     myDiv.appendChild(newElement);
// }
// let t4 = performance.now();
// document.body.appendChild(myDiv);
// console.log("2nd way take time" + (t4-t3) + "ms");

//! using document DocumentFragment 

// // t1 = performance.now();
// let Fragment  = document.createDocumentFragment('div');
// for(let i =1;i <= 100;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
    
//     Fragment .appendChild(newElement);
// }
// // t2 = performance.now();
// document.body.appendChild(Fragment); // 1 Reflow, 1 Repaint
// // console.log(`3rd way take time : ${t2-t1}ms`);


function addPara(){
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para = document.createElement('p');
    para.textContent = 'kya haal hai';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();


// setTimeout
// setTimeout(function(){
//    console.log('hello ever one');
// },4000);
