import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

export const compress = async (fileFromPath, fileToPath) => {
    try {
        const stream = new createReadStream(fileFromPath);
        const outStream = createWriteStream(fileToPath);
        outStream.on('error', function (err) {
            console.error('Invalid input of destination');
            console.error(`Operation failed`);
            outStream.end();
        });
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        stream.pipe(createGzip()).pipe(outStream);
    } catch (err) {
        console.error(`Operation failed`);
    }
};