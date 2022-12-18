import { cpus } from 'os';

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
            break;
        case '--architecture':
            break;
    }
}