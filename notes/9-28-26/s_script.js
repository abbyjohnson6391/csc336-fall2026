// function getMessage(){
//     return "hello";
// }

// console.log(getMessage());

// 2 function as 'variable'

// let getMessage = function(){
//     return "hello";
// }

// console.log(getMessage());

// let getExcited = function(str){
//     return str + "!!!";
// }

// console.log(getExcited("hello"));

// 2.5

// let getExcited = function(str){ return str + "!!!"};

// 3. arrow function

// let getExcited = (str) => {return str + "!!!"};






let rootDiv = document.querySelector("#root");
let button = document.createElement("button");

button.innerHTML = "click";
rootDiv.append(button);

// // 3. anonymous function

// // button.addEventListener("click", function() {console.log("CLICKED");});

// // anonymous arrow function
// button.addEventListener("click", (event) => {console.log("CLICKED")});

// // 4. minimized arrow 
// // (only 1 parameter w/out ())
// // 

// let getExcited = str => str + "!!!";

// button.addEventListener("click", e => {
//     // this is the code body of the event handler
//     let rand = Math.floor(Math.random()*5);
//     button.innerHTML = rand;
// })


// // array
// let numbers = [10, 4, 6, 7, 3, -1];
// console.log(numbers)

// // let doubledNumbers = numbers.map(function(element){
// //     return element * 2
// // }

// let doubledNumbers = numbers.map(element => element * 2);
// console.log(doubledNumbers);

// // loop through an array
// // for (let i =0; i< numbers.length; i++){
// //     let number = numbers[i];

// // }

// // for ... of syntax: no index
// for (let number of numbers){
//     console.log(numbers);

// }

// // array function: no index
// numbers.forEach(element => console.log(element));

let numbers = [10, 4, 6, 7, 3, -1];
console.log(numbers);

numbers.sort((a,b) => {
    if (a>b){
        return 1;
    } else if (b>a){
        return -1;
    } return 0;
})

console.log(numbers);