import rm from './rm.js'
import cp from './cp.js'

export const mv = async (pathFrom, pathTo) => {
    try {
        cp(pathFrom, pathTo).then(rm(pathFrom));
    } catch (err) {
        console.error(`Operation failed`);
    }
}