import { rename } from 'node:fs/promises';
import { resolve } from 'node:path';

export const rn = async (from, newName) => {
    try {
        const pathFrom = resolve(from);
        const dir = parse(pathFrom).dir;
        const properPath = resolve(dir, newName);
        await rename(pathFrom, properPath);
    } catch (err) {
        console.error(`Operation failed`);
    }
};