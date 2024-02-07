import express from "express";
import { getMovie } from "./get-movie-by-name.js";
import { getMovieByActor } from "./get-movie-by-actor.js";
import { getMovieByDirector } from "./get-movie-by-director.js";
const app = express();

app.listen(3000, async () => {
  console.log("server started");

  //   const res = await getMovie("Titanic");
  //   console.log(res);

  //   const res = await getMovieByActor("Leonardo DiCaprio");
  // const res = await getMovieByDirector('James Cameron')
  // console.log(res);
});
