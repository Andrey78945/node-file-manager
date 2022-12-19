import { resolve, join } from 'node:path';
import { readdir } from 'node:fs/promises';
import { cwd } from 'node:process';
import { stat } from 'node:fs';

export const ls = async function () {
    try {
        const folderPath = resolve(cwd());
        const folder = await readdir(folderPath);
        console.table(folder);
    } catch (err) {
        console.error(`Operation failed`);
    }
}
