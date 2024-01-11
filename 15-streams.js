const fs = require("fs");

const readStream = fs.createReadStream("./content/streams.txt", "utf-8");
const writeStream = fs.createWriteStream("./content/streams2.txt");
// It will create a new file called streams2.txt and write everything in that file which comes in chunk.

// readStream.on("data", (chunk) => {
//   console.log("****NEW CHUNK****");
//   console.log(chunk);
//   // Here you will get small chunk of data at a time so that you can start working on.

//   writeStream.write("\nNEWCHUNK\n");
//   writeStream.write(chunk);
// });

// You can do the same thing with the help of piping also.
// When we use a pipe it must be from the readable stream to a writeable one.
readStream.pipe(writeStream);
