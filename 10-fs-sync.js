const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// create a new file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

// update the file
writeFileSync("./content/first.txt", "This is the updated text!!");
