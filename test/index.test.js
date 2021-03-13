const { hello } = require('../src');

describe('Test index', () => {
  test('hello should be truthy', () => {
    expect(hello).toBeTruthy();
  });

  test('should send a hello to the World', () => {
    expect(hello()).toEqual('Hello, World!');
  });

  test('should send a hello to the Developer', () => {
    const result = hello('Developer');
    expect(result).not.toEqual('Hello, World!');
    expect(result).toEqual('Hello, Developer!');
  });
});
