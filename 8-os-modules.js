// OS modules => built in modules
// Here we don't provide path name

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
