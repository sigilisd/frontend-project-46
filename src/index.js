import path from 'node:path';
import { readFileSync } from 'node:fs';
import parser from './parsers.js';
import gendiffTree from './gendiffTreeFile.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const getExtension = (filename) => path.extname(filename).slice(1);
const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), getExtension(filePath));
const gendiff = (path1, path2) => {
  const filePath1 = getFullPath(path1);
  const filePath2 = getFullPath(path2);
  const data1 = getData(filePath1);
  const data2 = getData(filePath2);
  return gendiffTree(data1, data2);
}
export default gendiff;

//console.log(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json'));
