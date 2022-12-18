import rm from './rm'
import cp from './cp'

export const mv = async (pathFrom, pathTo) => {
    try {
        await cp(pathFrom, pathTo);
        await rm(pathFrom);
    } catch (err) {
        console.error(`Operation failed`);
    }
}