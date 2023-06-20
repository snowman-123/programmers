function solution(s) {
  let stk1 = [];
  const arr = [...s];
  let cnt = 0;

  arr.forEach((c, index) => {
    stk1.push(c);
    let a = stk1.filter((c) => c === stk1[0]);
    let b = stk1.filter((c) => c !== stk1[0]);
    if (a.length == b.length) {
      cnt++;
      stk1 = [];
    }
  });

  console.log(cnt);
  stk1.length > 0 ? cnt++ : null;
  return cnt;
}
