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
function isFive(number) {
    return number == 5;
}

// isEven function
function isEven(number){
    return number % 2 === 0;
}