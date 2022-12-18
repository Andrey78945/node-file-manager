import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { Unzip } from 'node:zlib';

export const decompress = async (fileFromPath, fileToPath) => {
    try {
        const stream = new createReadStream(resolve(fileFromPath));
        const outStream = createWriteStream(resolve(fileToPath));
        outStream.on('error', function (err) {
            console.error('Invalid input of destination');
            console.error(`Operation failed`);
            outStream.end();
        });
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        stream.pipe(Unzip()).pipe(outStream);
    } catch (err) {
        console.error(`Operation failed`);
    }
};