import { Movie } from "./db.js";

export const getMovie = async (name) => {
  const movie = await Movie.findOne({ title: name });

  if (movie) {
    return movie;
  } else {
    console.log("error");
  }
};
