import { createReadStream } from 'node:fs';

export const cat = async function (pathToFile) {
    try {
        const stream = new createReadStream(pathToFile);
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

