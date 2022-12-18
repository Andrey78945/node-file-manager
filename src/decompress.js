import { createReadStream, createWriteStream } from 'node:fs';
import { Unzip } from 'node:zlib';

export const decompress = async (fileFromPath, fileToPath) => {
    createReadStream(fileFromPath).pipe(Unzip()).pipe(createWriteStream(fileToPath));
};