import path from 'node:path';
import { readFileSync } from 'node:fs';
import parser from './parsers.js';
import gendiffTree from './gendiffTreeFile.js';
import formatter from './formatters/index.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const getExtension = (filename) => path.extname(filename).slice(1);
const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), getExtension(filePath));

const gendiffFunction = (path1, path2, format = 'stylish') => {
  const filePath1 = getFullPath(path1);
  const filePath2 = getFullPath(path2);

  const data1 = getData(filePath1);
  const data2 = getData(filePath2);

  return formatter(gendiffTree(data1, data2), format);
}
export default gendiffFunction;

//console.log(gendiffFunction('__fixtures__/file1.json', '__fixtures__/file2.json'));
