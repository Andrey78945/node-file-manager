import { homedir } from 'node:os';
import { chdir, stdout, stdin, exit, cwd, nextTick } from 'node:process';
import readline from 'readline';
import { up } from './src/up.js';
import { cd } from './src/cd.js';
import { cp } from './src/cp.js';
import { ls } from './src/ls.js';
import { cat } from './src/cat.js';
import { add } from './src/add.js';
import { rn } from './src/rn.js';
import { rm } from './src/rm.js';
import { compress } from './src/compress.js';
import { decompress } from './src/decompress.js';
import { hash } from './src/hash.js';
import { os } from './src/os.js';

let currentFolder;
let userName;
const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];

const args = process.argv.slice(2);
if (args.length = 1) {
    const temp = args[0].split('=');
    if (temp[0] === '--username' && temp[1]) {
        userName = temp[1];
        console.log(`Welcome to the File Manager, ${userName}!`);
        chdir(homedir());
        startManager();
    }
}

function startManager() {
    showCurrentFolder();

    let rl = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    rl.on('line', async line => {
        const comandWithArguments = line.trim().split(' ');
        const [command, arg] = [comandWithArguments[0], comandWithArguments.slice(1)];

        switch (command) {
            case '.exit':
                rl.close();
                stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
                break;
            case 'up':
                if (!checkArguments(arg, 0)) {
                    console.log('Invalid input\n');
                } else {
                    up();
                }
                break;
            case 'cd':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                } else {
                    cd(arg[0]);
                }
                break;
            case 'ls':
                if (!checkArguments(arg, 0)) {
                    console.log('Invalid input\n');
                } else {
                    await ls();
                }
                break;
            case 'cat':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                } else {
                    await cat(arg[0]);
                }
                break;
            case 'add':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                } else {
                    await add(arg[0]);
                }
                break;
            case 'rn':
                if (!checkArguments(arg, 2)) {
                    console.log('Invalid input\n');
                } else {
                    await rn(arg[0], arg[1]);
                }
                break;
            case 'cp':
                if (!checkArguments(arg, 2)) {
                    console.log('Invalid input\n');
                } else {
                    cp(arg[0], arg[1]);
                }
                break;
            case 'mv':
                console.log('mv');
                break;
            case 'rm':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                } else {
                    await rm(arg[0]);
                }
                break;
            case 'os':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                    break;
                }
                if (!checkOsArguments(arg[0])) {
                    console.log('Invalid input\n');
                } else {
                    await os(arg[0]);
                }
                break;
            case 'hash':
                if (!checkArguments(arg, 1)) {
                    console.log('Invalid input\n');
                } else {
                    await hash(arg[0]);
                }
                break;
            case 'compress':
                if (!checkArguments(arg, 2)) {
                    console.log('Invalid input\n');
                } else {
                    await compress(arg[0], arg[1]);
                }
                break;
            case 'decompress':
                if (!checkArguments(arg, 2)) {
                    console.log('Invalid input\n');
                } else {
                    await decompress(arg[0], arg[1]);
                }
                break;
            default:
                console.log('Invalid input\n');
                break;
        }
        showCurrentFolder();
    });

    if (process.platform === "win32") {
        rl.on('SIGINT', () => process.emit('SIGINT'))
    }

    process.on('SIGINT', () => {
        stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
        nextTick(() => exit());
    });
}

function showCurrentFolder() {
    const folderPath = cwd();
    console.log(`You are currently in ${folderPath}`);
}

function checkArguments(arg, size) {
    if (arg.length === size) return true;
    return false;
}

function checkOsArguments(arg) {
    const parametrs = ['--EOL', '--cpus', '--homedir', '--architecture', '--username']
    if (parametrs.includes(arg)) return true;
    return false;
}
