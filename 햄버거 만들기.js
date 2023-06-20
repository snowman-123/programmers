function solution(ingredient) {
  //1 빵 2야채 3고기
  // 1 2 3 1 스택
  let answer;
  const stack = [];
  ingredient.forEach((ing, i) => {
    stack.push(ing);
    if (stack.slice(-4).join("") === "1231") {
      //     stack.splice
      //     answer++;
    }
  });
  console.log(stack.slice(-4).join(""));
  return answer;
}
solution("[2, 1, 1, 2, 3, 1, 2, 3, 1]");
