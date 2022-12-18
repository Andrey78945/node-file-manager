import { createReadStream, createWriteStream } from 'node:fs';
import { parse, resolve } from 'node:path';

export const cp = async (from, to) => {
    try {
        const pathFrom = resolve(from);
        const nameFrom = parse(pathFrom).base;
        const stream = new createReadStream(pathFrom);
        const outStream = createWriteStream(resolve(to + nameFrom));
        outStream.on('error', function (err) {
            console.error('Invalid input of destination');
            console.error(`Operation failed`);
            outStream.end();
        });
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        await stream.pipe(outStream);
    } catch (err) {
        console.error(`Operation failed`);
    }
};