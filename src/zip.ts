import { execFileSync } from 'child_process';

/**
 * Creates a compressed archive, or zipped file, from specified files and directories.
 * This is a wrapper function for [Compress-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.1)
 * @param {string|string[]} path Specifies the path or paths to the files to add to the archive zipped file.
 * @param {string} dest Specifies the path to the archive output file.
 */
export function zipSync(path: string | string[], dest: string): void {
  if (!Array.isArray(path)) {
    path = [path];
  }

  execFileSync(
    'powershell.exe',
    [
      'Compress-Archive',
      '-Path',
      path.map((p) => `"${p}"`).join(', '),
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
