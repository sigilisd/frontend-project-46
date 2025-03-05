#!/usr/bin/env node
import { program } from 'commander';
import gendiffFunction from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath, filepath2) => {
    const options = program.opts();
    const formatterFormat = options.format;
    console.log(gendiffFunction(filepath, filepath2, formatterFormat));
  })

program.parse(); 