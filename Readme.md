# Module 9 Assignment

## JavaScript Asynchronous Programming & DOM Project Assignment

This assignment covers the theoretical concepts of JavaScript Asynchronous Programming with simple examples.

---

# 1. Execution Context

## What is Execution Context?

Execution Context is the environment where JavaScript code is executed.

It stores:

- Variables
- Functions
- Scope information
- The value of `this`

JavaScript creates an execution context whenever code runs.

---

## Global Execution Context (GEC)

The Global Execution Context is created first when the JavaScript file starts running.

### Example

```javascript
let name = "Mahira";

function greet() {
  console.log("Hello");
}
```

Here, `name` and `greet()` are stored in the Global Execution Context.

---

## Function Execution Context (FEC)

Whenever a function is called, JavaScript creates a new execution context for that function.

### Example

```javascript
function add(a, b) {
  return a + b;
}

add(5, 3);
```

---

## Creation Phase

During this phase:

1. Memory is allocated.
2. Variables are initialized with `undefined`.
3. Functions are stored completely.

### Example

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined;
```

---

## Execution Phase

During this phase:

- Code executes line by line.
- Variables receive actual values.
- Functions are executed.

### Example

```javascript
var a = 10;

console.log(a);
```

Output:

```javascript
10;
```

---

# 2. Event Loop

## What is Event Loop?

The Event Loop is a mechanism that handles asynchronous operations in JavaScript.

It checks:

- Is the Call Stack empty?
- If yes, move tasks from Callback Queue to Call Stack.

---

## Why JavaScript is Single Threaded?

JavaScript has only one Call Stack.

Therefore:

- Executes one task at a time.
- Cannot execute multiple tasks simultaneously.

So JavaScript is called **Single Threaded**.

---

## Relationship among Call Stack, Web APIs, Callback Queue and Event Loop

1. Code enters Call Stack.
2. Asynchronous operations go to Web APIs.
3. After completion, callbacks move to Callback Queue.
4. Event Loop checks the Call Stack.
5. If Call Stack is empty, callbacks move to Call Stack.

### Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Output:

```javascript
Start;
End;
Hello;
```

---

# 3. setTimeout() and setInterval()

## What is setTimeout()?

`setTimeout()` executes a function once after a specified delay.

### Syntax

```javascript
setTimeout(function, milliseconds);
```

### Example

```javascript
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

---

## What is setInterval()?

`setInterval()` executes a function repeatedly after a fixed interval.

### Syntax

```javascript
setInterval(function, milliseconds);
```

### Example

```javascript
setInterval(() => {
  console.log("Hello");
}, 1000);
```

---

## Difference between setTimeout() and setInterval()

| setTimeout()               | setInterval()            |
| -------------------------- | ------------------------ |
| Executes once              | Executes repeatedly      |
| Used for delayed execution | Used for repeated tasks  |
| Stops automatically        | Requires clearInterval() |

---

## Print "Hello World" after 3 seconds

```javascript
setTimeout(() => {
  console.log("Hello World");
}, 3000);
```

---

## Digital Clock using setInterval()

```javascript
setInterval(() => {
  const now = new Date();

  console.log(now.toLocaleTimeString());
}, 1000);
```

---

# 4. Callback Functions

## What is a Callback Function?

A Callback Function is a function passed as an argument to another function.

### Example

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function process(callback) {
  callback("Mahira");
}

process(greet);
```

---

## Why are Callbacks used?

Callbacks are used for:

- Asynchronous programming
- Event handling
- Executing code after another task completes

---

## Function Receiving Another Function

```javascript
function execute(fn) {
  fn();
}

function sayHello() {
  console.log("Hello");
}

execute(sayHello);
```

Output:

```javascript
Hello;
```

---

# 5. Promise

## What is a Promise?

A Promise is an object representing the completion or failure of an asynchronous operation.

---

## Promise States

### Pending

The operation is still running.

### Fulfilled

The operation completed successfully.

Example:

```javascript
resolve("Success");
```

### Rejected

The operation failed.

Example:

```javascript
reject("Error");
```

---

## Promise Resolves After 2 Seconds

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});
```

---

## Handle Success and Error

```javascript
myPromise

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });
```

---

# 6. Async / Await

## What is async?

`async` makes a function return a Promise automatically.

### Example

```javascript
async function hello() {
  return "Hello";
}
```

---

## What is await?

`await` waits for a Promise to finish.

### Example

```javascript
const result = await promise;
```

---

## Advantages of async/await

- Easy to read
- Looks like synchronous code
- Avoids multiple `.then()`
- Better error handling

---

## Promise Example

```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
});
```

---

## Async/Await Version

```javascript
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function loadData() {
  const data = await getData();

  console.log(data);
}

loadData();
```

---

## Author

**Name:** Your Name
**Course:** JavaScript Asynchronous Programming & DOM
**Module:** Module 9 Assignment
