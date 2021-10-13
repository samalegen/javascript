
const numberOfFilms = +prompt("How many films are you watch", "");

const perdonalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Last film?", ""),
	  b = prompt("What are rating?", ""),
	  c = prompt("Last film?", ""),
	  d = prompt("What are rating?", "");


perdonalMovieDB.movies[a] = b;
perdonalMovieDB.movies[c] = d;

console.log(perdonalMovieDB);


