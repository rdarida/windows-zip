const { join } = require('path');
const rimraf = require('rimraf');
const { mkdirSync, readFileSync } = require('fs');

const { unzipSync } = require('../src/unzip');

const TXT = 'test data.txt';
const ZIP = 'test data.zip';
const TXT_DATA = join(__dirname, 'data', TXT);
const ZIP_DATA = join(__dirname, 'data', ZIP);
const DIST_FOLDER = join(__dirname, 'dist');
const UNZIPPED = join(__dirname, 'dist', TXT);

describe('Test unzipSync', () => {
  beforeEach(() => {
    rimraf.sync(DIST_FOLDER);
    mkdirSync(DIST_FOLDER);
  });

  test('unzipSync should be truthy', () => {
    expect(unzipSync).toBeTruthy();
  });

  test('unzip test.zip wiht unzipSync', () => {
    unzipSync(ZIP_DATA, DIST_FOLDER);
    const expected = readFileSync(TXT_DATA);
    const actual = readFileSync(UNZIPPED);
    expect(actual).toEqual(expected);
  });
});
