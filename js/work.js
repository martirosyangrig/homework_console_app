"use strict";

const progLang = {
	js: {
		inventor: "Brendan Eich",
		year: 1995
	},
	c: {
		inventor: "Denis Ritch",
		year: 1972
	},
	phyton: {
		inventor: "Guido van Rossum",
		year: 1991
	},
	java: {
		invetor: "James Gosling",
		year: 1995
	},
	assembly:{
		inventor: "Kathleen Booth",
		year: 1947
	},

	user: {
		name: "grig",
		age: 21,
		addres: {
			country: "Armenia",
			city: "Ejmiacin"
		}
	},
	todaysDate: "04-07-2022",
	shouldHaveVocation: true
};


for(let key in progLang){
	if(typeof progLang[key] === "object"){
		for(let bay in progLang[key]){
			console.log(`${key} :::  key is ${bay}: 
			value is ${progLang[key][bay]}  \n`);
		}
	}else{
		console.log(`key is ${key}: 
		         value is ${progLang[key]}`);
	}
}




//// xndir 2 

const arr = [
	15,
	"name",
	true,
	["some"],
	-8,
	[1, false, 888],
	[2, "abc", 666],
	[3, "prog", 777],
	[4, "in", 333],
];

// for of  ov

for (let val of arr){
	if(typeof val === "object"){
		for(let val2 of val){
			console.log(`${val2}`);
		}
	}else{
		console.log(`${val}`);
	}
}


// for in ov

for(let index in arr){
	if(typeof arr[index] === "object"){
		for(let bix in arr[index]){
			console.log(` ${arr[index][bix]}`);
		}
	}else{
		console.log(arr[index]);
	}
}

/// distucturing

const someFunc = {
	square(num1){
		
		console.log(num1 * num1); 
	},
    astchan(num1, num2){
		let a = num1;
		for(let i = 1; i < 3; i++){
			num1 = a * num1;
		}
		console.log(num1);
	}
};

const{square, astchan} = someFunc;

square(4);
astchan(5, 3);

const test = [
	function a(){
		console.log("Hi group 4");
	},
	function js(){
		console.log("js is a stupid language");
	}
];

const[sayHi, javaScript] = test;


sayHi();
javaScript();

const arrr = [1,2,3];
arrr.push(10,12);
console.log(arrr);