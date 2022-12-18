import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const hash = async (filePath) => {
    const { createHash } = await import('node:crypto');
    try {
        const data = await readFile(resolve(filePath));
        const hash = createHash('sha256')
            .update(data)
            .digest('hex');
        console.log(hash);
    } catch (err) {
        console.error(`Operation failed`);
    }

};