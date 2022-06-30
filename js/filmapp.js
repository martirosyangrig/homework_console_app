"use strict";

let numberOfFilms;
function isInt() {
	numberOfFilms = +prompt("Քանի՞ ֆիլմ եք դիտել այսօր", "");

	while (true) {
        if(numberOfFilms == null  || numberOfFilms == "" || isNaN(numberOfFilms)){
            numberOfFilms = +(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
        }
		else{
            break;
        }
	}
}
isInt();
const personalMovieDB = {
	count: numberOfFilms >= 1 ? numberOfFilms : 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

    showMyDB(){
        if(personalMovieDB.privat === true){
            console.log(personalMovieDB);
        }else{
            console.log("knereq chneq karox cuyc tal mer db");
        }
    },

    yourFavoriteGenres() {
        for(let i = 0; i <= 2; i++){
            const x = prompt(`« Ձեր նախընտրելի ժանրը» ${i + 1}`);
            
            if(isNaN(x) && x != null && x != "" && x.length <= 20){
                personalMovieDB.genres[i] = x;
            }else{
                console.log("sxal e texi unecel, mutqagreq bar");
                i--;
            }
        }
    }
};
personalMovieDB.yourFavoriteGenres();


	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք կինոման եք !!!");
	} else {
		console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
	}

function myFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
        const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            a.trim();
            b.trim();
            personalMovieDB.movies[a] = b;
            console.log("DONE");
        } else {
            console.log("ERROR");
            i--;
        }
    }
}

myFilms();
personalMovieDB.showMyDB();