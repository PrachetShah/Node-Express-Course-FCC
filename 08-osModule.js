//Importing built-in os module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns system uptime in seconds
console.log(`The System Uptime is: ${os.uptime()} seconds`);

//other methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMeme: os.freemem(),
};

console.log(currentOS);
