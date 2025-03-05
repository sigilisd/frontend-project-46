import yaml from 'js-yaml';

const parser = (file, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(file);
    case 'yaml':
      return yaml.load(file);
    case 'yml':
      return yaml.load(file);
    default:
      return 'default for the linter';
  }
};
export default parser;
