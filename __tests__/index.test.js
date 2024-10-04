import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('check json stylish', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(gendiff(file1, file2)).toEqual(result);
});

test('check yaml stylish', () => {
    const file1 = getFixturePath('file1.yaml');
    const file2 = getFixturePath('file2.yaml');
    expect(gendiff(file1, file2)).toEqual(result);
});

test('check yml stylish', () => {
    const file1 = getFixturePath('file1.yml');
    const file2 = getFixturePath('file2.yml');
    expect(gendiff(file1, file2)).toEqual(result);
});