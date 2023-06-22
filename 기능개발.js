function solution(progresses, speeds) {
  let set = {};
  progresses.forEach((val, idx) => {
    set[val] = speeds[idx];
  });
  console.log(set);
  var answer = [];
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
