import { EventEmitter } from "./event-emitter";

const event = new EventEmitter();

event.on("foo", () => {
  console.log("Foo worked");
});
event.on("foo", () => {
  console.log("Foo2 worked");
});

event.emit("foo");

//---------------------------------------------------------------

event.once("bar", () => {
  console.log("Bar worked");
});

event.emit("bar");
event.emit("bar"); // <-------- shouldn't work

//---------------------------------------------------------------

const fn = () => console.log("Hello World");

event.on("far", fn);

event.off("far", fn);
event.emit("far"); // <-------- shouldn't work

//---------------------------------------------------------------

console.log(event.listenerCount("foo")); // should return the number of functions
console.log(event.rawListeners("foo").toString()); // should return functions
