// Promise
/*
    A promise is a an task that will be finished at a later time.  You can register functions to happen when the task either fails or succeds.
    A promise can be in either three states pending, fulfilled, or rejected.
*/

// Fetch API
/* 
    The fetch API is a webstandart that allows you to communicate with different resources.  It returns a promise. 
    This is a fetch call, I did for my module 2 final project to get a list of books from an API.  I used the altenative way of handling promises using async/await. I could of done fetch(API).then(res => res.json()).then(data )
*/
import fs from "node:fs";

const API =
  "https://openlibrary.org/search.json?subject=JavaScript&TypeScript&CSS&HTML";

const data = await (await fetch(API)).json();
// console.log(data.docs);
const books = data.docs
  .filter((book) => {
    return "isbn" in book;
  })
  .map((book) => ({
    isbn: book.isbn[0],
    title: book.title,
    subTitle: book.subtitle,
    author: book.author_name,
    rating: book.ratings_average ?? 0,
    copies: book.isbn.length,
    cover: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
    publishYear: book.first_publish_year,
  }));

fs.writeFileSync("./data.json", JSON.stringify(books));

// Chaining Promises
/* 
  We can chain promises, because .then and the .catch methods return promises themselves.  The .catch will be called if either an error occurs in teh fetch or the first or second then.
*/
fetch("something")
  .then(() => "this callback is called when fetch resolves successfuly")
  .then(() => "This callback is called when the first then resolves")
  .catch((e) => console.log(e))
  .then(() => "I can also chain off a catch");

// Catching Errors
/* 
  We can catch errors in two ways, a promise takes 2 arguments, the first is the onFulfilled callback and the second is onRejectedCallback or you can catch errors using .catch on a chain of promises.
*/

function onFulfilled(res) {}

function onRejected(err) {}

new Promise((res, rej) => {
  rej();
}).then(onFulfilled, onRejected);

new Promise((res, rej) => {
  rej();
})
  .then(onFulfilled)
  .catch(onRejected);

// Combine Multiple Promises
/*
    There a variety of ways to run multiple promises together.  Promise.race, promise.all, promise.allSettled, Promise.any.  Promsie.all for example is an all or nothing approach, if any of teh promises rejects the whole promise rejects.  Promise.race resolves to either the first promise resolves or the first promise that rejects.
*/
const [promise1, promise2] = Promise.all([new Promise(), new Promise()]);

// async await
/*
    We can also handle promises using async await, which allows us to handle asyncrhonous operations in a more syncrhonous manner.  Async functions return promises.  We can catch errors using try catch statement.
*/

async function getUsers() {
  const res = await fetch("/api/users");
  const users = await res.json();
  return users;
}

async function app() {
  try {
    const users = await getUsers();
  } catch (e) {
    console.log(e);
  }
}
