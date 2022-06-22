

//                           bolor xndirnere kazmvac e im erevakayutyan koxmic

///  Declaration

// 1 tpel poxancvox zangvaci arjeqnere hakadardz dasavorutyamb

function rezervedArr(arr) {
    let newArr = [];
    let j  = arr.length - 1;

    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[j];
        j--;
    }
    return newArr;
}
console.log(rezervedArr([5, 54, 215, 12]));



// 2 stexcel funkcia vore kgumari zangvaci tarere ev kstugi ardyoq zuyg e te voch

function isOdd(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    if(result % 2 === 0){
        return `Արդյունքը ${result} է եվ այն զույգ է`;
    }else {
        return `Արդյունքը ${result} է եվ այն կենտ է`;
    }
}
console.log(isOdd([1,  4564,  62, -521, 20 ]));



// 3  (barderic)  stexcel funkcia vore kgumari zangvaci arajin ev verjin  , erkrord u naxaverjin valunere u aydpes minjev verj
//  u kveradardzni nor zangvac: ( ete arayi erkarutyune kent e mejtexi tive tpel nor zangvaci verjum)

function makeNewArr(arr) {
    let newArr = [];
    let j = arr.length - 1;

    for (let i = 0; i <= arr.length / 2 && j >= arr.length / 2; i++) {
        newArr[i] = arr[i] + arr[j];
        j--;
    }
    if(arr.length % 2 !== 0){
        newArr[newArr.length] = arr[j];
    }
    return newArr;
}
console.log(makeNewArr([2, 4, 5 , 8 , 1 , 6, 5 ]));



// 4  stxcel funkcia vore kgtni trvac zangvaci maximume ev minimume

function getMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return `
    Maximal - ${max}
    Minimal - ${min}
    `;
}
console.log(getMin([5, 12, -2, 54, 88, 0]));


// 5 (barderic) grel funkcia vore khashvi mutqagrvac tvi 0 - 10 mijakayqi bolor tveri
// vra bajanvac mnacorde ev kveradardzni ayd tvere zangvaci tesqov  (mutqagrvac tive petq e lini mec kam havasar >= 10)

function morgul(arg) {
    let arr = [];
    arr[0] = "zroi vra chenq bajanum";   
    for(let i = 1; i <= 10; i++) {
        arr[i] = arg % i;
    }
    return arr;
}
console.log(morgul(12));



// expression

// stexcum enq funkcia vore stugum e mmer parametri type ev veradardznum ayn

 const checkType = function(val) {
    return typeof(val);
};
console.log(checkType("21"));




// grel funkcia vore knduni tiv ev arr ev kveradardzni zangvaci meji ayn tveri qanake 
// vore hamnknum e mer mutqagrac tvi het

const checkNum = function(n, arr) {
    let amout = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n){
            amout++;
        }
    }
    return amout;
};
console.log(checkNum(6, [0, 6, 78, 6, 11, 6, -5, -25, 6]));




// grel funkcia vore kstana parametrer tiv ev zangvac ev kveradardzni zangvaci ayn elementnere voronq mec en 
// tvic ev kent en zangvaci tesqov

const getBigNums = function(n, arr) {
    let newArr = [];
    let j = 0;

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] > n && arr[i] % 2 !== 0) {
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
};
console.log(getBigNums(17 , [-65, 20, 52, 47, -12, 0, 31]));




//     arrow function

// amenaparze tvi qarakusin

const pow = a => a * a;
console.log(pow(11));



//  functione stanume zangvac ev veradarcnum e elemntneri mijin tvabanakane

const soso = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
console.log(soso([2, 15, -4, 8]));



//  ստեղծել առանձին ֆունկցիա date անունով, ու էդ ֆուկցիան կանչել mig ֆունկցիայի մեջ ու էնպես անել որ 
//  2 ֆունկցիաներն էլ աշխատեն

// primitiv ban

function date(age) {
    if(typeof age === "number"){
         const dob = 2022 - age;
        return dob;
    }else{
        console.log("Erorr: Type your age");
    }
    
}

function mig() {
    if (date() > 18){
        return "acces";
    }else if(date() < 18){
        return "not acces";
    }else {
        return "Sorry you need to be older than 18";
    }

}