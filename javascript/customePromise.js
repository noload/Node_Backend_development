const PromiseState = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  constructor(executor) {
    this._state = PromiseState.PENDING;
    this._value = undefined;
    this._reason = undefined;
    this._successCallbacks = [];
    this._failureCallbacks = [];
    this._finallyCallbacks = [];

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _resolve(value) {
    if (this._state !== PromiseState.PENDING) return;
    this._state = PromiseState.FULFILLED;
    this._value = value;
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  _reject(reason) {
    if (this._state !== PromiseState.PENDING) return;
    this._state = PromiseState.REJECTED;
    this._reason = reason;
    this._failureCallbacks.forEach((cb) => cb(reason));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  then(handler) {
    if (this._state === PromiseState.FULFILLED) {
      handler(this._value);
    } else {
      this._successCallbacks.push(handler);
    }
    return this;
  }

  catch(handler) {
    if (this._state === PromiseState.REJECTED) {
      handler(this._reason);
    } else {
      this._failureCallbacks.push(handler);
    }
    return this;
  }

  finally(handler) {
    if (this._state !== PromiseState.PENDING) {
      handler();
    } else {
      this._finallyCallbacks.push(handler);
    }
    return this;
  }
}

const p = new MyPromise((resolve, reject) => {
  let age = 19;
  if (age > 18) resolve("You are eligible to vote");
  else reject("You are not eligible");
});

p.then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("hello"));
