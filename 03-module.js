// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
const sayHi = require("./05-utils");

const data = require("./06-alternativeSyntax_module");
console.log(data);

require("./07-mindGrenade");

// sayHi("Prachet");
// sayHi(names.john);
// sayHi(names.peter);
