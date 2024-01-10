/* 
    The promise constructor takes an executor functtion that is executed synchronously.  The function takes two arguments a resolve function and a reject function.
*/

// Sleep function
/* 
    We can create a sleep function using the Promise constructor.  Useful, in in situation where you want to add some artifical delay.
*/

function sleep(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

sleep(1000).then(() => console.log("hello"));

// Async await
async function getUsers(userId) {
  await sleep(1000);
  const users = fetch(`users/${userId}`);
}
