import mongoose from "mongoose";

import { data } from "./serverConfig.js";
import { release } from "os";
import { timeStamp } from "console";
mongoose.connect(data.DB_URL);

const movieSchema = mongoose.Schema(
  {
    title: String,
    releaseYear: Number,
    genre: [String],
    director: String,
    actors: [String],
    language: String,
    country: String,
    rating: Number,
    plot: String,
    awards: String,
    posterUrl: String,
    trailerUrl: String,
  },
  {
    timestamps: true,
  }
);

export const Movie = mongoose.model("movie", movieSchema);
