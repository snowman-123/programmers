function dateFormat(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;

  return date.getFullYear() + "." + month + "." + day;
}

function solution(today, terms, privacies) {
  //현재시간 보관기간 수집일자
  let time1 = today.split("."); // 2022 05 19
  const map = new Map();
  const answer = []; //파기해야할 것의 인덱스 privacies+1

  for (const i of terms) {
    let [type, term] = i.split(" "); // A 6
    map.set(type, +term);
  }
  privacies.forEach((value, index) => {
    // console.log(value, index); //2021.05.02 A 0
    let privacy = value.split(" ");
    let time2 = privacy[0].split(".").map(Number);
    let diff = time1.map((x, y) => {
      let sub = x - time2[y];
      return sub;
    });
    (diff[0] * 12 + diff[1]) * 28 + diff[2] >= 28 * map.get(privacy[1])
      ? answer.push(index + 1)
      : null;
    console.log("answer : ", answer);
  });
  console.log(map);
  return answer;
}
solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);
