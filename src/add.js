import { open } from 'node:fs/promises';

export const add = async function (name) {
    let filehandle;
    try {
        filehandle = await open(name, 'w');
    } catch (err) {
        console.error(`Operation failed`);
    }
    finally {
        await filehandle?.close();
    }
}
