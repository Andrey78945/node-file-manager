import { basename, resolve, join } from 'node:path';
import { readdir, stat } from 'node:fs/promises';
import { cwd } from 'node:process';

// function Item(name, type) {
//     this.name = name;
//     this.type = type;
// }

export const ls = async function () {
    try {
        const folder = await readdir(resolve(cwd()));
        // const files = [];
        // const folders = [];
        // console.log(join(resolve(cwd()), folder[0]))
        // folder.forEach((item) => {
        //     stat(join(resolve(cwd()), item), (err, stats) => {
        //         if (err) {
        //             throw new Error(err);
        //         }
        //         let name = basename(item);
        //         console.log(name)
        //         if (stats.isFile()) {
        //             files.push(name);
        //         } else {
        //             folders.push(name);
        //         }
        //     })
        // })
        // console.log(folders)
        // const sortedFolder = [...folders, ...files];
        console.table(folder);
    } catch (err) {
        console.error(`Operation failed`);
    }
}

// const readDir = async () => {
//     try {
//         const folderContent = await readdir(dirPath);

//         folderContent.forEach(async (item) => {
//             const itemPath = path.join(dirPath, item);
//             const itemStats = await stat(itemPath);

//             if (itemStats.isFile()) {
//                 let ext = path.extname(item);
//                 let name = path.basename(item);
//                 let index = name.indexOf('.')
//                 name = index === -1 ? name : name.slice(0, index);
//                 console.log(name, ext.slice(1), `${itemStats.size / 1024}Kb`)
//             }
//         });
//     } catch (err) {
//         throw new Error(err);
//     }
// }