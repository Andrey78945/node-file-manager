import { createReadStream, createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { createBrotliCompress } from 'node:zlib';

export const compress = async (fileFromPath, fileToPath) => {
    try {
        const stream = new createReadStream(resolve(fileFromPath));
        const outStream = createWriteStream(resolve(fileToPath + '.br'));
        outStream.on('error', function (err) {
            console.error('Invalid input of destination');
            console.error(`Operation failed`);
            outStream.end();
        });
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        stream.pipe(createBrotliCompress()).pipe(outStream);
    } catch (err) {
        console.error(`Operation failed`);
    }
};