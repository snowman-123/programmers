function solution(X, Y) {
  const mapx = [...Array(10)].fill(0);
  const mapy = [...Array(10)].fill(0);

  [...X].forEach((value, index) => {
    value ? mapx[value]++ : null;
  });

  [...Y].forEach((value, index) => {
    value ? mapy[value]++ : null;
  });

  let result = "";
  mapx.map((value, i) => {
    if (mapx[i] != 0 && mapy[i] != 0) {
      result += String(i).repeat(Math.min(value, mapy[i]));
    }
  });
  if (result == "") return "-1";
  if (Number(result) === 0) return "0";
  return result.split("").reverse().join("");
}
solution("100", "203045");
