import { createReadStream, createWriteStream } from 'node:fs';

export const cp = (from, to) => {
    try {
        const stream = new createReadStream(from);
        const outStream = createWriteStream(to);
        outStream.on('error', function (err) {
            console.error('Invalid input of destination');
            console.error(`Operation failed`);
            outStream.end();
        });
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        stream.pipe(outStream);
    } catch (err) {
        console.error(`Operation failed`);
    }
};