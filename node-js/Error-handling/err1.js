const fs = require("fs");

try {
  fs.readFile("file.txt", function (err, contents) {
    if (err) {
      console.log("something went wrong" + err.message);
    }
    else
      console.log(contents);


  });

} catch (e) {
  console.log("error occered" + e);
}

