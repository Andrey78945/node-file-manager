import { rename } from 'node:fs/promises';

export const rn = async (filePath, newName) => {
    try {
        await rename(filePath, properPath);
    } catch (err) {
        console.error(`Operation failed`);
    }
};