const request = require("request"),
  fibonacci = require("fibonacci"),

  fs = require("fs");


process.nextTick(() => {
  process.stdout.write("NextTic #1\n");
});


fs.readFile("./index.js", (err, data) => {
  process.stdout.write("1. I/O Polling...\n");
});
request.get("http://goggle.com", (err, res, body) => {
  process.stdout.write("2: System Polling....\n")
})
setImmediate(() => {
  process.stdout.write("3: Set Immediate phase...\n");
});
setTimeout(() => {
  process.stdout.write("4: Timers...\n");

}, 0);
process.stdout.write("5: Fibonacci(20): " + fibonacci.iterate(20).number + " - Callback")
process.nextTick(() => {
  process.stdout.write("NextTick #2\n");
})