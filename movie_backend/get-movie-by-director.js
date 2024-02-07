import { Movie } from "./db.js";

export const getMovieByDirector = async (director) => {
  try {
    const movieList = await Movie.find({ director: director });
    if (movieList) {
      return movieList;
    }
  } catch (error) {
    throw error;
  }
};
