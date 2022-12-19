import { rename } from 'node:fs/promises';
import { parse, join, resolve } from 'node:path';

export const rn = async (from, newName) => {
    try {
        const pathFrom = resolve(from);
        const dir = parse(pathFrom).dir;
        const properPath = join(dir, newName);
        await rename(pathFrom, properPath);
    } catch (err) {
        console.error(`Operation failed`);
    }
};