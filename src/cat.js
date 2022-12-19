import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';

export const cat = async function (pathToFile) {
    try {
        const stream = new createReadStream(resolve(pathToFile));
        stream.on('error', function (err) {
            console.error('Invalid input of source');
            console.error(`Operation failed`);
        });
        stream.pipe(process.stdout);
        console.log('\n');
    } catch (err) {
        console.error(`Operation failed`);
    }
}

