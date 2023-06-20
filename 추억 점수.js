//reduce를 굳이 써야하나?
function solution(name, yearning, photo) {
  const maps = {};
  const answer = [];

  name.forEach((val, idx) => {
    maps[val] = yearning[idx];
  });
  //   console.log(maps);
  photo.forEach((val, idx) => {
    let sum = 0;
    val.forEach((value, index) => {
      if (maps[value]) sum += maps[value];
    });
    answer.push(sum);
  });
  //   console.log(answer);
  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
