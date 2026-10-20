class MyArray{
    // constructor initializes variables in the constructor
    constructor(){
    // every instance of MyArray is going to have an array
    this.array = []; 
    }

    push(val){
        this.array.push(val);
    }

    get(index){
        return this.array[index];
    }

    forEach(fn){
        for (let i=0; i<this.array.length; i+=1) {
            fn(this.array[i]);
        }
    }
    // need to define filter 
    filter(functionToRunonEachElement){
        let arrayofelementsThatSatisfyGivenFunction = [];
        for (let element of this.array){
            if(functionToRunonEachElement(element)){
                arrayofelementsThatSatisfyGivenFunction.push(element);

            }
        }
        return arrayofelementsThatSatisfyGivenFunction; 
    }
    // MY ATTEMPT
    // map(functionThatMakesNewArray){
    //     let newArrayfromMap = [];
    //     for (let element of this.array){

    //         newElement = functionThatMakesNewArray(element);

    //         newArrayfromMap.push(newElement);
    //     }

    //     return newArrayfromMap;
    // }

    // CLASS ATTEMPT
    map(fn){
        let newArray = [];
        for (let element of this.array){

            newArray.push(fn(element)); // this just copies the old array with new fn applied
        }
        return newArray;
    }

}

document.addEventListener("DOMContentLoaded", () =>{
    // fires as soon as html document completely loaded

    // make a new object of MyArray type
    let arr = new MyArray();
    arr.push(4);
    arr.push(-1);
    arr.push(9);
    arr.push(2);

    let greaterThanOne = arr.filter((currentElement) =>{
        if (currentElement > 1){
            return true;
        } 
        return false;
    });


    // let mapExample = arr.map( e => e*2);
    let mapExample = arr.map( (e) => {
        return e * 2; 
    });

    console.log(mapExample);






    // let i =0;

    // while (i < arr.length){
    //     let current = arr[i];

    //     console.log(current);
         
    //     i+= 1; 
    // }

    // arr.forEach((current)) =>{
    //     console.log(current);
    // }

    // arr.forEach(current => console.log(current));


})