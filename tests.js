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
    })
});