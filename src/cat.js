import { createReadStream } from 'node:fs';

export const cat = async function (pathToFile) {
    try {
        const stream = new createReadStream(pathToFile);
        stream.pipe(process.stdout);
        console.log('\n');
    } catch (err) {
        console.error(`Operation failed`);
    }
}

