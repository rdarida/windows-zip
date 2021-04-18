<h1 align="center">windows-zip</h1>
<p align="center">Zipping and unzipping on Windows.</p>
<p align="center">
  <a href="https://github.com/rdarida/windows-zip/actions/workflows/release.yml" target="_blank" alt="Release Action">
    <img src="https://github.com/rdarida/windows-zip/actions/workflows/release.yml/badge.svg" alt="Release Badge">
  </a>

  <a href="https://sonarcloud.io/dashboard?id=rdarida_windows-zip" target="_blank" alt="SonarCloud">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=rdarida_windows-zip&metric=alert_status" alt="Quality Gate Status">
  </a>

  <img src="https://david-dm.org/rdarida/windows-zip/status.svg" alt="dependencies">
  <img src="https://david-dm.org/rdarida/windows-zip/dev-status.svg" alt="devDependencies">
</p>
<hr>

## How was it made
- [Project Bootstrap](https://medium.com/weekly-webtips/publishing-a-real-nodejs-package-project-bootstrap-9c2b7c699237)
- [Implementation and Testing](https://medium.com/weekly-webtips/publishing-a-real-nodejs-package-implementation-and-tests-b2ac1486d96)
- [Code Quality Improvements](https://medium.com/weekly-webtips/publishing-a-real-nodejs-package-code-quality-improvements-b86b638df3cf)
- [Publishing with GitHub Actions](https://medium.com/weekly-webtips/publishing-a-real-nodejs-package-publishing-with-github-actions-237be5b5eaf6)

## Install
```
npm install windows-zip
```

## Usage

### zipSync
```js
const { zipSync } = require('windows-zip');

const path = [
  '<path to the first source file or folder>',
  '<path to the second source file or folder>'
];

const dest = '<path and filename of the output zip file>';

zipSync(path, dest);
```

### unzipSync
```js
const { unzipSync } = require('windows-zip');

const path = '<path to the source zip file>';
const dest = '<path to the output folder>';

unzipSync(path, dest);
```

## API
This package requires **PowerShell 5+**.

### `zipSync(path, dest)`
Creates a compressed archive from specified files and directories (`path`) and save it to a .zip file at `dest`.

### `unzipSync(path, dest)`
Extracts files from a specified achive file (`path`) to the `dest` directory.

## Resources
- [Microsoft Docs: Compress-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.1)
- [Microsoft Docs: Expand-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/expand-archive?view=powershell-7.1)
- [How to create a zip archive with PowerShell?](https://stackoverflow.com/questions/1153126/how-to-create-a-zip-archive-with-powershell)
- [Using PowerShell to Create ZIP Archives and Unzip Files](https://blog.netwrix.com/2018/11/06/using-powershell-to-create-zip-archives-and-unzip-files/)
- [Solution for the husky bug](https://github.com/typicode/husky/issues/896#issuecomment-795992717)
