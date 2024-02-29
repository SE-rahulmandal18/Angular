var fs=require("fs");

fs.readFile('testfile.txt', 'utf-8', function(err, data)
{
  console.log("trying to do something while file read us in progress");
  console.log(data);
});

console.log("I am printed first");