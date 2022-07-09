"use strict";

const onlineShop = {
	shopDetails: [
		{address: "Ejmiacin, kirov"},
		{number: "010 000-001"},
		{type: "online-shop"},
		{owner: "group4"},
		{delivery: true},
		{open: true},
		{workTime: "8:00 - 20:00"}
	],
	shopWorkers: [
		{callCenter: "Rita Sargsyan"},
		{deliver: "Serg Sargsyan"},
		{deliver: "Rob Qoch"},
		{itSpecialist: "Sami"},
		
	],
	shopMenu:{
		gadjets: [
			{iphone13: 1200},
			{samsung22: 1100},
			{xiaomiNote11: 350},
			{rolex: 18500}
		],
		drresses: [
			{coat: 25},
			{jeans: 12},
			{shoes: 120}
		],
		cars: [
			{bmwX6: 22500},
			{bmwX5: 8500},
			{bmwE92: 14000},
			{washingMachine: 350}
		],
	
		guns: [
			{pistolTT: 350},
			{ak74: 75}
		],
		drugs: [
			{cocain: 200},
			{weed: 12},
			{hoktemberyaniPlan: "free"}
		]
		
	},
	showOurProduct(){
		for(let key in onlineShop.shopMenu){
			if(typeof onlineShop.shopMenu[key] === "object"){
				for(let nkey in onlineShop.shopMenu[key]){
					if(typeof onlineShop.shopMenu[key][nkey] === "object" ){
						for(let nnkey in  onlineShop.shopMenu[key][nkey] ){
							console.log(`
						bajin  ${key}   - apranq ${nnkey}
					`);
						}
					}
				}
			}
		}
	},
	showOurWorkers(){
		onlineShop.shopWorkers.forEach(function(val){
			for(let key in val){
				console.log(val[key]);
			}
		});
	},
	showMyshop(){
		if(onlineShop.shopDetails[5].open){
			console.log(onlineShop);
		}else{
			console.log("menq chenq karox cuyc tal ");
		}
	},
	sortByPrice(){
		// stex kgrem funkcia vore bolor apranqnere kqci zangvai mej ira gnerov achman kargov 
		// mnac tenam vor algorithmov

	},
	runCode(){
		onlineShop.showOurProduct();
		onlineShop.showOurWorkers();
		onlineShop.showMyshop();
	},
	orderOne(){
		if(onlineShop.shopWorkers[1] === "Serg Sargsyan"){
			for(let key in onlineShop.shopMenu.gadjets){
				if(onlineShop.shopMenu.gadjets[key] < 1500 && key === "samsung22"){
					console.log("please, i want that item");
				}
			}
		}else{
			console.log("I want serjikin");
		}
	}

	
};
onlineShop.runCode();

const user = onlineShop.orderOne();
console.log(user);


