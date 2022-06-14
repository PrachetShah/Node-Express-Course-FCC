// FS - File System Module
// Sync Methods
const { readFileSync, writeFileSync, unlinkSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// If file is there it will rewrite whole file, if file is not there then node will create that file
// if flag:a is added , then it will append the file
// writeFileSync(pathname, content, {flag: optional})
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}\n`,
  { flag: "a" }
);

// Delete a File unlinkSync(pathname)
unlinkSync("./content/big.txt");
