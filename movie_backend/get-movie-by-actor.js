import { Movie } from "./db.js";

export const getMovieByActor = async (actor) => {
  try {
    const movieList = await Movie.find({ actors: actors.includes(actor) });
    if (condition) {
      return movieList;
    }
  } catch (error) {
    throw error;
  }
};
