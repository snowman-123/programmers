function solution(s) {
  let arr = [0, 0];
  let tmp;
  let count;
  while (s !== "1") {
    count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        count++; //0제거 개수
      }
    }
    arr[1] += count;
    tmp = s.length - count;
    s = tmp.toString(2);
    arr[0]++; //이진변환횟수
  }
  return arr;
}
console.log(solution("1111111"));
