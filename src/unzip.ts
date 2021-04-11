import { execFileSync } from 'child_process';

/**
 * Extracts files from a specified achive (zipped) file.
 * This is a wrapper function for [Expand-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/expand-archive?view=powershell-7.1)
 * @param {string} path Specifies the path to the archive file.
 * @param {string} dest Specifies the path to the output folder.
 */
export function unzipSync(path: string, dest: string): void {
  execFileSync(
    'powershell.exe',
    [
      'Expand-Archive',
      '-Path',
      `"${path}"`,
      '-DestinationPath',
      `"${dest}"`,
      '-Force'
    ],
    {
      maxBuffer: Infinity,
      windowsHide: true
    }
  );
}
