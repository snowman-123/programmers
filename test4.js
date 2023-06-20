function checkvalidity(today, date, validity) {
  let [y1, m1, d1] = today.split(".").map(Number),
    [y2, m2, d2] = date.split(".").map(Number);

  // let diff =
  // console.log(y3, m3, d3);
  return ((y1 - y2) * 12 + (m1 - m2)) * 28 + (d1 - d2) >= validity * 28;
}

function solution(today, terms, privacies) {
  const answer = [];
  const map = new Map();

  for (let t of terms) {
    let [kind, validity] = t.split(" ");
    map.set(kind, +validity);
  }

  privacies.forEach((val, idx) => {
    let [date, kind] = val.split(" ");
    if (checkvalidity(today, date, map.get(kind))) answer.push(idx + 1);
  });
  console.log(answer);
  return answer;
}
solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);
