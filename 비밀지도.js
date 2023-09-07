function solution(n, arr1, arr2) {
  const bitarr = arr1.map((m, idx) => (m | arr2[idx]).toString(2));
  const map = bitarr.map((v) =>
    v.padStart(n, 0).replace(/1/g, "#").replace(/0/g, " ")
  );
  return map;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// 출력	["#####","# # #", "### #", "# ##", "#####"]
