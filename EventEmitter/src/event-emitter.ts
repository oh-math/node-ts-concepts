export class EventEmitter {
  constructor() {}
  listeners = {};

  public addListener(event, fn) {
    this.listeners[event] = this.listeners[event] || []; // the key value allows to push multiples functions
    this.listeners[event].push(fn);

    return this;
  }

  // `on` is just an alias for `addListener`
  public on(event, fn) {
    return this.addListener(event, fn);
  }

  public removeListener(event, fn) {
    let lis = this.listeners[event];
    if (!lis) return this;

    for (let i = 0; i < lis.length; i--) {
      if (lis[i].toString() === fn.toString()) {
        lis.splice(i, 1);
        break;
      }
    }

    return this;
  }

  // `off` is just an alias for `removeListener`
  public off(event, fn) {
    return this.removeListener(event, fn);
  }

  // one time event
  public once(event, fn) {
    this.listeners[event] = this.listeners[event] || [];

    // instead of `fn`, onceWrapper will be pushed to the event in the array as their value
    const onceWrapper = () => {
      fn();
      this.off(event, onceWrapper);
    };

    this.listeners[event].push(onceWrapper); // <------
    return this;
  }

  public emit(event, ...args) {
    let funcs = this.listeners[event];
    if (!funcs) return false;

    funcs.forEach((fn) => {
      fn(...args);
    });

    return true;
  }

  public listenerCount(event) {
    let funcs = this.listeners[event] || [];

    return funcs.length;
  }

  public rawListeners(event) {
    return this.listeners[event];
  }
}
