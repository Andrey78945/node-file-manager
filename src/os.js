import { EOL, arch, cpus, homedir, userInfo } from 'os';

export const os = (arg) => {
    switch (arg) {
        case '--EOL':
            const endOfLine = EOL;
            if (endOfLine === '\n') console.log(`The Linux end of line is \/n`);
            else if (endOfLine === '\r\n') console.log(`The Windows end of line is \\r\\n`);
            break;
        case '--cpus':
            const cores = cpus();
            console.log(`Overall amount of CPUs: ${cores.length}`)
            cores.forEach((item, i) => {
                console.log(`${i + 1} Model: ${item.model.trim()}, Frequency: ${item.speed / 1000} GHz`);
            });
            break;
        case '--homedir':
            console.log(`The home directory is ${homedir()}`);
            break;
        case '--architecture':
            console.log(`The architecture is ${arch()}`);
            break;
        case '--username':
            try {
                console.log(`The current system user name is ${userInfo().username}`);
            } catch (err) {
                console.log("there is not a username");
            }
            break;
    }
}