import { chdir } from 'node:process';

export const cd = function (newPath) {
    try {
        chdir(newPath);
    } catch (err) {
        console.error(`Operation failed`);
    }
}