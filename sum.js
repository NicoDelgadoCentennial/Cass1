let num1 =17;
let num2 =10;

function sum(x,y){
    return x+y
}

let sub = (x,y)=>x-y;

const mul = (x,y) => {
    return x*y;
}


console.log(sum(...[num1,num2]));
console.log(sub(num1,num2));
console.log(mul(num1,num2));