const a = [2, 1, 3, 4];
for (let i = 0; i < a.length; ++i) {
  console.log(a[i]);
  i = 0;
  console.log(a);
  a.shift();
}
