// BEGIN
const magic = (...args) => {
  const sum = args.reduce((acc, val) => acc + val, 0);
  
  const result = (...newArgs) => magic(sum, ...newArgs);
  result.valueOf = () => sum;
  
  return result;
};

export default magic;
// END 