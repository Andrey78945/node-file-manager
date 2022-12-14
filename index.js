import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { chdir, stdout, stdin } from 'node:process';
import { fileURLToPath } from 'node:url';
import readline from 'readline';
import { up } from './src/up.js';

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
        currentFolder = homedir();
        startManager();
    }
}

function startManager() {
    showCurrentFolder();

    let rl = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    rl.on('line', line => {
        const comandWithArguments = line.trim().split(' ');
        const [command, arg] = [comandWithArguments[0], comandWithArguments.slice(1)];

        switch (command) {
            case '.exit':
                rl.close();
                stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
                break;
            case 'up':
                currentFolder = up(currentFolder);
                showCurrentFolder();
                break;
            case 'cd':
                console.log('cd');
                break;
            case 'ls':
                console.log('ls');
                break;
            case 'cat':
                console.log('cat');
                break;
            case 'add':
                console.log('add');
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
    });

    // process.on('SIGINT', () => {
    //     stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
    //     setTimeout(process.exit(), 100);
    //     //rl.close();
    // });

}

function showCurrentFolder() {
    const folderPath = dirname(fileURLToPath(import.meta.url));
    console.log(`You are currently in ${currentFolder}`);
}

