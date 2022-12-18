import { cpus, homedir, userInfo } from 'os';

export const os = (arg) => {
    switch (arg) {
        case '--EOL':
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