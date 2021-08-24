// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
  if (input === undefined || input === true || input === false || input === null || input === "" || !isNaN(input) || typeof input === ('function' || 'object')) {
      return 'Hello, World!';
  } else {
      return 'Hello, ' + input + '!';
  }
}

// isFive function
function isFive(input) {
    return input === input
}

console.log(isFive());
