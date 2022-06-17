"use strict";

const app = {
	restaurantDetails:  [
		{address: "Երևան, Թումանյան 14"},
		{telNumber: "015 12-23-45"},
		{mail: "info@template.am"},
		{facebook: "http://facebook.com/"},
		{instagram: "http://instagram.com/"},
		{type: "Ռեստորան"},
		{isDelivery: true},
		{isOpen: true}
	],
	restaurantStaff: [
		{security: "Էդգար Գեվորգյան"},
		{security: "Արսեն Ավագյան"},
		{waiter: "Մելքոն Դանիելյան"},
		{waiter: "Ալիսա Պողոսյան"},
		{waiter: "Նելլի Դավթյան"},
		{waiter: "Քրիստինե Արսենյան"},
		{barman: "Տիգրան Ռուբենյան"},
		{barman: "Անի Առուստամյան"},
		{cook: "Կարինե Տոնոյան"},
		{cook: "Արտակ Ադամյան"},
		{administrator: "Լիկա Ավագյանց"},
		{courier: "Սամսոն Խաչատրյան"},
		{hostess: "Ալիսա Սուրենյանց"},
		{customer: "Մանե Սարգսյան"}
	],
	restaurantMenu: [
		{
			type: "Տաք ուտեստներ",
			item1: "Խոզի Խորոված",
			item2: "Հավի Խորոված",
			item3: "Ճտի Տապակա ֆրիով",
			item4: "Ձկան Խորոված",
			item5: "Թփով Տոլմա",
			item6: "Կաղամբով Տոլմա",
			item7: "Քյուֆթա"
		},
		{
			type: "Աղցաններ",
			item1: "Մայրաքաղաքային",
			item2: "Հունական",
			item3: "Ամառյին",
			item4: "Ցեզար",
			item5: "Վինեգրեդ",
			item6: "Խեցգետնով",
			item7: "Բազուկով"
		},
		{
			type: "Ալկոհոլային Խմիչքներ",
			item1: "Օղի",
			item2: "Գինի",
			item3: "Կոնյակ",
			item4: "Վիսկի",
			item5: "Լիկյոր",
			item6: "Տեկիլա",
			item7: "Ռոմ"
		},
		{
			type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
			item1: "Տնական Կոմպոտ",
			item2: "Կոկա-Կոլա",
			item3: "Ֆանտա",
			item4: "Սփրայթ",
			item5: "Սեվըն Ափ",
			item6: "Թան",
			item7: "Լիմոնադ"
		},
		{
			type: "Խմորեղեններ",
			item1: "Միկադո",
			item2: "Սնիկերս",
			item3: "Տղամարդու Իդեալ",
			item4: "Տիրամիսու",
			item5: "Շոկոլադե",
			item6: "Մրգային",
			item7: "Բրաունի"
		}
	],
	callCenter(){
		return `
			Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
			${
				app.restaurantDetails[0].address !== undefined ?
				"Մեր հասցեն է " + app.restaurantDetails[0].address :
				"Կներեք, մենք հասցե չունենք"
			}
			${
				app.restaurantDetails[1].telNumber !== undefined ?
				"Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber :
				"Կներեք, մենք չունենք հեռախոսահամար"
			}
			${
		  	app.restaurantDetails[6].isDelivery === true ?
				"Այո, կարող ենք իրականացնել Ձեր պատվերը" :
				"Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
			}
			${
				 app.restaurantDetails[7].isOpen === true ?
				"Այո, ներկա պահին բաց ենք" :
				"Ոչ, կներեք մենք փակ ենք"
			}
		`;
	},
	isOpened(start, end) {

    if (start >= end) {
      app.restaurantDetails[7].isOpen = false;
      const a = function(){
        return "Այս պահին անհասանելի ենք";
      };

      app.callCenter = a;
      
    }else {
      app.restaurantDetails[7].isOpen = true;
    }
	},

  firstOrder(povr, waitress, food){
	if ( app.restaurantDetails[7].isOpen === true && povr === "Արտակ Ադամյան") {
		return `
		1-ին։ Ես պատվիրում եմ  ${food}
			${waitress}ը բերեց ձեր ${food}ը
		`;

	  }else if ( app.restaurantDetails[7].isOpen === true && povr !==  "Արտակ Ադամյան"){
		return " 1-ին։ Ես ցանկանւմ եմ Արտակի կերակուրները ";
		
	  }else {
		return "1-ին հաճախորդ Ռեստորանը փակ է";
	}
  },

  anotherOrder (order, waitress) {
	
	if (order === "Գարեյուր" &&  app.restaurantDetails[7].isOpen === true){
       console.log();
	   console.log();
	   return `
		${waitress } ասում է որ գարեջուր չկա
			կարող եք պատվիրել հետեվյալը - ${app.restaurantMenu[2].item3}
	   `;
	}else if (app.restaurantDetails[7].isOpen !== true && order){
		return `2-րդ հաճախորդ Ռեստորանը փակ է `;
	}else {
		
		return `
		2-րդ։ ես պատվիրում եմ ${order}
			${waitress}ը բերեց ձեր ${order}ը
		`;
	}
  }
};

app.isOpened(2, 24);

const client = app.callCenter();
console.log(client);

const secondClient = app.firstOrder(app.restaurantStaff[9].cook, app.restaurantStaff[2].waiter, app.restaurantMenu[0].item5);
console.log(secondClient);

const thirdClient = app.anotherOrder(app.restaurantMenu[2].item3 , app.restaurantStaff[3].waiter );
console.log(thirdClient);