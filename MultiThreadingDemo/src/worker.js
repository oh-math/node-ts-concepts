const { parentPort } = require("worker_threads");

let counter = 0;
for (let i = 0; i < 20_000_000_000; i++) {
  counter++;
}

parentPort.postMessage(counter); 
// 'postMessage' - sends a message to the main thread containing the...
//  ...result of the CPU-bound task stored in the counter variable.

