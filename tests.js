// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when sayHello("Alex")', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when sayHello("Pat")', function () {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!" when sayHello("World")', function () {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(true)', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    })
    it('should return the string "Hello, World!" when sayHello(false)', function () {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(null)', function () {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello("")', function (){
        expect(sayHello('')).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(number)', function (){
       expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello("number")', function (){
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(function)', function (){
       expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(array)', function (){
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when sayHello(object)', function (){
        expect(sayHello()).toBe('Hello, World!');
    });
});

// Unit tests for isFive function
describe('isFive', function () {
    it('should be a defined function', function (){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter input', function (){
        expect(isFive()).toBe(false);
    });
    it('should return true with input 5', function (){
       expect(isFive(5)).toBe(true);
    });
    it('should return true with input "5"', function (){
        expect(isFive('5')).toBe(true);
    })
});

// Unit tests for isEven function
describe('isEven', function (){
   it('should be a defined function', function (){
       expect(typeof isEven).toBe('function');
   });
   it('should return a boolean no matter input', function (){
      expect(isEven()).toBe(false);
   });
   it('should return true when called with 2', function (){
       expect(isEven(2)).toBe(true);
   });
    it('should return true when called with -4', function (){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when called with 3', function (){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when called with "banana"', function (){
        expect(isEven('banana')).toBe(false);
    });
    it('should return true when called with "8"', function (){
        expect(isEven('8')).toBe(true);
    });
    it('should be false when called with Infinity', function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should be false when called with a boolean like true or false', function (){
        expect(isEven(true)).toBe(false);
    });
});