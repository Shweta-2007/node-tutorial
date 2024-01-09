# Built in modules

- We don't provide path name in require()

- If the file is not there then node will create one.
  writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
  );
  And if the file is present then node will overwrite that.

# Installation:

- npm init -y
- npm install lodash
