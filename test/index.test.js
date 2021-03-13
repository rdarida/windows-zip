const { join } = require('path');
const rimraf = require('rimraf');
const { mkdirSync, readFileSync } = require('fs');

const { zipSync, unzipSync } = require('../src');

const TXT1 = 'test data 1.txt';
const TXT2 = 'test data 2.txt';
const ZIP = 'test data.zip';
const TXT1_DATA = join(__dirname, 'data', TXT1);
const TXT2_DATA = join(__dirname, 'data', TXT2);
const ZIP_DATA = join(__dirname, 'data', ZIP);
const DIST_FOLDER = join(__dirname, 'dist');
const UNZIPPED1 = join(__dirname, 'dist', TXT1);
const UNZIPPED2 = join(__dirname, 'dist', TXT2);
const ZIPPED = join(__dirname, 'dist', ZIP);

describe('Test index', () => {
  beforeEach(() => {
    rimraf.sync(DIST_FOLDER);
    mkdirSync(DIST_FOLDER);
  });

  test('zipSync should be truthy', () => {
    expect(zipSync).toBeTruthy();
  });

  test('zip "[test data 1.txt, test data 2.txt]" with zipSync', () => {
    zipSync([TXT1_DATA, TXT2_DATA], ZIPPED);
    unzipSync(ZIPPED, DIST_FOLDER);

    let expected = readFileSync(TXT1_DATA);
    let actual = readFileSync(UNZIPPED1);
    expect(actual).toEqual(expected);

    expected = readFileSync(TXT2_DATA);
    actual = readFileSync(UNZIPPED2);
    expect(actual).toEqual(expected);
  });

  test('unzipSync should be truthy', () => {
    expect(unzipSync).toBeTruthy();
  });

  test('unzip "test data.zip" with unzipSync', () => {
    unzipSync(ZIP_DATA, DIST_FOLDER);

    let expected = readFileSync(TXT1_DATA);
    let actual = readFileSync(UNZIPPED1);
    expect(actual).toEqual(expected);

    expected = readFileSync(TXT2_DATA);
    actual = readFileSync(UNZIPPED2);
    expect(actual).toEqual(expected);
  });

  afterAll(() => {
    rimraf.sync(DIST_FOLDER);
  });
});
