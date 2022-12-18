import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { chdir, stdout, stdin, exit, cwd, nextTick } from 'node:process';
import { fileURLToPath } from 'node:url';
import readline from 'readline';
import { up } from './src/up.js';
import { cd } from './src/cd.js';
import { ls } from './src/ls.js';
import { cat } from './src/cat.js';
import { add } from './src/add.js';

// const folderPath = dirname(fileURLToPath(import.meta.url));
// const folderName = "files";
// const fileName = "fileToRead.txt";
// const filePath = join(folderPath, folderName, fileName);
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
        currentFolder = cwd();
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
                console.log('rn');
                break;
            case 'cp':
                console.log('cp');
                break;
            case 'mv':
                console.log('mv');
                break;
            case 'rm':
                console.log('rm');
                break;
            case 'os':
                console.log('os');
                break;
            case 'hash':
                console.log('hash');
                break;
            case 'compress':
                console.log('compress');
                break;
            case 'up':
                console.log('decompress');
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
