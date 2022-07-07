"use strict";

const numberOfFilms = start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

	
	rememberMyFilms () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել", "");
			const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
		
			if (!isNaN(b) && a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("DONE");
			} else {
				console.log("ERROR");
				i--;
			}
		}
	},
	detectUserPersonalLevel () {
		if (numberOfFilms < 10) {
			console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
		} else if (numberOfFilms < 30) {
			console.log("Դուք ֆիլմի սիրահար եք");
		} else if (numberOfFilms >= 30) {
			console.log("Դուք կինոման եք !!!");
		} else {
			console.log("Տեղի է ունեցել խնդիր, ըստ երևույթի դուք թիվ չեք նշել");
		}
	},
	yourFavoriteGenres () {
		for (let i = 0; i <= 2; i++) {
			const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);
	
			if (genres != null && genres.trim() != "" && genres.length <= 20) {
				personalMovieDB.genres[i] = genres;
			} else {
				i--;
			}
		}
		personalMovieDB.genres.forEach(function a(val, i){
			console.log(`dzer sireli janere ${i+1} -- ${val}`);
		});

	},
	showMyDB () {
		if (personalMovieDB.privat) {
			console.log(personalMovieDB);
		} else {
			console.log("Մեր տվյալների բազան փակ է");
		}
	},
	isVisibleMyDB(){
		personalMovieDB.privat === true ? personalMovieDB.privat = false : personalMovieDB.privat = true;
	},
	

};

const{detectUserPersonalLevel, rememberMyFilms, yourFavoriteGenres,	showMyDB, isVisibleMyDB} = personalMovieDB;

function start (numberOfFilms) {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < -1) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}

	return numberOfFilms;
}

detectUserPersonalLevel();
rememberMyFilms ();
yourFavoriteGenres();
isVisibleMyDB();
showMyDB();





