//n =총길이, m= 룰러길이, section = 칠해야하는 곳
function solution(n, m, section) {
  let answer = 0;
  let tmp = 0;
  section.forEach((val, idx) => {
    if (val > tmp) {
      tmp = val + m - 1;
      answer++;
    }
  });
  console.log(answer);
  return answer;
}

solution(8, 4, [2, 3, 6]);
