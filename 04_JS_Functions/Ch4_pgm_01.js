

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");


var movies = [
  {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
  },
  {
    title: "Finding Nemo",
    actors: "Albert Brooks, Ellen DeGeneres",
    directors: "Andrew Stanton, Lee Unkrich"
  }
];

// Display information for each movie
for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
}

// Define a blog post object
var blogPost = {
  title: "Exploring the Universe: A Journey Through Space",
  author: "Jane Doe",
  date: "July 12, 2024",
  content: "In this blog post, we explore the wonders of the universe, from the formation of stars to the mysteries of black holes. Join us on a journey through space as we uncover the secrets of the cosmos."
};

// Display blog post information
console.log("Blog Post Title: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Date: " + blogPost.date);
console.log("Content: " + blogPost.content);


/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */