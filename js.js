"use strict"

const numberOfFilms = +prompt("How many films are you watch", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


	  
	  
for (let i = 0; i < 2; i++) {
	const a = prompt("Last film?", ""),
	      b = prompt("What are rating?", "");

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		
		personalMovieDB.movies[a] = b;
		console.log("Done");
	} else {
		console.log("error");
		i--;
	}
		  
	}
	
if (personalMovieDB.count < 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}
	 


console.log(personalMovieDB);

