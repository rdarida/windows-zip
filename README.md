# windows-zip
Zipping and unzipping on Windows.

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
### `zipSync(path, dest)`
Creates a compressed archive from specified files and directories (`path`) and save it to a .zip file at `dest`.

### `unzipSync(path, dest)`
Extracts files from a specified achive file (`path`) to the `dest` directory.

## Resources
- [Microsoft Docs: Compress-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.1)
- [Microsoft Docs: Expand-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/expand-archive?view=powershell-7.1)
- [How to create a zip archive with PowerShell?](https://stackoverflow.com/questions/1153126/how-to-create-a-zip-archive-with-powershell)
