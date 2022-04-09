const path = require("path");

console.log(path.sep); //returns '/'

const filePath = path.join("/content", "sub", "text.txt");
console.log(filePath);

//returns base of path
const base = path.basename(filePath);
console.log(base);

// returns complete absolute path from C Drive
const absolute = path.resolve(__dirname, "content", "sub", "text.txt");
console.log(absolute);
