import { Movie } from "./db.js";
import fs from "fs";
//Reading file data

const jsonData = fs.readFileSync("movie.json", "utf-8");
const movieData = JSON.parse(jsonData);

export const seedingMovieData = async () => {
  for (const movie of movieData) {
    const newmovie = new Movie({
      title: movie.title,
      releaseYear: movie.releaseYear,
      genre: movie.genre,
      director: movie.director,
      actors: movie.actors,
      language: movie.language,
      country: movie.country,
      rating: movie.rating,
      plot: movie.plot,
      awards: movie.awards,
      posterUrl: movie.posterUrl,
      trailerUrl: movie.trailerUrl,
      timeStamp: true,
    });

    newmovie.save();
  }
};

// seedingMovieData();
