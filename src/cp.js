import { createReadStream, createWriteStream } from 'node:fs';
import { parse, resolve, join } from 'node:path';

export const cp = async (from, to) => {
    try {
        const pathFrom = resolve(from);
        const nameFrom = parse(pathFrom).base;
        const stream = new createReadStream(pathFrom);
        const outStream = createWriteStream(join(resolve(to), nameFrom));
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

export default cp;