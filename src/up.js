import { chdir } from 'node:process';

export const up = function () {
    try {
        chdir('..');
    } catch (err) {
        console.error(`chdir: ${err}\n`);
    }
}
