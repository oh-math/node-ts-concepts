const process_name = process.argv.slice(2)[0];

count = 0;
while (true) {
  count++;
  if (count == 2000 || count == 4000) {
    console.log(`${process_name}: ${count}`);
  }
}


// 1. Run 'node process.js A &' to see infinite loop run with 'A' alias and show her ID on the process list
// 2. Run 'ps |grep node' to see all your node process 
// 3. Run 'sudo kill -9 `pgrep node`' to kill all node process