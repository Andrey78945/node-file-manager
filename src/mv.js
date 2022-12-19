import rm from './rm.js'
import cp from './cp.js'

export const mv = async (pathFrom, pathTo) => {
    try {
        await cp(pathFrom, pathTo);
        await rm(pathFrom);
    } catch (err) {
        console.error(`Operation failed`);
    }
}