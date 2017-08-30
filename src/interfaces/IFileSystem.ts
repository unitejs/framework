/**
 * Interface for file system abstraction.
 */
export interface IFileSystem {
    pathCombine(pathName: string, additional: string): string;
    pathDirectoryRelative(pathName1: string, pathName2: string): string;
    pathFileRelative(pathName1: string, pathName2: string): string;
    pathAbsolute(pathName: string): string;
    pathGetDirectory(pathName: string): string;
    pathGetFilename(pathName: string): string;

    pathToWeb(pathName: string): string;

    directoryExists(directoryName: string): Promise<boolean>;
    directoryCreate(directoryName: string): Promise<void>;
    directoryDelete(directoryName: string): Promise<void>;
    directoryGetFolders(directoryName: string): Promise<string[]>;
    directoryGetFiles(directoryName: string): Promise<string[]>;

    fileExists(directoryName: string, fileName: string): Promise<boolean>;

    fileWriteText(directoryName: string, fileName: string, contents: string, append?: boolean): Promise<void>;
    fileWriteLines(directoryName: string, fileName: string, contents: string[], append?: boolean): Promise<void>;
    fileWriteBinary(directoryName: string, fileName: string, obj: Uint8Array, append?: boolean): Promise<void>;
    fileWriteJson(directoryName: string, fileName: string, obj: any): Promise<void>;

    fileReadText(directoryName: string, fileName: string): Promise<string>;
    fileReadLines(directoryName: string, fileName: string): Promise<string[]>;
    fileReadBinary(directoryName: string, fileName: string): Promise<Uint8Array>;
    fileReadJson<T>(directoryName: string, fileName: string): Promise<T>;

    fileDelete(directoryName: string, fileName: string): Promise<void>;
}
