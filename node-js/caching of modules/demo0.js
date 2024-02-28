require("./mydata");
require("./data");

/* since you are trying to load same file more than once,

second require statement will not be executed... as require
automatically cache the first file...


*/