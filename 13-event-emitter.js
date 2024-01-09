const EventEmitter = require("events");

// We create an instance from the class we get from event modules, We have two methods: in method and emit method. In the in method, we pass in the string, that is going to be the name of the event and the call back function.
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received by ${name} - ${id}`);
});

customEmitter.on("response", () => {
  console.log(` Other data received`);
});

customEmitter.emit("response", "john", 14);
// Here same string should be passed as event.
// We first listen to our event then emit orders. So the order matters.
// If we place line no 14 to line no 5, then there will be nothing in the console.
