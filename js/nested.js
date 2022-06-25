"use strict";
let song = "Tonacar jan tonacar...";
let result = "";
let s = "*";
for (let i = 0; i <= 7; i++) {
    for(let j = 7; j >= i; j--){
        
        if(j === 0){
            result += "*";
            break;      
        }
        if(j === i){
            result += s + "**";
            s += "**";
            break;
        } 
        result += " ";
    }
    result += "\n";
}
console.log(result, song);




//kalkulyator

function calcul(number1, number2, op) {
    switch (op) {
        case "+": console.log(number1 + number2); break;
        case "-": console.log(number1 - number2); break;
        case "*": console.log(number1 * number2); break;
        case "/": console.log(number1 / number2); break;
        case "%": console.log(number1 % number2); break;
        default: console.log("Xndrum em mutqagreq '+ , - , * , / , % '");
    }

} 
calcul(8, 4, "*");


// loooper irar mej


for(let i = 0; i <= 6; i++){

    for(let j = 6; j >= i; j--){
        for(let k = 0; k < j; k++) {
            console.log(k);

        }
        console.log(j);
    }
    console.log(i);
}


// nuyne whileov

let i = 0;
while(i <= 6){
    let j = 6;
    while(j >= i){
        let k = 0;
        while(k < j){
            k++;
            console.log(i ,j , k);
        }
        j--;
    }
    i++;
}
