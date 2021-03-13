/**
 * Creates a compressed archive, or zipped file, from specified files and directories.
 * This is a wrapper function for [Compress-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/compress-archive?view=powershell-7.1)
 * @param {string|string[]} path Specifies the path or paths to the files to add to the archive zipped file.
 * @param {string} dest Specifies the path to the archive output file.
 */
export declare function zipSync(path: string|string[], dest: string): void;

/**
 * Extracts files from a specified achive (zipped) file.
 * This is a wrapper function for [Expand-Archive](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.archive/expand-archive?view=powershell-7.1)
 * @param {string} path Specifies the path to the archive file.
 * @param {string} dest Specifies the path to the output folder.
 */
export declare function unzipSync(path: string, dest: string): void;