//Steps for creating custom promise

//step 1
/**
 * We know promise is Object we represent future completion and failure of any asynchronous task
 * Also we kow that  promise have  3 status pending , fulfilled , reject also there is one more state settled(internal for promise)
 * So lets create Enum for promise state
 * enum PromiseState {
        PENDING = "pending",
        FULFILLED = "fulfilled",
        REJECTED = "rejected",
    }
 */

// step 2
/**
 * Lets create Generic class for Promise MyPromise and we also know some of it variables like below 
 * _state : state which will store status of promise
 * _value : Value represent when we resolve promise we get data
 * _reason : Reason represent when we reject we get whats error for rejection of promise
 * _successCallbacks → Stores all .then() handlers.
   _failureCallbacks → Stores all .catch() handlers.
   _finallyCallbacks → Stores all .finally() handlers.
 */

//step 3
/**
 * Now we know that  Promise accept executor function .i.e
 * let p = new Promise((resolve,reject)=>{
 *  resolve(10)
 * })
 * here (resolve,reject)=>{
 *  resolve(10)
 * } this is executor function
 * 
 * so we also  need to create executor function which accept our resolve reject functions
 * we will do this with constructor like below
 * 
 *   constructor(executor: (resolve: (value: T) => void, reject: (reason: K) => void) => void) {
        try {
            executor(this._resolve.bind(this), this._reject.bind(this));
        } catch (error) {
            this._reject(error as K);
        }
    }
    here we bind our _resolve ad _reject function with this to remenber resolve function its instance

    Why do we pass an executor function?

    The executor starts the async operation immediately.
    It takes two functions:
        resolve(value: T): To fulfill the promise.
        reject(reason: K): To reject the promise.

        Why do we use bind(this)?

    The this keyword inside _resolve() and _reject() should refer to the current instance of MyPromise.
    bind(this) ensures the functions correctly update this._state, even when used inside the executor.

Why do we use a try-catch block?

    If the executor function throws an error, we automatically reject the promise.
 */

// Step 4
/**
 * Now we implement our resolve function resolve fuction accept any value,
 * First it checks if state pf promise is already fullfiled or reject if so then it just return back
 * If not that is promise is in pending state then it assign value to instance variable i.e. _value make state as fullfilled
 * Then it try to execute all successcallbacks and Finally callbacks
 * 
 * Why do we check if (this._state !== PromiseState.PENDING)?

    A promise can only resolve/reject once.
    If it's already resolved or rejected, we ignore further calls.

 *   private _resolve(value: T) {
        if (this._state !== PromiseState.PENDING) return;
        this._state = PromiseState.FULFILLED;
        this._value = value;
        this._successCallbacks.forEach((cb) => cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }

    Why do we store the resolved value?

    The resolved value is needed for .then() callbacks.

Why do we call all .then() handlers?

    If .then() was registered before resolution, we execute it immediately.
 */

//Step 5
/**
 * Same as step  4 here we implemet reject function we pass reason as parameter 
 * then we check if promise is already resolved or rejected thenn we just return
 * If not then we store resont ad change state to rejected
 * And call all rejected callback ad finally callbacks
 *   private _reject(reason: K): void {
        if (this._state !== PromiseState.PENDING) return;
        this._state = PromiseState.REJECTED;
        this._reason = reason;
        this._failureCallbacks.forEach((cb) => cb(reason));
        this._finallyCallbacks.forEach((cb) => cb());
    }
 * 
 */

// Step 6
/**
 * Now we have to implemet then we know that then takes callback function as argument ad value as parameter for callback function
 * so  here we first need to sure that our promise is resolve and only we have to call callback of thenn function
 * so first we check _state  is fulfilled or not and value is presennt inn value variable or not
 * if both meets then we call callback fuction of  then
 * if not then we add callback funnction of then to successCallback
 *   public then(handler: (value: T) => void): MyPromise<T, K> {
    if (this._state == PromiseState.FULFILLED && this._value !== undefined) {
      handler(this._value);
    } else {
      this._successCallbacks.push(handler);
    }
    return this;
  }

  here we need to return innstance of MyPromise bez we wanted to do chainig of then or catch

  Why do we check if (this._state === PromiseState.FULFILLED)?

    If the promise has already resolved, we immediately call the handler.

Why do we push the handler into _successCallbacks?

    If the promise is still pending, we store .then() handlers to execute later.
 */

// Step  7

/**
 * We do same for catch here in catch callback function we pass reason 
 * all other process we do same as then
 * 
 * Why do we store .catch() handlers?

    If rejection happens after .catch() is called, we must execute it later.
 */

enum PromiseState {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

class MyPromise<T, K> {
  private _state: PromiseState = PromiseState.PENDING;
  private _value?: T;
  private _reason?: K;
  private _successCallbacks: ((value: T) => void)[] = [];
  private _failureCallbacks: ((reason: K) => void)[] = [];
  private _finallyCallbacks: (() => void)[] = [];

  constructor(
    executor: (resolve: (value: T) => void, reject: (reason: K) => void) => void
  ) {
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error as K);
    }
  }

  private _resolve(value: T) {
    if (this._state !== PromiseState.PENDING) return;
    this._state = PromiseState.FULFILLED;
    this._value = value;
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  private _reject(reason: K): void {
    if (this._state !== PromiseState.PENDING) return;
    this._state = PromiseState.REJECTED;
    this._reason = reason;
    this._failureCallbacks.forEach((cb) => cb(reason));
    this._finallyCallbacks.forEach((cb) => cb());
  }

  public then(handler: (value: T) => void): MyPromise<T, K> {
    if (this._state == PromiseState.FULFILLED && this._value !== undefined) {
      handler(this._value);
    } else {
      this._successCallbacks.push(handler);
    }
    return this;
  }

  public catch(handler: (reason: K) => void): MyPromise<T, K> {
    if (this._state === PromiseState.REJECTED && this._reason !== undefined) {
      handler(this._reason);
    } else {
      this._failureCallbacks.push(handler);
    }
    return this;
  }

  public finally(handler: () => void): MyPromise<T, K> {
    if (this._state !== PromiseState.PENDING) {
      handler();
    } else {
      this._finallyCallbacks.push(handler);
    }
    return this;
  }
}

const p = new MyPromise((resolve, reject) => {
  let age = 10;
  if (age > 18) resolve("You are eligible for vote");
  else reject("You are not eligible");
});

p.then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("hello"));
