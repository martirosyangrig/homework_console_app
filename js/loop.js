

// for loop

//   1 - 10 tveri gumar

let a = 10;
let result = 0;

for(let i = 1; i <= a; i++) {
    result += i;
}
console.log(result);

//  factorial

let num = 5;
let factorial = 1;

for(let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

//  tpel minjev 20 mijakayqi kent tvere

const randomNum = 20;

for(let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }    
}

