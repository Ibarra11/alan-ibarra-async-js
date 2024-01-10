/* 
    Workers
        JavaScript is a single threaded language, which means that it can only do one thing at a time.  If some program is taking a long time to do something, than it can prevent other work from being done.  With service workers, we can offload data-intensive work to a dedicated thread.  The service worker and the main thread don't share any variables or DOM state.  They can only communicate through a messaging protocol.
*/

// There are three types of workers
//dedicated workers
// shared workers
// service workers

// Creating a worker
const worker = new Worker("file path");

// sending messages to worker
worker.postMessage({
  command: "generate",
  data,
});

// the worker can also send a message back to the main thread using postMessage(data)
