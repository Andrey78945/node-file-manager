import { readFile } from 'node:fs/promises';

export const hash = async (filePath) => {
    const { createHash } = await import('node:crypto');
    try {
        const data = await readFile(filePath)
        const hash = createHash('sha256')
            .update(data)
            .digest('hex');
        console.log(hash);
    } catch (err) {
        console.error(`Operation failed`);
    }

};