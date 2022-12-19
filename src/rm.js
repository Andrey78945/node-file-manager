import { rm as Delete } from 'node:fs/promises';
import { resolve } from 'node:path';

export const rm = async (filePath) => {
    try {
        await Delete(resolve(filePath));
    } catch (err) {
        console.error(`Operation failed`);
    }
};

export default rm;