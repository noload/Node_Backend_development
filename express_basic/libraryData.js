let authors = [
  { id: 1, name: "George Orwell" },
  { id: 2, name: "Jane Austen" },
];

let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949 },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

let users = [
  { id: 1, name: "John Doe", borrowedBooks: [1] },
  { id: 2, name: "Jane Doe", borrowedBooks: [2] },
];

module.exports = { authors, books, users };
