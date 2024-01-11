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
- Installing dev dependency: npm install nodemon --save-dev
- dev dependencies are used when we are creating the app, while in production we just share the dependencies app is actually using, not that which we are using while we develop the app.

- "dependencies": {
  "lodash": "^4.17.21"
  },

  - First no is major change => If 4 changes to 5 then it will have a breaking changes
    second one is minor one => If 17 changes to 18, there will not be any breaking changes
    last one is for bugs.

- Streams: We get small packages of data come to us at a time so that we can start using them straight away.

# Server

- When we type a domain name into a browser and hit enter, it will find the IP address associated with it and then it will use that to find the computer hosting the website and communicate with that and this way it can send requests and get back responses to and from it.
