import { open } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

export const add = async function (name) {
    let filehandle;
    try {
        const filePath = resolve(cwd(), name)
        filehandle = await open(filePath, 'w');
    } catch (err) {
        console.error(`Operation failed`);
    }
    finally {
        await filehandle?.close();
    }
}
