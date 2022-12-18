import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

export const compress = async (fileFromPath, fileToPath) => {
    createReadStream(fileFromPath).pipe(createGzip()).pipe(createWriteStream(fileToPath));
};