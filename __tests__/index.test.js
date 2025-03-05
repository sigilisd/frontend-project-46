import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';

import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('comparison_stylish', () => {
    const correctFile1 = getFixturePath('file1.json');
    const correctFile2 = getFixturePath('file2.json');
    expect(gendiff(correctFile1, correctFile2)).toEqual(result);
});

test('comparison_yaml_stylish', () => {
    const correctFile1 = getFixturePath('file1.yaml');
    const correctFile2 = getFixturePath('file2.yaml');
    expect(gendiff(correctFile1, correctFile2)).toEqual(result);
});

test('comparison_yml_stylish', () => {
    const correctFile1 = getFixturePath('file1.yml');
    const correctFile2 = getFixturePath('file2.yml');
    expect(gendiff(correctFile1, correctFile2)).toEqual(result);
});