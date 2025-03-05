import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';

import gendiff from '../src/index.js';
import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('comparison_stylish', () => {
    const correctFile1 = getFixturePath('file1.json');
    const correctFile2 = getFixturePath('file2.json');
    expect(gendiff(correctFile1, correctFile2)).toEqual(resultStylish);
    expect(gendiff(correctFile1, correctFile2, 'plain')).toEqual(resultPlain);
});

test('comparison_yaml_stylish', () => {
    const correctFile1 = getFixturePath('file1.yaml');
    const correctFile2 = getFixturePath('file2.yaml');
    expect(gendiff(correctFile1, correctFile2)).toEqual(resultStylish);
    expect(gendiff(correctFile1, correctFile2, 'plain')).toEqual(resultPlain);
});

test('comparison_yml_stylish', () => {
    const correctFile1 = getFixturePath('file1.yml');
    const correctFile2 = getFixturePath('file2.yml');
    expect(gendiff(correctFile1, correctFile2)).toEqual(resultStylish);
    expect(gendiff(correctFile1, correctFile2, 'plain')).toEqual(resultPlain);
});