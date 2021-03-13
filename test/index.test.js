const { unzipSync } = require('../src');

describe('Test index', () => {
  test('unzipSync should be truthy', () => {
    expect(unzipSync).toBeTruthy();
  });
});
