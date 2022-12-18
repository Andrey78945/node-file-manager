import { basename, resolve, join } from 'node:path';
import { readdir, stat } from 'node:fs/promises';
import { cwd } from 'node:process';

export const ls = async function () {
    try {
        const folder = await readdir(resolve(cwd()));
        console.table(folder);
    } catch (err) {
        console.error(`Operation failed`);
    }
}
