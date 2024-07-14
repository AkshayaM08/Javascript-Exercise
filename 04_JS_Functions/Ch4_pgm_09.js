// Using a function to display object properties


var showMovieInfo = (movie) => {
  console.log(`Movie information for ${movie.title || "Unknown Title"}`);
  console.log("------------------------------");
  console.log(`Actors: ${movie.actors || "Unknown Actors"}`);
  console.log(`Directors: ${movie.directors || "Unknown Directors"}`);
  console.log("------------------------------");
};


var myMovie = {
  title: "Toy Story",
  actors: "Tom Hanks, Tim Allen",
  directors: "John Lasseter"
};


showMovieInfo(myMovie);


var incompleteMovie = {
  title: "Finding Nemo"
};

showMovieInfo(incompleteMovie);


showMovieInfo({});


var showMovieInfo = (movie = {
  title: "Unknown Title",
  actors: "Unknown Actors",
  directors: "Unknown Directors"
}) => {
  console.log(`Movie information for ${movie.title}`);
  console.log("------------------------------");
  console.log(`Actors: ${movie.actors}`);
  console.log(`Directors: ${movie.directors}`);
  console.log("------------------------------");
};


showMovieInfo();




/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */