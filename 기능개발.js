function solution(progresses, speeds) {
  const date = [];
  const answer = [0];
  let max = 0;
  let tmp = 0;

  progresses.forEach((val, idx) => {
    date.push(Math.ceil((100 - val) / speeds[idx]));
  });

  max = date[0];
  for (let i = 0; i < date.length; i++) {
    if (date[i] > max) {
      max = date[i];
      tmp++;
      answer[tmp] = 1;
    } else {
      answer[tmp]++;
    }
  }
  return answer;
}
solution([93, 30, 55], [1, 30, 5]);
