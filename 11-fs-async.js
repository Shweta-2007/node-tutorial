const { readFile, writeFile, mkdir, existsSync, rmdir, unlink } = require("fs");

console.log("start");
// Read Files
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // Write Files
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

// Directories  => It will create folder inside content folder with the name "assets"
// First of all you should check whether that file exists or not, If exists then it will delete that folder and if not exists, It will add that folder
if (!existsSync("./content/assets")) {
  mkdir("./content/assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  rmdir("./content/assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// Deleting Files
if (existsSync("./content/deleteMe.txt")) {
  unlink("./content/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
