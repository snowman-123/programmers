function solution(participant, completion) {
  //참가자 완주
  const obj = {};
  participant.forEach((value, index) => {
    obj[value] = obj[value] ? obj[value] + 1 : 1;
  });
  completion.forEach((value, index) => {
    obj[value] -= 1;
  });
  for (let i in obj) {
    if (obj[i] == 1) return i;
  }

  // console.log(answer);
}
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

var solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
