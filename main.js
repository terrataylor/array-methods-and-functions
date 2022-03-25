let combinedVal = coolFunc(5, 7)
//console.log(combinedVal)

function coolFunc(param1, param2){
    let combine = param1+param2;
    return combine;
}

const coolFunc2 = function(param1, param2){
    let combine = param1+param2;
    return combine;
}
let combinedVal2 = coolFunc2(5, 7)
//console.log(combinedVal2)

////////////////////////

function coolFunc3(){
    for (let index = 0; index < 3; index++) {
       console.log(index);        
    }
}


let joinedStr ='You read ';
function callback(book){
    console.log(`You read ${book}`);
    joinedStr += `${book}, `;
}

//callback('running',coolFunc3);

const arr =['The Chosen', 'The Warlock Heretical', 'Where the sidewalk ends','Everybody poops'];
console.log(`You read ${arr.join(", ")}`);
arr.forEach(callback)
for (const book of arr) {
   callback(book);
}

console.log(`Joined String: ${joinedStr}`)


let obj = {
    name: 'Bob',
    func(){
        console.log('this',this.name);
    }
}
obj.func()