import _ from 'lodash';

const gendiffTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedKeys = _.union(keys1, keys2).sort();
  //console.log(sortedKeys);

  const diff = sortedKeys.reduce((acc, key) => {
      if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
          acc.push(` - ${key}: ${data1[key]}`)
      } else if (Object.hasOwn(data2, key) && !Object.hasOwn(data1, key)) {
          acc.push(` + ${key}: ${data2[key]}`)
      }  else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
          if (data1[key] === data2[key]) {
              acc.push(`   ${key}: ${data2[key]}`)
          } else if (data1[key] !== data2[key]) {
              acc.push(` - ${key}: ${data1[key]}`)
              acc.push(` + ${key}: ${data2[key]}`)
          } 
       }  
      return acc;
  }, ['{'])
  diff.push('}');
  const result = diff.join('\n');
  return result;
};
export default gendiffTree;
