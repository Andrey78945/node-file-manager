import { resolve } from 'node:path';
import { chdir } from 'node:process';

export const cd = function (newPath) {
    try {
        chdir(resolve(newPath));
    } catch (err) {
        console.error(`Operation failed`);
    }
}