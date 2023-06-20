function solution(clothes) {
  const setClothes = {};
  clothes.forEach((val, idx) => {
    setClothes[val[1]] = (setClothes[val[1]] || 0) + 1;
  });

  let answer = 1;
  for (let i in setClothes) {
    answer *= setClothes[i] + 1;
  }
  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

// 부위가 같으면 조합불가
// 부위가 다르면 조합가능
