const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event
customEmitter.on("response", (name, id) => {
  console.log(`data received with name: ${name} and id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Second will also run if emitter is called`);
});

// Multiple Emitters can run simultaneously, this will output both first and second
customEmitter.emit("response", "prachet", 19);
