// monitorEvents(document);


// document.addEventListener('click',function(){
//     console.log("I have clicked");
// })
//                 OR
//  function element() {
//     console.log("I have clicked");
// }
// document.addEventListener('click',element);


// element.addEventListener('click',function(){
//     element.style.color = 'red'
//     })


// let element = document.querySelector('h1');
//     element.addEventListener('click', function(){
//     element.style.background = 'pink';
// });


//  function element() {
//     console.log("I have clicked");
// }
//   // add event listener
// document.addEventListener('click',element);

//   // remove Event
// // document.removeEventListener('click',element);


// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){     //event koi bhi name like sakte hai like Pinkoo
//      console.log(event);
// })


// // Default Action
// let links = document.querySelectorAll('a');
// let  thirdLinks = links[2];

// thirdLinks.addEventListener('click',function(event){
//     event.preventDefault();
//        console.log('maza aa gya');
// });



// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// para per click karne ke bad para na print ho span hi print ho

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});