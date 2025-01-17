// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

describe('hello', function() {
    it('should be a defined function', function () {
        expect(typeof hello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof hello()).toBe("string");
    });
    it('should return the string "Hello!" when executed', function () {
        expect(hello()).toBe("Hello!");
    });
    it("should never return 'undefined' when called", function () {
        expect(hello()).not.toBe(undefined);
    });
})

