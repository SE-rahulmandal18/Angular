
var fs=require("fs");

var contents =  fs.readFileSync('testfile.txt', 'utf-8');
console.log("trying to do something");

console.log(contents);

console.log("I am printed first");


