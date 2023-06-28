const a = [2, 1, 3, 4];
const array = a.forEach((process, index) => {
  return { process, index };
});

console.log(array);

console.log(a.pop(), a.shift());
