const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;
const THREAD_COUNT = 4;

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("This page is non-blocking");
});

app.get("/blocking", async (req, res) => {
  const workerPromises = []; // Array that will store workers promises

  for (let i = 0; i < THREAD_COUNT; i++) { // Loop that will push 4 unresolved promises and consequently create 4 threads (4 worker instances)
    workerPromises.push(createWorker());
  }

  // Groups promises coming from the array 'workerPromises' that will resolve only when all promises are resolved
  const thread_results = await Promise.all(workerPromises);

  const total = 
    thread_results[0] +
    thread_results[1] +
    thread_results[2] +
    thread_results[3]; // Sum the total values coming from the array of thread_results

  res.status(200).send(`result is ${total}`);
});

function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./four_workers.js", {
      workerData: { thread_count: THREAD_COUNT },
    }); // 1. Instance of worker that will be created from the given path
        // 2. Set propertie thread_count to loop control (see on 'four_workers.js')

    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", (msg) => {
      reject(`An error ocurred: ${msg}`);
    });
  });
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
