// Synchronous Programming
/* 
    JavaScript is a single threaded language, it can only do one thing at a time.  Your program is executed line by line.
*/

function greeting(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
}
const firstName = "Alan";
const lastName = "Ibarra";
const fullName = greeting(firstName, lastName);

// Long running functions
/* 
    Since JavaScript, is single threaded, if you have a long running function it can block the thread and nothing else can be processed.
*/

// So, in this example, if the fibonnaci number is large it will take a while for the function to resolve.
function fibonacciSequence(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

// Event Handlers
/* 
    Event handlers are asynchronous in that they are not called right away, they are invoked when the certain event happens.
*/
async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  })
    .then((res) => res.json())
    .then(data);
}
const form = document.createElement("form");
const usernameInput = document.createElement("input");
const passwordInput = document.createElement("input");
form.append([usernameInput, passwordInput]);
form.addEventListener("submit", handleSubmit);

// Callbacks
/* 
    Callbacks are just functions passed to other functions who invoke them.  Callbacks can get confusing if you nest multiple of them, aka callback hell.
*/
const cb = (arg) => arg * 2;
// we pass a callback to map, and map calls the callback
const multiplyBy2 = [1, 2, 3].map(cb);
// how it works underhood
Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};
