
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
                type: "տաք ուտեստներ",
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
        callCenter(address, telNumber, isDelivery, isOpen, type){
            return `
                Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
                ${
                    address = app.restaurantDetails[0].address !== undefined ?
                    "Մեր հասցեն է " + app.restaurantDetails[0].address :
                    "Կներեք, մենք հասցե չունենք"
                }
                ${
                    telNumber = app.restaurantDetails[1].telNumber !== undefined ?
                    "Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber :
                    "Կներեք, մենք չունենք հեռախոսահամար"
                }
                ${
                    isDelivery = app.restaurantDetails[6].isDelivery === true ?
                    "Այո, կարող ենք իրականացնել Ձեր պատվերը" :
                    "Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
                }
                ${
                    isOpen = app.restaurantDetails[7].isOpen === true ?
                    "Այո, ներկա պահին բաց ենք" :
                    "Ոչ, կներեք մենք փակ ենք"
                }
            `;
        },
        callCenter1() {
            if(app.restaurantDetails[7].isOpen === true) {
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

                `;  } else {
                            return `
                    "Ոչ, կներեք մենք փակ ենք"
                                    `;
                            }



            // return `
            // ${
            //     isOpen = app.restaurantDetails[7].isOpen === true ?
            //     "Այո, ներկա պահին բաց ենք" :
            //     "Ոչ, կներեք մենք փակ ենք"
            // }
            // `;
        
        },


        callCenter2()
            { 
                return `
                    Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[5].waiter}ը ;
                    ${app.restaurantDetails[6].isDelivery === false ?
                    "չունենք" :
                    "գարեջուր չունենք, կարող եք նայել մեր խմիչքների տեսականին" };
                    ${app.restaurantMenu[2].type};
                    ${app.restaurantMenu[2].item1};
                    ${app.restaurantMenu[2].item2};
                    ${app.restaurantMenu[2].item3};
                    ${app.restaurantMenu[2].item4};
                    ${app.restaurantMenu[2].item5};
                    ${app.restaurantMenu[2].item6};
                    ${app.restaurantMenu[2].item7};
                `;
            
            },
        

        baradiClient() {

            // if (app.restaurantStaff[9].cook === "Արտակ Ադամյան") {
            //     return `
            //     ${app.restaurantMenu[0].item1} `;
            // } else {
            //     return `
            //     "Քուրըս չիմացար հա ոնց որ։ Արտակի բաջանաղն եմ"
            //     `;
            // }

    //  2-rd tarberak ternary-ov 

            return `
                ${
                    app.restaurantStaff[9].cook === "Արտակ Ադամյան" ?
                    "Քուրըս Արտակին ասա Մուֆլոնն ասըմ ա 6 շիշ քյաբաբ թո սարքի" :
                    "Հելա է քուրըս, դուք ինչ քյաբաբ սարքող"
                }
                `;

        },



        isOpened(start, end) {
            start >= end ?
            app.restaurantDetails[7].isOpen = false :
            app.restaurantDetails[7].isOpen = true;
        }

    };

    app.isOpened(2, 24);

    const client1 = app.callCenter1();
    console.log(client1);

    const client2 = app.callCenter2();
    console.log(client2);
    
    const client3 = app.baradiClient();
    console.log(client3);
    