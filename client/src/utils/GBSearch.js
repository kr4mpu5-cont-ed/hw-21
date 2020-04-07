import axios from 'axios';

// https://www.google.com/search?tbm=bks&q=1q84

export default {
  // Gets all books
  findBooks: function(id) {
      console.log(id);
    //   return axios.get("https://dog.ceo/api/breeds/image/random");
    //   return axios.get("https://www.google.com/search?tbm=bks&q=1q84");
      return axios.get("https://www.google.com/search?tbm=bks&q=" + {id});
  }
  // Gets the book with the given id
//   getBook: function(id) {
    // return axios.get("/api/books/" + id);
//   },
  // Deletes the book with the given id
//   deleteBook: function(id) {
    // return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
//   saveBook: function(bookData) {
    // return axios.post("/api/books", bookData);
//   }
};


// import axios from "axios";

// // Export an object containing methods we'll use for accessing the Dog.Ceo API

// export default {
//   getRandomDog: function() {
//     return axios.get("https://dog.ceo/api/breeds/image/random");
//   },
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
// };
