function returnVal(){
    let x =5;
    return x;
}

let somVar = returnVal();




let arr =[]

function createCounter() {
    let runningCount = 0;

    return function(increment = 1){
        runningCount= runningCount+ increment;
        return runningCount;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

//console.log(createCounter());    // 1
console.log(counter1());    // 2
//console.log(counter1());    // 3

let result = counter2(5);   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   //10
console.log(counter2());   //11
console.log(counter2(2));   //10
console.log(counter2(2));   //10
console.log(counter2(2));   //10
console.log(counter2(2));   //10
console.log(counter2(2));   //10