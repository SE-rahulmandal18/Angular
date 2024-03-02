console.log("application is starting");

setTimeout(() => {
  console.log("inside a callback function");
}, 2000);

setTimeout(() => {
  console.log("inside another callback function");
}, 0)


console.log("finished executing");


