import path from 'node:path';
import fs from 'fs';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath)

const gendiff = (path1, path2) => {
    const absolute1 = buildFullPath(path1);
    const absolute2 = buildFullPath(path2);
    const data1 = fs.readFileSync(absolute1, 'utf-8')
    const data2 = fs.readFileSync(absolute2, 'utf-8')
    console.log(data1, data2);
}

export default gendiff;