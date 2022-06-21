

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

// stexcenq infinity loop fori hamar

for(let i = 5; i > 1; i++) {
    console.log(i);
    if (i === 222777) {
        break;
    }
}


//  tpel mijakayqi bolor tvere irenc hakadir tverov

const mij = 11;

for(let i = 0; i <= mij; i++) {
    console.log(i, -i);
}


//          while loop

// tpel mijakayqi bolor tveri 3 vra bajanvac mnacorde

const marg = 35;
let mnac;
let i = 0;
while (i <= marg) {
    mnac = i % 3;
    console.log(i, mnac);
    i++;
}


//  

let n = 10;
let j = 0;
while(j <= n) {
    console.log("Hello Sami");
    j++;
}

//   TPEL 1 - 10 MIJAKAYQI BOLOR TVERI QARAKUSINERE

let mid = 10;
let sqrt = 1;
let k = 1;

while(k <= 10) {
    sqrt += k * k;
    k++;
}
console.log(sqrt);


// do while 
let year = 2022;
let myage = 2019;
do {
    console.log(myage);
    myage++;

}while (myage < 2022);