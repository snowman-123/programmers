console.log(
  [2, 3, 4, 5, 6].reduce((a, b) => {
    console.log(a, b);
    return a + b;
  })
);
