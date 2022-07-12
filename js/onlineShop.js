"use stict";
// forEach
function forEach(arr, func){
	for(let i = 0; i < arr.length; i++){
		func(arr[i], i);
	}
}
const arr = [4, 8, 10];

forEach(arr, function(val){
	console.log(val);
});


// split function

function split(string, lim){
	let arr = [];
	let j = 0;
	let k = 0;
	for(let i = 0; i < string.length; i++){
		if(string.slice(i, i+1) === lim ){
			arr[k] = string.slice(j , i );
			j = i ;
			k++;
		}else if(i + 1 === string.length){
			arr[i] = string.slice(j + 1, i + 1 );
		}
	}
	return arr;
}

console.log(split("helo guys", " "));


let str =  "helo guys";

console.log(str.slice(4, 5));





// copy object 


const aobj = {
	number: 5,
	valeu: "asas"
};

const bobj = Object.assign({}, aobj);

aobj.number = 10;

console.log(aobj);
console.log(bobj);


//copy arr

const narr = [5, -9, "val", true];

const copyArr = narr.slice();

narr[3] = false;

console.log(narr);
console.log(copyArr);




// sort

let someArr = [4, 9, 2, 1, 0, 6 , -7 , 522, -8, 12, -1000, 88888, -122, 45, 64, 35];
function sort(arr){
	let newArr = [];
	while(true){
	
		let min = arr[0];
		for(let j = 0; j <= arr.length; j++){
			if(arr[j] < min){
				min = arr[j];
			}
		}
		newArr.push(min);
		arr.splice(arr.indexOf(min), 1);
		if(arr[0] === undefined){
			break;
		}
	}
	return newArr;
}

console.log(sort(someArr));



const bb = [ 4, 9, 2, 1, 0, 6 , -7 , 522, -8, 12];

bb.splice(6,1);

console.log(bb);
console.log(bb[6]);