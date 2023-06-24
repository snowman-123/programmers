function solution(sizes) {
  const a = [];
  const b = [];
  let x, y;
  sizes.forEach((val, idx) => {
    x = Math.max(val[0], val[1]);
    a.push(x);
    y = Math.min(val[0], val[1]);
    b.push(y);
  });
  return Math.max(...a) * Math.max(...b);
}
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
