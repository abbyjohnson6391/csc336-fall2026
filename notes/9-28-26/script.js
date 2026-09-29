// function sayHello(){
//     console.log("hello");

// }

// // store the function definition itself, no ()
// // sayHello() evaluates to what is returns which is nothing in this case: so will break
// let renamedSayHello = sayHello;

// // renamedSayHello(); 

// let repeatedCount =0; 

// function calledRepeatTooManyTimes(howmanyTimes){
//     console.log("too many" + howmanyTimes);
// }

// function repeat(fn, count, error_fn){
//     for (let i=0; i< count; i++){
//         if (repeatedCount >= 8){
//             error_fun(repeatedCount)
//             return;
//         }
//         fn();
//         repeatedCount++;
//     }
// }

// // CALLBACK: calling back a situation when something is true inside the function
// repeat(renamedSayHello, 10, calledRepeatTooManyTimes);

// element btnEl has event listener for click which runs the myClick..which console prints
// the html of btnEl defined on line 43
function myClickEventHandler(event){

    console.log(event.target.innerHTML);

}

let rootDiv = document.querySelector("#root");

let btnEl = document.createElement("button");
btnEl.innerHTML = "CLICK";

rootDiv.append(btnEl);

// addEventListener is a function, expecting a string and a function to call when event runs
btnEl.addEventListener("click", myClickEventHandler);





