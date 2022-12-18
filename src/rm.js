import { rm as Delete } from 'node:fs/promises';

export const rm = async (filePath) => {
    try {
        await Delete(filePath);
    } catch {
        console.error(`Operation failed`);
    }
};